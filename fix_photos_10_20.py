import os
import glob
import shutil
from pathlib import Path
import re

downloads_dir = os.path.expanduser("~/Downloads")
project_dir = os.path.abspath(os.path.join(os.path.dirname(__file__)))
public_stranda = os.path.join(project_dir, "public", "images", "stranda")
ts_file = os.path.join(project_dir, "src", "data", "stranda-apartments.ts")

# The apartments Radek mentioned. Skip A305 as it's already perfect.
radek_apts = [
    "A104", "A403", 
    "B102", "B103", "B304", "B305", "B401", "B402", "B404", 
    "C404"
]

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

def get_valid_photos(apt):
    valid_photos = []
    seen_sizes = set()
    
    # We will search ALL Apartamenty X folders for this apt to get max photos
    for base in apt_source_dirs:
        apt_dir = os.path.join(base, apt)
        if not os.path.isdir(apt_dir):
            continue
            
        for root, dirs, files in os.walk(apt_dir):
            # Exclude "stare" directories from traversal
            dirs[:] = [d for d in dirs if not is_old_folder(d)]
            
            for f in files:
                if f.lower().endswith(('.jpg', '.jpeg', '.png')):
                    full_path = os.path.join(root, f)
                    try:
                        size = os.path.getsize(full_path)
                        # Avoid exact duplicates by size
                        if size not in seen_sizes:
                            seen_sizes.add(size)
                            valid_photos.append(full_path)
                    except:
                        pass
                        
    return valid_photos

def process():
    galleries = {}
    
    for apt in radek_apts:
        print(f"--- Processing {apt} ---")
            
        photos = get_valid_photos(apt)
        if not photos:
            print(f"No valid photos found for {apt}")
            continue
            
        # Limit to 20 photos
        photos = sorted(photos)[:20]
        
        # Clear destination directory
        dest_folder = os.path.join(public_stranda, apt)
        if os.path.exists(dest_folder):
            shutil.rmtree(dest_folder)
        os.makedirs(dest_folder, exist_ok=True)
        
        # Sort and pick hero
        hero_src = None
        other_srcs = []
        for p in photos:
            name = os.path.basename(p).lower()
            if not hero_src and ("jacuzzi" in name or "taras" in name or "widok" in name or "balkon" in name or "woda" in name):
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
