import asyncio
from playwright.async_api import async_playwright
import re

def extract_apartments():
    import os
    files = [
        'src/data/stranda-apartments.ts',
        'src/data/kisajno-data.ts',
        'src/data/fuleda-data.ts',
        'src/data/mikolajki-data.ts',
        'src/data/pokoje-fuleda-data.ts'
    ]
    
    results = []
    for f in files:
        if not os.path.exists(f): continue
        with open(f, 'r') as file:
            content = file.read()
            chunks = re.split(r"id:\s*['\"]", content)
            for chunk in chunks[1:]:
                id_match = re.search(r"^([^'\"]+)['\"]", chunk)
                title_match = re.search(r"title:\s*[`'\"]([^`'\"]+)[`'\"]", chunk)
                ido_match = re.search(r"idoBookingId:\s*['\"]([^'\"]+)['\"]", chunk)
                
                if id_match and title_match:
                    ido = ido_match.group(1) if ido_match else None
                    if ido:
                        results.append({
                            'id': id_match.group(1),
                            'title': title_match.group(1).strip(),
                            'ido': ido
                        })
    return results

async def main():
    apts = extract_apartments()
    unique_idos = list(set([apt['ido'] for apt in apts]))
    
    print(f"Checking {len(unique_idos)} unique IdoBooking IDs...")
    
    results_map = {}
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context()
        page = await context.new_page()
        
        for ido in unique_idos:
            url = f"https://engine37851.idobooking.com/index.php?ob[{ido}]=&showOtherOffers=true&currency=0&language=0&from_own_button=1"
            try:
                await page.goto(url, wait_until="networkidle", timeout=15000)
                await page.wait_for_timeout(2000) # Give it time to render React
                
                # Try to get the offer name
                # Usually in .room-item-name, or h1, or .offer-name
                name_element = await page.query_selector('.room-item-name, .offer-name, h1')
                if name_element:
                    name = await name_element.inner_text()
                    results_map[ido] = name.strip()
                else:
                    results_map[ido] = "NOT FOUND OR REDIRECTED"
            except Exception as e:
                results_map[ido] = f"ERROR"
                
            print(f"ID {ido} -> {results_map[ido]}")
            
        await browser.close()
        
    print("\n--- FINAL REPORT ---")
    print(f"{'App ID':<25} | {'idoID':<5} | {'IdoBooking Real Name'}")
    print("-" * 100)
    for apt in apts:
        ido_name = results_map.get(apt['ido'], 'UNKNOWN')
        # Clean up
        ido_name = ido_name.replace('\n', ' ')
        print(f"{apt['id']:<25} | {apt['ido']:<5} | {ido_name}")

if __name__ == "__main__":
    asyncio.run(main())
