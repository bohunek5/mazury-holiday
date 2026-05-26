import requests
import os
import zipfile
import time

WP_URL = "https://zeglarstwomazury.pl"
WP_USER = "k@rol"
WP_PASS = "h59#%5*DcWT2yyFJ"
DEPLOY_SECRET = "mazury-deploy-2026-v6"

OUT_DIR = "/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/out"
TARGET_DIR = os.path.join(OUT_DIR, "images/kisajno")
ZIP_PATH = "/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/deploy_kisajno_images.zip"

print(f"📦 Zipping {TARGET_DIR} to {ZIP_PATH}...")

with zipfile.ZipFile(ZIP_PATH, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk(TARGET_DIR):
        for file in files:
            file_path = os.path.join(root, file)
            arcname = os.path.relpath(file_path, OUT_DIR)
            zipf.write(file_path, arcname)

file_size = os.path.getsize(ZIP_PATH)
print(f"✅ Zip created: {file_size} bytes")

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
        print(f"  -> Uploading chunk {i+1}/{total_chunks}...")
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

print("🚀 Triggering deploy...")
resp = session.post(
    f"{WP_URL}/wp-admin/admin-post.php",
    data={"action": "ag_move_partial_14", "ag_secret": DEPLOY_SECRET},
    timeout=60
)
if resp.status_code == 200 and "ok" in resp.text:
    print("✅ Kisajno images deployed!")
else:
    print(f"❌ Failed! {resp.text[:200]}")
