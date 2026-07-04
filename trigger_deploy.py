import requests

HTTP_URL = "https://mazuryholiday.pl/unzip.php"
print(f"🚀 Triggering extraction at {HTTP_URL}...")
try:
    r = requests.get(HTTP_URL, timeout=300)
    print(f"Response ({r.status_code}): {r.text}")
except Exception as e:
    print(f"❌ Error triggering unzip: {e}")
