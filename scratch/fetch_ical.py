import urllib.request

url = "https://client37851.idosell.com/panel/offer/icalexport/itemid/6/key/44e3cb4ef5b46e6b0bc6603a1168f080820f1c32"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    content = urllib.request.urlopen(req).read().decode('utf-8')
    print(content[:500])
except Exception as e:
    print(e)
