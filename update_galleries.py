import re
import os

with open('src/data/stranda-apartments.ts', 'r') as f:
    content = f.read()

keys = re.findall(r"'([A-Za-z0-9_-]+)':\s*\{", content)

public_dir = 'public/images/stranda'

for key in keys:
    key_idx = content.find(f"'{key}': {{")
    if key_idx == -1: continue
    
    next_key_match = re.search(r"\n\s*'([A-Za-z0-9_-]+)':\s*\{", content[key_idx + 10:])
    next_key_idx = len(content) if not next_key_match else key_idx + 10 + next_key_match.start()
    
    block = content[key_idx:next_key_idx]
    
    gallery_match = re.search(r"(gallery:\s*\{.*?\"?images\"?:\s*\[.*?\]\s*\})", block, re.DOTALL)
    if not gallery_match:
        print("No gallery found for", key)
        continue
    
    dirs_to_try = [key, key + '_images', key.lower(), key.replace('_', '-'), key.replace('-', '_'), 'C_Generic', 'Pokoje']
    if key == 'c-studio' or key == 'C_Studio': dirs_to_try.insert(0, 'C_Studio')
    if key == 'Studio': dirs_to_try.insert(0, 'C_Studio')
    
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
        
        import re as regex
        num = regex.search(r'_(\d+)\.webp$', f)
        if num: return (2, int(num.group(1)), f)
        
        if '_1.' in f: return (1, 0, f)
        return (3, 0, f)
        
    webp_files.sort(key=sort_key)
    
    hero = webp_files[0]
    images_str = ',\n'.join([f'                getAssetPath("{f}")' for f in webp_files])
    
    replacement = f'''gallery: {{
            "heroImage": getAssetPath("{hero}"),
            "images": [
{images_str}
            ]
        }}'''
        
    new_block = block.replace(gallery_match.group(1), replacement, 1)
    content = content[:key_idx] + new_block + content[next_key_idx:]
    print(f"Updated {key} with {len(webp_files)} images.")

with open('src/data/stranda-apartments.ts', 'w') as f:
    f.write(content)

