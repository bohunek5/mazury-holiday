import re

mapping = {
    'A103': '1', 'A104': '2', 'A105': '10', 'A204': '12', 'A205': '13',
    'A302': '42', 'A305': '14', 'A306': '15', 'A402': '16', 'A403': '17',
    'B102': '18', 'B103': '19', 'B106': '22', 'B201': '39', 'B202': '38',
    'B401': '23', 'B402': '24', 'B404': '25',
    'C301': '40', 'C304': '30', 'C402': '46', 'C403': '29', 'C404': '41',
    'c-studio': '32', 'c-z-dwoma-sypialniami': '43', 'c-z-jedna-sypialnia': '44'
}

with open("src/data/stranda-apartments.ts", "r") as f:
    lines = f.readlines()

out_lines = []
current_apt = None

for line in lines:
    m = re.match(r"^\s*'([A-Za-z0-9-]+)':\s*\{", line)
    if m:
        current_apt = m.group(1)
        
    if current_apt in mapping:
        new_id = mapping[current_apt]
        if "idoBookingId:" in line:
            line = re.sub(r"idoBookingId:\s*'[^']+'", f"idoBookingId: '{new_id}'", line)
        if "icalUrl:" in line:
            line = re.sub(r"itemid/\d+/", f"itemid/{new_id}/", line)
            
    out_lines.append(line)

with open("src/data/stranda-apartments.ts", "w") as f:
    f.writelines(out_lines)

print("Mapped IDs successfully")
