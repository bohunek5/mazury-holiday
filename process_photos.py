import os
import glob
import shutil
import subprocess
from pathlib import Path

downloads_dir = os.path.expanduser("~/Downloads")
project_dir = os.path.abspath(os.path.join(os.path.dirname(__file__)))
public_stranda = os.path.join(project_dir, "public", "images", "stranda")

# Folders to process
apartments_to_process = [
    "A104", "A305", "A403", "B102", "B103", "B304", "B305", 
    "B401", "B402", "B404", "C404", "Pokoje"
]

def get_drive_dirs():
    dirs = []
    for i in range(2, 6):
        path = os.path.join(downloads_dir, f"Apartamenty {i}")
        if os.path.isdir(path):
            dirs.append(path)
    return dirs

def convert_to_webp(src_path, dst_path):
    # Using Pillow or cwebp
    # We will assume PIL is installed in the environment running this
    try:
        from PIL import Image
        with Image.open(src_path) as img:
            # Convert to RGB if necessary
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")
            img.save(dst_path, "webp", quality=80)
            return True
    except Exception as e:
        print(f"Error converting {src_path}: {e}")
        return False

def find_jacuzzi_image(images):
    for img in images:
        lower_name = img.lower()
        if "jacuzzi" in lower_name or "taras" in lower_name or "woda" in lower_name or "widok" in lower_name:
            return img
    return None

def process_apartments():
    drive_dirs = get_drive_dirs()
    print(f"Found drive dirs: {drive_dirs}")
    
    for apt in apartments_to_process:
        print(f"--- Processing {apt} ---")
        dest_folder = os.path.join(public_stranda, apt)
        os.makedirs(dest_folder, exist_ok=True)
        
        # Gather all images for this apt from downloaded folders
        apt_images_src = []
        for ddir in drive_dirs:
            apt_dir = os.path.join(ddir, apt)
            if os.path.isdir(apt_dir):
                for f in os.listdir(apt_dir):
                    if f.lower().endswith(('.jpg', '.jpeg', '.png')):
                        apt_images_src.append(os.path.join(apt_dir, f))
        
        if not apt_images_src:
            print(f"No source images found for {apt} in downloads.")
            continue
            
        print(f"Found {len(apt_images_src)} images for {apt}.")
        
        # Convert and copy them to dest_folder
        converted_images = []
        for i, src in enumerate(sorted(apt_images_src)):
            # Create a nice name, e.g., 01.webp, 02.webp
            # But wait, we want to keep some original name if it says 'jacuzzi'
            base_name = os.path.basename(src).lower()
            if "jacuzzi" in base_name or "taras" in base_name:
                dst_name = f"hero_{i+1}.webp"
            else:
                dst_name = f"new_{i+1}.webp"
                
            dst = os.path.join(dest_folder, dst_name)
            if convert_to_webp(src, dst):
                converted_images.append(dst_name)
        
        print(f"Converted {len(converted_images)} images for {apt}.")

if __name__ == "__main__":
    process_apartments()
