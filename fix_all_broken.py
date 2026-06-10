import re
import os
import glob

with open("src/data/stranda-apartments.ts", "r") as f:
    content = f.read()

# Find all missing images
paths = re.findall(r'getAssetPath\((["\'])(.*?)\1\)', content)
broken_apts = set()
for p in paths:
    rel_path = "public" + p[1]
    if not os.path.exists(rel_path):
        m = re.search(r'/images/stranda/(.*?)/', rel_path)
        if m:
            broken_apts.add(m.group(1))

print("Broken apts:", broken_apts)

for apt in broken_apts:
    pattern = r"('"+apt+r"': \{.*?)(\s*gallery:\s*\{.*?\})(?=\n    \},)"
    match = re.search(pattern, content, flags=re.DOTALL)
    if match:
        prefix = match.group(1)
        
        img_dir = f"public/images/stranda/{apt}"
        files = glob.glob(f"{img_dir}/*.webp")
        files = [os.path.basename(f) for f in files]
        hero = [f for f in files if 'hero' in f]
        others = sorted([f for f in files if 'hero' not in f])
        all_imgs = hero + others
        
        if not all_imgs:
            print(f"Warning: No images found for {apt}")
            continue
            
        hero_str = f'        gallery: {{\n            "heroImage": getAssetPath("/images/stranda/{apt}/{hero[0]}"),\n            "images": [\n' if hero else ''
        if not hero_str:
             hero_str = f'        gallery: {{\n            "heroImage": getAssetPath("/images/stranda/{apt}/{all_imgs[0]}"),\n            "images": [\n'
             
        imgs_str = ""
        for idx, img in enumerate(all_imgs):
            comma = "," if idx < len(all_imgs) - 1 else ""
            imgs_str += f'                getAssetPath("/images/stranda/{apt}/{img}"){comma}\n'
            
        imgs_str += f'            ]\n        }}'
        
        content = content[:match.start()] + prefix + "\n" + hero_str + imgs_str + content[match.end():]

with open("src/data/stranda-apartments.ts", "w") as f:
    f.write(content)

print("Fixed all broken apts.")
