import re
import json

with open('src/data/stranda-apartments.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract all IDs, types, capacities from the TS file
pattern = r"id:\s*'([^']+)',.*?title:\s*`([^`]+)`,.*?description:\s*`([^`]+)`"
matches = re.finditer(pattern, content, flags=re.DOTALL)

titles = {}

for m in matches:
    id_val = m.group(1)
    title_old = m.group(2)
    desc = m.group(3)

    # 1. Look for explicit names in description
    m_name = re.search(r'^(Apartament [A-Z0-9]+ (?:Suite|Delux|typu Studio|Studio))', desc.strip())
    
    # 2. Look for capacity info
    cap = ""
    if "(maksymalna ilość osób 4)" in desc or "2+2" in desc:
        cap = "2+2"
    elif "(maksymalna ilość osób 6)" in desc or "4+2" in desc:
        cap = "4+2"
    elif "(maksymalna ilość osób 3)" in desc or "2+1" in desc:
        cap = "2+1"
    
    if m_name:
        base_name = m_name.group(1).replace('typu Studio', 'Studio')
        
        # Exceptions from the docx
        if id_val == 'A402':
            new_title = 'Apartament A402 Delux 2+1'
        elif id_val == 'A403':
            new_title = 'Apartament A403 Delux 2+2'
        elif id_val == 'A306':
            new_title = 'Apartament A306 Suite 4+2'
        elif id_val == 'A305':
            new_title = 'Apartament A305 Suite 2+2'
        elif id_val == 'A205':
            new_title = 'Apartament A205 Suite 2+2'
        elif id_val == 'A103':
            new_title = 'Apartament A103 Suite 2+2'
        else:
            if cap:
                new_title = f"{base_name} {cap}"
            else:
                new_title = base_name
    else:
        # Fallback for generics
        if id_val == 'c-studio':
            new_title = 'Apartament C Studio 2+2'
        elif id_val == 'c-z-dwoma-sypialniami':
            new_title = 'Apartament C z 2 sypialniami 4+2'
        elif id_val == 'c-z-jedna-sypialnia':
            new_title = 'Apartament C z 1 sypialnią 2+2'
        else:
            new_title = f"Apartament {id_val}"

    titles[id_val] = new_title

print(json.dumps(titles, indent=2, ensure_ascii=False))
