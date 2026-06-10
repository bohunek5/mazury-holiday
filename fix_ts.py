import re
import os
import glob

with open("src/data/stranda-apartments.ts", "r") as f:
    lines = f.readlines()

out_lines = []
in_apt = False
apt_id = None
in_gallery = False
has_sauna = False
has_jacuzzi = False
title_idx = -1

i = 0
while i < len(lines):
    line = lines[i]
    
    # Match apartment start
    m = re.match(r"^\s*'([A-C]\d{2,3})':\s*\{", line)
    if m:
        in_apt = True
        apt_id = m.group(1)
        has_sauna = False
        has_jacuzzi = False
        title_idx = -1
    
    if in_apt:
        if re.search(r"title:\s*`Apartament", line):
            title_idx = len(out_lines)
            
        if "Sauna" in line or "sauna" in line.lower():
            if "amenities" in "".join(lines[max(0, i-20):i+5]): # rough check
                has_sauna = True
        if "Jacuzzi" in line or "jacuzzi" in line.lower():
            if "amenities" in "".join(lines[max(0, i-20):i+5]):
                has_jacuzzi = True
                
        # Match gallery start
        if re.search(r"gallery:\s*\{", line):
            in_gallery = True
            out_lines.append(line)
            
            # Generate new gallery content based on actual files
            img_dir = f"public/images/stranda/{apt_id}"
            if os.path.exists(img_dir):
                files = glob.glob(f"{img_dir}/*.webp")
                files = [os.path.basename(f) for f in files]
                hero = [f for f in files if 'hero' in f]
                others = sorted([f for f in files if 'hero' not in f])
                all_imgs = hero + others
                if all_imgs:
                    hero_img = all_imgs[0]
                    out_lines.append(f'            "heroImage": getAssetPath("/images/stranda/{apt_id}/{hero_img}"),\n')
                    out_lines.append(f'            "images": [\n')
                    for idx, img in enumerate(all_imgs):
                        comma = "," if idx < len(all_imgs) - 1 else ""
                        out_lines.append(f'                getAssetPath("/images/stranda/{apt_id}/{img}"){comma}\n')
                    out_lines.append(f'            ]\n')
                else:
                    out_lines.append(f'            "heroImage": getAssetPath("/images/stranda/{apt_id}/{apt_id}_1.webp"),\n')
                    out_lines.append(f'            "images": [getAssetPath("/images/stranda/{apt_id}/{apt_id}_1.webp")]\n')
            else:
                out_lines.append(f'            "heroImage": getAssetPath("/images/stranda/{apt_id}/{apt_id}_1.webp"),\n')
                out_lines.append(f'            "images": [getAssetPath("/images/stranda/{apt_id}/{apt_id}_1.webp")]\n')
            
            # Skip lines until end of gallery
            i += 1
            brace_count = 1
            while i < len(lines) and brace_count > 0:
                if "{" in lines[i]: brace_count += lines[i].count("{")
                if "}" in lines[i]: brace_count -= lines[i].count("}")
                i += 1
            out_lines.append("        }")
            # wait, the closing brace is added, we need to check if we missed a comma
            if i < len(lines) and lines[i].strip().startswith(","):
                out_lines[-1] += ",\n"
                i += 1
            else:
                out_lines[-1] += "\n"
            
            # Now update the title if needed
            if title_idx != -1:
                title_line = out_lines[title_idx]
                # Strip existing tags to avoid duplication
                title_line = re.sub(r"\s*z Sauną i Jacuzzi", "", title_line)
                title_line = re.sub(r"\s*z Jacuzzi i Sauną", "", title_line)
                title_line = re.sub(r"\s*z Sauną", "", title_line)
                title_line = re.sub(r"\s*z Jacuzzi", "", title_line)
                
                suffix = ""
                if has_sauna and has_jacuzzi:
                    suffix = " z Sauną i Jacuzzi"
                elif has_sauna:
                    suffix = " z Sauną"
                elif has_jacuzzi:
                    suffix = " z Jacuzzi"
                
                if suffix:
                    out_lines[title_idx] = title_line.replace("`", f"{suffix}`", 1) if "`" in title_line else title_line.replace("'", f"{suffix}'", 1)
            
            continue # Already advanced i

        # Apartment end
        if re.match(r"^\s*\},?\s*$", line) and not in_gallery:
            in_apt = False

    out_lines.append(line)
    i += 1

with open("src/data/stranda-apartments.ts", "w") as f:
    f.writelines(out_lines)
print("Done!")
