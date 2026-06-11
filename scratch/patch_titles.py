import json
import re
import os

with open('scratch/ido_parsed.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Helper to generate short title based on full title or description
def get_short_title(title, desc):
    t_lower = title.lower()
    if 'z dwoma sypialniami' in t_lower or 'z 2 sypialniami' in t_lower:
        base = "Apartament z 2 sypialniami"
    elif 'z jedną sypialnią' in t_lower or 'z 1 sypialnią' in t_lower:
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

patches = {}
for code, apt in data.items():
    title = apt.get('title', '')
    desc = apt.get('cleanDesc', '')
    
    # Clean the title from "Giżycko Stranda - "
    title = title.replace('Giżycko Stranda - ', '')
    
    short_title = get_short_title(title, desc)
    patches[code] = {
        'title': title,
        'shortTitle': short_title,
        'description': desc
    }

# Read stranda-apartments.ts
path = 'src/data/stranda-apartments.ts'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

for code, p in patches.items():
    # Find the apartment block
    pattern = r"('" + code + r"'|\"" + code + r"\":?\s*:\s*\{[^}]*?title:\s*)(['\"`])(.*?)(\2)(.*?\})"
    
    # Let's just do a string replace by finding the section.
    # A better way is to parse line by line
    pass

import sys
print(json.dumps(patches, indent=2, ensure_ascii=False))
