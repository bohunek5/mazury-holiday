import re

with open("src/data/stranda-apartments.ts", "r") as f:
    content = f.read()

def replacer(block):
    has_sauna = "Sauna" in block or "sauna" in block.lower()
    has_jacuzzi = "Jacuzzi" in block or "jacuzzi" in block.lower()
    
    suffix = ""
    if has_sauna and has_jacuzzi:
        suffix = " z Sauną i Jacuzzi"
    elif has_sauna:
        suffix = " z Sauną"
    elif has_jacuzzi:
        suffix = " z Jacuzzi"
        
    if suffix:
        # Avoid double suffix
        block = re.sub(r" z Sauną i Jacuzzi", "", block)
        block = re.sub(r" z Jacuzzi i Sauną", "", block)
        block = re.sub(r" z Sauną", "", block)
        block = re.sub(r" z Jacuzzi", "", block)
        
        # Add suffix before the closing quote
        block = re.sub(r"(title:\s*`Apartament[^`]+)`", r"\1" + suffix + "`", block)
        block = re.sub(r"(title:\s*'Apartament[^']+)'", r"\1" + suffix + "'", block)
        block = re.sub(r'(title:\s*"Apartament[^"]+)"', r'\1' + suffix + '"', block)
    return block

# Find each apartment block
parts = re.split(r"\n    '(?=[A-C]\d{2,3})", "\n" + content)
new_parts = []
for p in parts:
    if p.strip() and p.startswith("':"):
        new_parts.append(replacer("\n    '" + p))
    elif p.strip() and re.match(r"^[A-C]\d{2,3}':", p):
        new_parts.append(replacer("\n    '" + p))
    else:
        new_parts.append(p)

with open("src/data/stranda-apartments.ts", "w") as f:
    f.write("".join(new_parts).lstrip("\n"))

print("Titles updated.")
