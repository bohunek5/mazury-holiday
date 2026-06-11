import re
import urllib.request
from html.parser import HTMLParser

class TitleParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_title = False
        self.title = ""

    def handle_starttag(self, tag, attrs):
        if tag.lower() == 'title':
            self.in_title = True

    def handle_endtag(self, tag):
        if tag.lower() == 'title':
            self.in_title = False

    def handle_data(self, data):
        if self.in_title:
            self.title += data

def get_ido_title(ido_id):
    url = f"https://engine37851.idobooking.com/index.php?ob[{ido_id}]=&showOtherOffers=true&currency=0&language=0&from_own_button=1"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            html = response.read().decode('utf-8')
            
            # Use regex to find <title> to avoid parsing whole page
            match = re.search(r'<title>(.*?)</title>', html, re.IGNORECASE | re.DOTALL)
            if match:
                title = match.group(1).strip()
                # Often it's like "Booking engine - Apartment B402"
                return title
            return "No Title Tag"
    except Exception as e:
        return f"Error: {e}"

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
                    results.append({
                        'id': id_match.group(1),
                        'title': title_match.group(1).strip(),
                        'ido': ido_match.group(1) if ido_match else '1 (DEFAULT)'
                    })
    return results

def main():
    apts = extract_apartments()
    print(f"{'App ID':<25} | {'idoID':<15} | {'App Title':<50} | {'IdoBooking Title'}")
    print("-" * 150)
    for apt in apts:
        ido_id = apt['ido'].replace(' (DEFAULT)', '')
        ido_title = get_ido_title(ido_id)
        # Clean up title
        ido_title = ido_title.replace('\n', ' ').replace('\r', '').replace(' Rezerwacja i wolne terminy - Mazury Holiday', '')
        print(f"{apt['id']:<25} | {apt['ido']:<15} | {apt['title']:<50} | {ido_title}")

if __name__ == '__main__':
    main()
