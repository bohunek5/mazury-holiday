import re
import os

with open("src/data/stranda-apartments.ts", "r") as f:
    content = f.read()

# Find all getAssetPath("...")
paths = re.findall(r'getAssetPath\((["\'])(.*?)\1\)', content)
missing = []
for p in paths:
    # remove leading slash
    rel_path = "public" + p[1]
    if not os.path.exists(rel_path):
        missing.append(rel_path)

if missing:
    print("MISSING FILES FOUND:")
    for m in missing:
        print(m)
else:
    print("All image paths in stranda-apartments.ts are valid.")
