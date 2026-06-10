import os
import glob
import shutil
from pathlib import Path
import re

downloads_dir = os.path.expanduser("~/Downloads")
project_dir = os.path.abspath(os.path.join(os.path.dirname(__file__)))
public_stranda = os.path.join(project_dir, "public", "images", "stranda")
ts_file = os.path.join(project_dir, "src", "data", "stranda-apartments.ts")

# The apartments Radek mentioned
radek_apts = [
    "A104", "A305", "A403", 
    "B102", "B103", "B304", "B305", "B401", "B402", "B404", 
    "C404"
]

# We will use "Apartamenty 5" as the primary source since it has all the recent updates
# If an apt isn't in 5, we check 4, 3, 2.
apt_source_dirs = []
for i in range(5, 1, -1):
    path = os.path.join(downloads_dir, f"Apartamenty {i}")
    if os.path.isdir(path):
        apt_source_dirs.append(path)

def convert_to_webp(src_path, dst_path):
    try:
        from PIL import Image
        with Image.open(src_path) as img:
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")
            img.save(dst_path, "webp", quality=80)
            return True
    except Exception as e:
        print(f"Error converting {src_path}: {e}")
        return False

def is_old_folder(folder_name):
    lower = folder_name.lower()
    if "stare" in lower or "roboczy" in lower:
        return True
    return False

def get_valid_photos(apt_dir):
    valid_photos = []
    
    # Are there '2026' or '3000x2000' folders?
    has_new_subfolders = False
    for item in os.listdir(apt_dir):
        item_path = os.path.join(apt_dir, item)
        if os.path.isdir(item_path):
            if "2026" in item or "3000" in item or "nowe" in item.lower():
                has_new_subfolders = True
                
    # If there are "new" subfolders, ONLY take from them!
    # Otherwise, take from root, ignoring "stare".
    for root, dirs, files in os.walk(apt_dir):
        # Exclude "stare" directories from traversal
        dirs[:] = [d for d in dirs if not is_old_folder(d)]
        
        # If we have new subfolders, and we are currently at the root, don't take files from root.
        if has_new_subfolders and root == apt_dir:
            continue
            
        for f in files:
            if f.lower().endswith(('.jpg', '.jpeg', '.png')):
                valid_photos.append(os.path.join(root, f))
                
    return valid_photos

def process():
    galleries = {}
    
    for apt in radek_apts:
        print(f"--- Processing {apt} ---")
        # Find best source dir
        apt_dir = None
        for base in apt_source_dirs:
            candidate = os.path.join(base, apt)
            if os.path.isdir(candidate):
                apt_dir = candidate
                break
                
        if not apt_dir:
            print(f"Could not find source folder for {apt}")
            continue
            
        photos = get_valid_photos(apt_dir)
        if not photos:
            print(f"No valid photos found for {apt} in {apt_dir}")
            continue
            
        # Clear destination directory
        dest_folder = os.path.join(public_stranda, apt)
        if os.path.exists(dest_folder):
            shutil.rmtree(dest_folder)
        os.makedirs(dest_folder, exist_ok=True)
        
        # Sort and pick hero
        hero_src = None
        other_srcs = []
        for p in sorted(photos):
            name = os.path.basename(p).lower()
            if not hero_src and ("jacuzzi" in name or "taras" in name or "widok" in name or "balkon" in name):
                hero_src = p
            else:
                other_srcs.append(p)
                
        if not hero_src and other_srcs:
            hero_src = other_srcs.pop(0)
            
        final_gallery = []
        
        if hero_src:
            dst = os.path.join(dest_folder, "hero_1.webp")
            if convert_to_webp(hero_src, dst):
                final_gallery.append(f'/images/stranda/{apt}/hero_1.webp')
                
        for i, src in enumerate(other_srcs):
            dst_name = f"new_{i+1}.webp"
            dst = os.path.join(dest_folder, dst_name)
            if convert_to_webp(src, dst):
                final_gallery.append(f'/images/stranda/{apt}/{dst_name}')
                
        print(f"Generated {len(final_gallery)} photos for {apt}")
        galleries[apt] = final_gallery
        
    # Update TS file
    with open(ts_file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    for apt, images in galleries.items():
        if not images: continue
        
        # Regex to find the gallery block for this apartment
        pattern = re.compile(
            r"('" + apt + r"':\s*\{.*?gallery:\s*\{)(.*?)\}(.*?\},)", 
            re.DOTALL
        )
        
        def repl(m):
            prefix = m.group(1)
            suffix = m.group(3)
            
            hero = images[0]
            lines = [f'            "heroImage": getAssetPath("{hero}"),', '            "images": [']
            for i, img in enumerate(images):
                comma = "," if i < len(images) - 1 else ""
                lines.append(f'                getAssetPath("{img}"){comma}')
            lines.append('            ]')
            
            new_gallery = "\n".join(lines) + "\n        "
            return prefix + "\n" + new_gallery + "}" + suffix

        content, count = pattern.subn(repl, content)
        if count > 0:
            print(f"Updated TS gallery for {apt}")
        else:
            print(f"Could not find/update TS gallery for {apt}")
            
    with open(ts_file, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    process()
