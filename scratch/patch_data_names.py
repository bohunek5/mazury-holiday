import json
import re

with open('scratch/ido_parsed.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

def get_short_title(title, desc):
    t_lower = title.lower()
    if 'z dwoma sypialniami' in t_lower or 'z 2 sypialniami' in t_lower:
        base = "Apartament z 2 sypialniami"
    elif 'z jedną sypialnią' in t_lower or 'z 1 sypialnią' in t_lower or 'z jedną sypianią' in t_lower:
        base = "Apartament z 1 sypialnią"
    elif 'studio' in t_lower:
        base = "Studio"
    else:
        base = "Apartament"
        
    if 'jacuzzi' in t_lower:
        base += " z jacuzzi"
    elif 'sauną' in t_lower:
        base += " z sauną"
        
    return base

with open('src/data/stranda-apartments.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
i = 0
current_apt = None
while i < len(lines):
    line = lines[i]
    
    # Check if we are at the start of an apartment definition
    match = re.match(r"^    '([A-C]\d{3})': \{", line)
    if not match:
        # Also check for c-studio, c-1-sypialnia etc if they exist
        match = re.match(r"^    '([a-zA-Z0-9-]+)': \{", line)
        
    if match:
        code = match.group(1)
        # B305 and C205 were removed/disabled earlier so they might not be here
        ido = data.get(code.upper(), None)
        current_apt = code
        new_lines.append(line)
        i += 1
        continue
        
    if current_apt and ("title:" in line or "description:" in line or "shortTitle:" in line):
        # We will skip existing title/desc/shortTitle and inject them right after `id:`
        i += 1
        continue
        
    if current_apt and "id:" in line:
        new_lines.append(line)
        
        ido = data.get(current_apt.upper(), None)
        if ido:
            title = ido.get('title', '').replace('Giżycko  Stranda - ', '').replace('Giżycko Stranda - ', '')
            desc = ido.get('cleanDesc', '')
            short_title = get_short_title(title, desc)
            
            # Escape quotes
            title = title.replace('"', '\\"').replace('\n', '\\n')
            short_title = short_title.replace('"', '\\"').replace('\n', '\\n')
            desc = desc.replace('"', '\\"').replace('\n', '\\n')
            
            new_lines.append(f'        title: "{title}",\n')
            new_lines.append(f'        shortTitle: "{short_title}",\n')
            new_lines.append(f'        description: "{desc}",\n')
        else:
            # Fallback for manually added ones like C-Studio
            if 'C_Studio' in current_apt or 'c-studio' in current_apt.lower():
                new_lines.append('        title: "Studio w budynku C",\n')
                new_lines.append('        shortTitle: "Studio",\n')
                new_lines.append('        description: "Studio w budynku C, to doskonałe miejsce na wypoczynek z widokiem na Zatokę Tracz.",\n')
            elif '1-sypialnia' in current_apt.lower():
                new_lines.append('        title: "Apartament w budynku C z 1 sypialnią",\n')
                new_lines.append('        shortTitle: "Apartament z 1 sypialnią",\n')
                new_lines.append('        description: "Apartament w budynku C z 1 sypialnią, oferujący komfortowy wypoczynek.",\n')
            elif '2-sypialnie' in current_apt.lower():
                new_lines.append('        title: "Apartament w budynku C z 2 sypialniami",\n')
                new_lines.append('        shortTitle: "Apartament z 2 sypialniami",\n')
                new_lines.append('        description: "Przestronny apartament w budynku C z 2 sypialniami.",\n')
            else:
                new_lines.append(f'        title: "Apartament {current_apt}",\n')
                new_lines.append(f'        shortTitle: "Apartament",\n')
                new_lines.append(f'        description: "Opis dla {current_apt}",\n')
        i += 1
        continue
        
    new_lines.append(line)
    i += 1

with open('src/data/stranda-apartments.ts', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Patched stranda-apartments.ts")
