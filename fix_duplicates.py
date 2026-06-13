import re
import glob

for file_path in glob.glob('src/data/*.ts'):
    with open(file_path, 'r') as f:
        content = f.read()

    parts = content.split('images: [')
    if len(parts) == 1:
        continue

    new_content = parts[0]
    for i in range(1, len(parts)):
        part = parts[i]
        if ']' in part:
            array_content, rest = part.split(']', 1)
            
            lines = array_content.split(',')
            seen = set()
            new_lines = []
            for line in lines:
                line_stripped = line.strip()
                if not line_stripped:
                    new_lines.append(line)
                    continue
                    
                m = re.search(r'getAssetPath\("([^"]+)"\)', line_stripped)
                if m:
                    path = m.group(1)
                    if path in seen:
                        print(f"Removed duplicate in {file_path}: {path}")
                        continue
                    seen.add(path)
                new_lines.append(line)
                
            new_content += 'images: [' + ','.join(new_lines) + ']' + rest
        else:
            new_content += 'images: [' + part

    with open(file_path, 'w') as f:
        f.write(new_content)
print("Done fixing duplicates.")
