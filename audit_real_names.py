import os
import re
import urllib.request

files = [
    "src/data/kisajno-data.ts",
    "src/data/pokoje-fuleda-data.ts",
    "src/data/fuleda-data.ts",
    "src/data/mikolajki-data.ts",
    "src/data/stranda-apartments.ts"
]

results = []

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We will split by 'id: "' or 'id: \'' to find blocks
    blocks = re.split(r'id:\s*[\'"]([^\'"]+)[\'"]', content)
    # block[0] is before the first id
    # block[1] is the first ID
    # block[2] is the content after the first ID
    for i in range(1, len(blocks), 2):
        apt_id = blocks[i]
        block_content = blocks[i+1]
        
        # Try to find name:
        name_match = re.search(r'name:\s*[\'"]([^\'"]+)[\'"]', block_content)
        name = name_match.group(1) if name_match else apt_id
        
        # Find icalUrl:
        ical_match = re.search(r'icalUrl:\s*[\'"]([^\'"]+)[\'"]', block_content)
        if ical_match:
            ical_url = ical_match.group(1)
            ido_id_match = re.search(r'itemid/(\d+)', ical_url)
            ido_id = ido_id_match.group(1) if ido_id_match else "?"
            
            # Change to idobooking to avoid redirects
            fetch_url = ical_url.replace('.idosell.com', '.idobooking.com')
            
            try:
                req = urllib.request.Request(fetch_url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req) as response:
                    cal_data = response.read().decode('utf-8')
                
                events = cal_data.count('BEGIN:VEVENT')
                results.append((name, ido_id, events, "OK" if events > 0 else "PUSTY"))
            except Exception as e:
                results.append((name, ido_id, "BŁĄD", str(e)))

print(f"{'Nazwa Apartamentu w Kodzie':<30} | {'ID IdoBooking':<15} | {'Rezerwacje':<15} | {'Status'}")
print("-" * 80)
for r in results:
    print(f"{r[0]:<30} | {r[1]:<15} | {str(r[2]):<15} | {r[3]}")

