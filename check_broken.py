import os
import re

with open('src/data/stranda-apartments.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract all images from the gallery
images = re.findall(r"'(/(?:images|img)/stranda/[A-Z0-9c-]+/[^']+)'", content)
# Also cover heroImage
hero_images = re.findall(r"heroImage:\s*'(/(?:images|img)/stranda/[A-Z0-9c-]+/[^']+)'", content)

all_images = set(images + hero_images)
missing = []

for img in all_images:
    # img looks like /images/stranda/A104/hero_1.webp
    local_path = 'public' + img
    if not os.path.exists(local_path):
        missing.append(img)

print(f"Total images referenced: {len(all_images)}")
print(f"Missing images: {len(missing)}")
for m in missing:
    print("MISSING:", m)
