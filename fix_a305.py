import re
import os
import glob

with open("src/data/stranda-apartments.ts", "r") as f:
    content = f.read()

# Replace the gallery block for A305
gallery_pattern = r"('A305': \{.*?gallery:\s*\{.*?)(?=\},\n\s*'additionalInfo'|\},\n\s*'idoBookingId'|\}\n    \},)"
# The gallery is the last field in the object, usually followed by `    },`
gallery_pattern = r"('A305': \{.*?)(\s*gallery:\s*\{.*?\})(?=\n    \},)"

match = re.search(gallery_pattern, content, flags=re.DOTALL)
if match:
    prefix = match.group(1)
    
    img_dir = f"public/images/stranda/A305"
    files = glob.glob(f"{img_dir}/*.webp")
    files = [os.path.basename(f) for f in files]
    hero = [f for f in files if 'hero' in f]
    others = sorted([f for f in files if 'hero' not in f])
    all_imgs = hero + others
    
    hero_str = f'        gallery: {{\n            "heroImage": getAssetPath("/images/stranda/A305/{hero[0]}"),\n            "images": [\n' if hero else ''
    if not hero_str:
         hero_str = f'        gallery: {{\n            "heroImage": getAssetPath("/images/stranda/A305/{all_imgs[0]}"),\n            "images": [\n'
         
    imgs_str = ""
    for idx, img in enumerate(all_imgs):
        comma = "," if idx < len(all_imgs) - 1 else ""
        imgs_str += f'                getAssetPath("/images/stranda/A305/{img}"){comma}\n'
        
    imgs_str += f'            ]\n        }}'
    
    new_content = content[:match.start()] + prefix + "\n" + hero_str + imgs_str + content[match.end():]
    
    with open("src/data/stranda-apartments.ts", "w") as f:
        f.write(new_content)
    print("A305 updated.")
else:
    print("Not found")

