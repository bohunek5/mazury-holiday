import re
import os

with open('src/data/stranda-apartments.ts', 'r') as f:
    content = f.read()

keys = re.findall(r"'([A-Za-z0-9_-]+)':\s*\{", content)
print("Found keys:", len(keys))

public_dir = 'public/images/stranda'

for key in keys:
    # Find block for key
    pattern = rf"('{key}':\s*\{{.*?)(gallery:\s*\{{.*?images:\s*\[.*?\]\s*\}})"
    match = re.search(pattern, content, flags=re.DOTALL)
    if not match:
        print("No gallery found for", key)
        continue
    
    # Try finding directory
    dirs_to_try = [key, key + '_images', key.lower(), key.replace('_', '-'), key.replace('-', '_'), 'C_Generic', 'Pokoje']
    if key == 'c-studio': dirs_to_try.insert(0, 'C_Studio')
    
    target_dir = None
    for d in dirs_to_try:
        p = os.path.join(public_dir, d)
        if os.path.isdir(p):
            target_dir = p
            break
            
    if not target_dir:
        print("No dir for", key)
        continue
        
    webp_files = []
    for root, _, files in os.walk(target_dir):
        for file in files:
            if file.endswith('.webp'):
                full_path = os.path.join(root, file)
                rel_path = '/' + os.path.relpath(full_path, 'public')
                webp_files.append(rel_path)
                
    if not webp_files:
        print("No webp files for", key)
        continue
        
    def sort_key(f):
        f = f.lower()
        if 'hero' in f: return (0, f)
        if '_1.' in f: return (1, f)
        return (2, f)
        
    webp_files.sort(key=sort_key)
    
    hero = webp_files[0]
    images_str = ',\n'.join([f'                getAssetPath("{f}")' for f in webp_files])
    
    replacement = f'''gallery: {{
            "heroImage": getAssetPath("{hero}"),
            "images": [
{images_str}
            ]
        }}'''
        
    content = content.replace(match.group(2), replacement, 1)
    print(f"Updated {key} with {len(webp_files)} images.")

with open('src/data/stranda-apartments.ts', 'w') as f:
    f.write(content)

