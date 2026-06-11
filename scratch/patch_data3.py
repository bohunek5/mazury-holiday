filepath = 'src/data/stranda-apartments.ts'
with open(filepath, 'r') as f:
    lines = f.readlines()

new_lines = []
skip = False
brace_count = 0

for line in lines:
    if line.strip().startswith("'B305': {") or line.strip().startswith("'C205': {"):
        skip = True
        brace_count = 1
        continue
        
    if skip:
        if '{' in line:
            brace_count += line.count('{')
        if '}' in line:
            brace_count -= line.count('}')
            
        if brace_count == 0 and line.strip() in ['},', '}']:
            skip = False
        continue
        
    new_lines.append(line)

with open(filepath, 'w') as f:
    f.writelines(new_lines)
