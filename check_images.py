import os
import re
from pathlib import Path

# Paths
base_dir = Path("/Users/karolbohdanowicz/my-ai-agents/mazury-holiday")
public_dir = base_dir / "public"
src_dir = base_dir / "src"

missing_images = []

# Regex to match image paths like /images/... or images/...
# Looking for typical strings that look like paths to images
path_pattern = re.compile(r'[\'"](/images/[^\'"]+\.(?:jpg|jpeg|png|webp|svg|gif))[\'"]')

# Walk through all source files
for root, _, files in os.walk(src_dir):
    for file in files:
        if file.endswith(('.ts', '.tsx', '.js', '.jsx')):
            file_path = Path(root) / file
            try:
                content = file_path.read_text(encoding='utf-8')
                matches = path_pattern.findall(content)
                for match in matches:
                    # Check if file exists in public directory
                    full_image_path = public_dir / match.lstrip('/')
                    if not full_image_path.exists():
                        missing_images.append((match, file_path.relative_to(base_dir)))
            except Exception as e:
                pass

if missing_images:
    print("Found missing images:")
    for img, source in missing_images:
        print(f"Missing: {img} (Referenced in {source})")
else:
    print("All referenced images in code exist in the public directory.")

