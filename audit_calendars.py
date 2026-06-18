import urllib.request
import re

urls = [
    ("Kisajno", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/45/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"),
    ("Pokoje Fuleda", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/28/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"),
    ("Fuleda Parter", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/26/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"),
    ("Fuleda Piętro", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/27/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"),
    ("Mikołajki", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/48/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"),
    ("Stranda A103", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/12/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"),
    ("Stranda A104", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/10/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"),
    ("Stranda A105", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/1/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"),
    ("Stranda A202", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/13/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"),
    ("Stranda A203", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/2/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"),
    ("Stranda A204", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/15/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"),
    ("Stranda A205", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/14/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"),
    ("Stranda A303", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/18/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"),
    ("Stranda A304", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/17/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"),
    ("Stranda A305", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/25/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"),
    ("Stranda B101", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/30/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"),
    ("Stranda B102", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/39/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"),
    ("Stranda B201", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/23/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"),
    ("Stranda B202", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/40/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"),
    ("Stranda B301", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/38/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"),
    ("Stranda B302", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/24/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"),
    ("Stranda A206", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/42/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"),
    ("Stranda A306", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/41/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"),
    ("Stranda B103", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/19/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"),
    ("Stranda B203", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/22/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"),
    ("Stranda A102", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/46/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"),
    ("Stranda B204 (1)", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/44/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"),
    ("Stranda B204 (2)", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/44/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"),
    ("Stranda B104", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/32/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"),
    ("Stranda B304", "https://client37851.idobooking.com/panel/offer/icalexport/itemid/43/key/da39a3ee5e6b4b0d3255bfef95601890afd80709")
]

print(f"{'Nasza Nazwa':<20} | {'ID':<4} | {'Rezerwacje':<10} | {'Nazwa z IdoBooking'}")
print("-" * 80)

for name, url in urls:
    item_id = re.search(r'itemid/(\d+)', url).group(1)
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            content = response.read().decode('utf-8')
            
        calname_match = re.search(r'X-WR-CALNAME:([^\r\n]+)', content)
        calname = calname_match.group(1).strip() if calname_match else "Brak nazwy"
        
        events = content.count('BEGIN:VEVENT')
        print(f"{name:<20} | {item_id:<4} | {events:<10} | {calname}")
    except Exception as e:
        print(f"{name:<20} | {item_id:<4} | {'BŁĄD':<10} | {str(e)}")

