import re

with open('src/data/stranda-apartments.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# First, let's extract all descriptions to build a map of ID -> clean title
desc_pattern = r"id:\s*'([^']+)',.*?description:\s*`([^`]+)`"
matches = re.finditer(desc_pattern, content, flags=re.DOTALL)

title_map = {}
for m in matches:
    id_val = m.group(1)
    desc_text = m.group(2)
    
    m_name = re.search(r'^(Apartament [A-Z0-9]+ (?:Suite|Delux|typu Studio|Studio))', desc_text.strip())
    if m_name:
        title_map[id_val] = m_name.group(1).replace('typu Studio', 'Studio')
    else:
        if id_val == 'C-studio':
            title_map[id_val] = 'Apartament C Studio'
        elif id_val == 'C-2-syp':
            title_map[id_val] = 'Apartament C z 2 sypialniami'
        elif id_val == 'C-1-syp':
            title_map[id_val] = 'Apartament C z 1 sypialnią'
        else:
            title_map[id_val] = f"Apartament {id_val}"

# Now replace the titles
def replacer(match):
    id_val = match.group(1)
    rest = match.group(2)
    new_title = title_map.get(id_val, f"Apartament {id_val}")
    
    # We need to replace the title inside `rest`
    new_rest = re.sub(r'title:\s*`[^`]+`,', f"title: `{new_title}`,", rest, count=1)
    return f"id: '{id_val}',{new_rest}"

pattern = r"id:\s*'([^']+)',(.*?)(?=\n\s*id: |\Z)"
new_content = re.sub(pattern, replacer, content, flags=re.DOTALL)

with open('src/data/stranda-apartments.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated titles!")
