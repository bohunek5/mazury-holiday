import urllib.request
import re

url = "https://mazury.holiday/apartamenty-gizycko-stranda"
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    
    # The titles are usually inside <h4 class="milenia-entity-title"><a href="...">...</a></h4>
    pattern = r'<h4 class="milenia-entity-title"><a[^>]*>(.*?)</a></h4>'
    matches = re.findall(pattern, html)
    print("Found titles:")
    for m in matches:
        print(m.strip())
except Exception as e:
    print(e)
