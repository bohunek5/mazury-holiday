import os
import re

ts_file = "src/data/stranda-apartments.ts"
with open(ts_file, "r") as f:
    content = f.read()

# Fix galleries
import glob
apts = re.findall(r"'([A-C]\d{2,3})':\s*\{", content)
for apt in apts:
    img_dir = f"public/images/stranda/{apt}"
    if os.path.exists(img_dir):
        files = glob.glob(f"{img_dir}/*.webp")
        if files:
            files = [os.path.basename(f) for f in files]
            # sort: hero first, then others
            hero = [f for f in files if 'hero' in f]
            others = sorted([f for f in files if 'hero' not in f])
            if hero:
                hero_img = hero[0]
            else:
                hero_img = others[0] if others else ''
            
            all_imgs = hero + others
            
            if hero_img:
                # Find the gallery block for this apt
                # We need to replace the gallery block
                # A bit tricky with regex, let's just find the gallery object within the apt block
                pattern = r"('" + apt + r"':\s*\{.*?gallery:\s*\{)(.*?)(\}\s*\n\s*\},?\n)"
                # Actually, parsing TS is hard with simple regex. Let's do a more robust approach.
