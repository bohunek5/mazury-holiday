import os
import requests
import zipfile
import time
from concurrent.futures import ThreadPoolExecutor

WP_URL = "https://zeglarstwomazury.pl"
WP_USER = "k@rol"
WP_PASS = "h59#%5*DcWT2yyFJ"
DEPLOY_SECRET = "mazury-deploy-2026-v6"

PUBLIC_DIR = "/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/public"
ZIP_PATH = "/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/missing_images.zip"

def check_url(file_path):
    rel_path = os.path.relpath(file_path, PUBLIC_DIR)
    url = f"{WP_URL}/{rel_path}"
    try:
        # Use a timeout and check status code
        resp = requests.head(url, timeout=5, allow_redirects=True)
        if resp.status_code == 404:
            return file_path
    except:
        return file_path
    return None

def find_missing_images():
    print("🔍 Scanning local images...")
    all_images = []
    for root, dirs, files in os.walk(os.path.join(PUBLIC_DIR, "images")):
        for f in files:
            if not f.startswith('.'):
                all_images.append(os.path.join(root, f))
    
    print(f"Found {len(all_images)} local images. Checking remote status...")
    
    missing = []
    with ThreadPoolExecutor(max_workers=20) as executor:
        results = executor.map(check_url, all_images)
        for res in results:
            if res:
                missing.append(res)
                
    return missing

missing_images = find_missing_images()
if not missing_images:
    print("✅ Wszystkie zdjęcia są już na serwerze!")
    exit(0)

print(f"❌ Znaleziono {len(missing_images)} brakujących zdjęć na serwerze.")
for m in missing_images:
    print(f" - {os.path.relpath(m, PUBLIC_DIR)}")

print(f"📦 Zipping {len(missing_images)} missing images...")

with zipfile.ZipFile(ZIP_PATH, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for img in missing_images:
        arcname = os.path.relpath(img, PUBLIC_DIR)
        zipf.write(img, arcname)

file_size = os.path.getsize(ZIP_PATH)
print(f"✅ Zip: {file_size} bytes")

session = requests.Session()
session.cookies.set("wordpress_test_cookie", "WP Cookie check")
session.post(f"{WP_URL}/wp-login.php", data={
    "log": WP_USER, "pwd": WP_PASS,
    "wp-submit": "Log In", "redirect_to": f"{WP_URL}/wp-admin/", "testcookie": "1"
}, timeout=15, allow_redirects=True)

chunk_size = 1024 * 1024
total_chunks = (file_size + chunk_size - 1) // chunk_size
print(f"📤 Uploading {total_chunks} chunks...")

with open(ZIP_PATH, 'rb') as f:
    for i in range(total_chunks):
        chunk_data = f.read(chunk_size)
        print(f"  -> chunk {i+1}/{total_chunks}...")
        retries = 3
        while retries > 0:
            try:
                resp = session.post(
                    f"{WP_URL}/wp-admin/admin-post.php",
                    data={"action": "ag_upload_chunk_14", "ag_secret": DEPLOY_SECRET, "chunk_index": i},
                    files={"chunk": ("chunk.dat", chunk_data, "application/octet-stream")},
                    timeout=30
                )
                if resp.status_code == 200 and resp.text.strip() == "ok":
                    break
                retries -= 1
                time.sleep(2)
            except Exception as e:
                retries -= 1
                time.sleep(2)

resp = session.post(
    f"{WP_URL}/wp-admin/admin-post.php",
    data={"action": "ag_move_partial_14", "ag_secret": DEPLOY_SECRET},
    timeout=60
)
if resp.status_code == 200 and "ok" in resp.text:
    print("✅ Missing images deployed successfully!")
else:
    print(f"❌ Deploy failed: {resp.text[:200]}")
