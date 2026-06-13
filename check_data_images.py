import os
import re
from pathlib import Path

base_dir = Path("/Users/karolbohdanowicz/my-ai-agents/mazury-holiday")
public_dir = base_dir / "public"

def check_file(filepath):
    content = Path(filepath).read_text(encoding='utf-8')
    # Find all strings that look like /images/... or images/... inside the data files
    path_pattern = re.compile(r'[\'"](/images/[^\'"]+)[\'"]')
    matches = path_pattern.findall(content)
    
    missing = []
    for match in matches:
        full_path = public_dir / match.lstrip('/')
        if not full_path.exists():
            missing.append(match)
    return missing

for f in ["src/data/stranda-apartments.ts", "src/data/skorupki-cabins.ts"]:
    filepath = base_dir / f
    if filepath.exists():
        missing = check_file(filepath)
        if missing:
            print(f"Missing in {f}:")
            for m in missing:
                print(f"  - {m}")
        else:
            print(f"All images in {f} exist.")
