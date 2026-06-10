import re

with open('src/data/stranda-apartments.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Define hardcoded clean names
title_map = {
  "A204": "Apartament A204 Suite 2+2",
  "B404": "Apartament B404 Suite 2+2",
  "C304": "Apartament C304 Studio 2+2",
  "B201": "Apartament B201 Suite 2+2",
  "B401": "Apartament B401 Suite 4+2",
  "C301": "Apartament C301 Suite 2+2",
  "B202": "Apartament B202 Suite 2+2",
  "B402": "Apartament B402 Suite 2+2",
  "A302": "Apartament A302 Suite 2+2",
  "C404": "Apartament C404 Studio",
  "B106": "Apartament B106 Suite 4+2",
  "C403": "Apartament C403 Studio",
  "c-studio": "Apartament C Studio 2+2",
  "c-z-dwoma-sypialniami": "Apartament C z 2 sypialniami 4+2",
  "c-z-jedna-sypialnia": "Apartament C z 1 sypialnią 2+2",
  "C402": "Apartament C402 Studio",
  "B304": "Apartament B304 Suite 2+2",
  "B305": "Apartament B305 Suite 2+2",
  "C205": "Apartament C205 Studio",
  "A402": "Apartament A402 Delux 2+1",
  "A403": "Apartament A403 Delux 2+2",
  "A306": "Apartament A306 Suite 4+2",
  "A305": "Apartament A305 Suite 2+2",
  "A205": "Apartament A205 Suite 2+2",
  "A103": "Apartament A103 Suite 2+2",
  "A104": "Apartament A104 Delux 2+2",
  "A105": "Apartament A105 Delux 2+2",
  "B102": "Apartament B102 Delux 2+2",
  "B103": "Apartament B103 Delux 2+2"
}

def replace_block(match):
    prefix = match.group(1) # Before title
    title_line = match.group(2) # The title line
    suffix = match.group(3) # After title
    
    # Extract ID from prefix
    m_id = re.search(r"id:\s*'([^']+)'", prefix)
    if not m_id:
        return match.group(0)
    
    id_val = m_id.group(1)
    new_title = title_map.get(id_val, f"Apartament {id_val}")
    
    new_title_line = f"title: `{new_title}`,"
    return f"{prefix}{new_title_line}{suffix}"

# Match blocks from "id:" to the end of the line containing "title:"
pattern = r"(id:\s*'[^']+'.*?)(title:\s*`[^`]+`,)(.*?description:\s*`)"
new_content = re.sub(pattern, replace_block, content, flags=re.DOTALL)

with open('src/data/stranda-apartments.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Safely replaced titles.")
