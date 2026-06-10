import requests
import os
import zipfile
import time

WP_URL = "https://zeglarstwomazury.pl"
WP_USER = "k@rol"
WP_PASS = "h59#%5*DcWT2yyFJ"
DEPLOY_SECRET = "mazury-deploy-2026-v6"

OUT_DIR = "/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/out"
ZIP_PATH = "/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/deploy_missing_apts.zip"

# Still missing: A305, A306, B102, B202, B304, B305, B404
MISSING = ["A305", "A306", "B102", "B202", "B304", "B305", "B404"]

print("📦 Zipping missing apartments...")
with zipfile.ZipFile(ZIP_PATH, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for apt in MISSING:
        apt_dir = os.path.join(OUT_DIR, "images/stranda", apt)
        if not os.path.exists(apt_dir):
            print(f"⚠️ {apt} not in out/ - using public/")
            apt_dir = f"/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/public/images/stranda/{apt}"
        count = 0
        for file in os.listdir(apt_dir):
            file_path = os.path.join(apt_dir, file)
            zipf.write(file_path, f"images/stranda/{apt}/{file}")
            count += 1
        print(f"  Added {apt}: {count} files")

file_size = os.path.getsize(ZIP_PATH)
print(f"✅ Zip: {file_size / 1024 / 1024:.1f} MB")

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
        print(f"  -> chunk {i+1}/{total_chunks} ({len(chunk_data)//1024}KB)...")
        retries = 3
        while retries > 0:
            try:
                resp = session.post(
                    f"{WP_URL}/wp-admin/admin-post.php",
                    data={"action": "ag_upload_chunk_14", "ag_secret": DEPLOY_SECRET, "chunk_index": i},
                    files={"chunk": ("chunk.dat", chunk_data, "application/octet-stream")},
                    timeout=60
                )
                if resp.status_code == 200 and resp.text.strip() == "ok":
                    break
                print(f"     ⚠️ {resp.status_code}: {resp.text[:50]}")
                retries -= 1
                time.sleep(3)
            except Exception as e:
                print(f"     ⚠️ {e}")
                retries -= 1
                time.sleep(3)
        if retries == 0:
            print("❌ Chunk failed after retries!")
            exit(1)

print("🚀 Triggering deploy...")
resp = session.post(
    f"{WP_URL}/wp-admin/admin-post.php",
    data={"action": "ag_move_partial_14", "ag_secret": DEPLOY_SECRET},
    timeout=120
)
if resp.status_code == 200 and "ok" in resp.text:
    print("✅ All missing apartments deployed!")
else:
    print(f"❌ {resp.text[:200]}")
