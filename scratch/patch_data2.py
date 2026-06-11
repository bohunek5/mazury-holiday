import re

filepath = 'src/data/stranda-apartments.ts'
with open(filepath, 'r') as f:
    content = f.read()

content = re.sub(r"\s*'B305': \{[\s\S]*?'B305\/new_5\.webp\"\)\n\s*\]\n\s*\}\n\s*\},", "", content)
content = re.sub(r"\s*'C205': \{[\s\S]*?'C205\/5S5A2526_0045101231\.webp\"\)\n\s*\]\n\s*\}\n\s*\},", "", content)

with open(filepath, 'w') as f:
    f.write(content)
