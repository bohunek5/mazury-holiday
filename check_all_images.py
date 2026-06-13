import re
import os

def check_file(filepath):
    if not os.path.exists(filepath):
        return
    print(f"Checking {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all image paths like '/images/...' or 'images/...'
    images = re.findall(r'[\'"](/images/[^\'"]+)[\'"]', content)
    
    missing = []
    for img in images:
        # Strip leading slash for local check in public folder
        local_path = os.path.join('public', img.lstrip('/'))
        if not os.path.exists(local_path):
            missing.append(img)
            
    if missing:
        print(f"Missing images in {filepath}:")
        for m in set(missing):
            print(f"  - {m}")
    else:
        print(f"All images in {filepath} exist.")

for root, _, files in os.walk('src/data'):
    for f in files:
        if f.endswith('.ts') or f.endswith('.tsx'):
            check_file(os.path.join(root, f))
