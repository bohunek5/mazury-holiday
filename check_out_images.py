import os
import re
import urllib.parse
from pathlib import Path

out_dir = Path("/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/out")
missing = []

# Regex to catch typical image src attributes in HTML
img_pattern = re.compile(r'src=["\'](/_next/image\?url=([^"\'&]+).*?)["\']')
img_direct_pattern = re.compile(r'src=["\'](/images/[^"\'?]+)["\']')
bg_pattern = re.compile(r'url\([\'"]?(/images/[^\'"\)]+)[\'"]?\)')

for root, _, files in os.walk(out_dir):
    for file in files:
        if file.endswith('.html'):
            html_path = Path(root) / file
            content = html_path.read_text(encoding='utf-8')
            
            # Find next/image decoded URLs
            for match in img_pattern.findall(content):
                url = match[1]
                if url.startswith('/'):
                    decoded = urllib.parse.unquote(url)
                    if decoded.startswith('/_next/'):
                        pass
                    elif not (out_dir / decoded.lstrip('/')).exists():
                        missing.append((decoded, file))
            
            for match in img_direct_pattern.findall(content):
                decoded = urllib.parse.unquote(match)
                if not (out_dir / decoded.lstrip('/')).exists():
                    missing.append((decoded, file))

            for match in bg_pattern.findall(content):
                decoded = urllib.parse.unquote(match)
                if not (out_dir / decoded.lstrip('/')).exists():
                    missing.append((decoded, file))

if missing:
    print("Found missing images in exported HTML:")
    for m, f in set(missing):
        print(f"Missing: {m} in {f}")
else:
    print("All images present in HTML output.")
