import asyncio
import aiohttp
import re
import os

def extract_apartments():
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
                    ido = ido_match.group(1) if ido_match else '1 (DEFAULT)'
                    results.append({
                        'id': id_match.group(1),
                        'title': title_match.group(1).strip(),
                        'ido': ido
                    })
    return results

async def fetch_name(session, ido):
    if 'DEFAULT' in ido:
        return "DEFAULT (Redirects to ID: 1)"
        
    url = f"https://engine37851.idobooking.com/index.php?ob[{ido}]=&showOtherOffers=true&currency=0&language=0&from_own_button=1"
    try:
        async with session.get(url, timeout=10) as response:
            html = await response.text()
            
            # 1. Try to find the offer name in og:title
            match = re.search(r'<meta property="og:title" content="(.*?)"', html)
            if match:
                return match.group(1).replace(' - Rezerwacja i wolne terminy - Mazury Holiday', '').strip()
                
            # 2. Try to find the offer name in JSON state or other tags
            match = re.search(r'<h1[^>]*>(.*?)</h1>', html, re.IGNORECASE | re.DOTALL)
            if match:
                return re.sub(r'<[^>]+>', '', match.group(1)).strip()
                
            match = re.search(r'<title>(.*?)</title>', html, re.IGNORECASE | re.DOTALL)
            if match:
                return match.group(1).replace(' - Rezerwacja i wolne terminy - Mazury Holiday', '').strip()
                
            return "HTML fetched but no title found"
    except Exception as e:
        return f"Error: {e}"

async def main():
    apts = extract_apartments()
    unique_idos = list(set([apt['ido'] for apt in apts]))
    
    print("Checking IdoBooking links...\n")
    
    results_map = {}
    async with aiohttp.ClientSession() as session:
        tasks = [fetch_name(session, ido) for ido in unique_idos]
        names = await asyncio.gather(*tasks)
        for i, ido in enumerate(unique_idos):
            results_map[ido] = names[i]
            
    print(f"{'App ID':<25} | {'idoID':<15} | {'Nasza Nazwa':<45} | {'IdoBooking Title'}")
    print("-" * 140)
    
    for apt in apts:
        ido_name = results_map.get(apt['ido'], 'UNKNOWN')
        # Format the output clearly
        ido_name = ido_name.replace('\n', ' ').strip()
        print(f"{apt['id']:<25} | {apt['ido']:<15} | {apt['title'][:40]:<45} | {ido_name}")

if __name__ == "__main__":
    asyncio.run(main())
