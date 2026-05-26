import re

filepath = "/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/data/kisajno-data.ts"
with open(filepath, 'r') as f:
    content = f.read()

new_images = [
    'getAssetPath("/images/kisajno/5fa85862-bc95-41b7-90bf-a8041d18c07f.webp")',
    'getAssetPath("/images/kisajno/a0c37bde-dd6b-406e-bdae-badc6b5b5bf3.webp")',
    'getAssetPath("/images/kisajno/kis.webp")',
    'getAssetPath("/images/kisajno/kis1.webp")',
    'getAssetPath("/images/kisajno/kis2.webp")'
]

# Find the images array in the gallery
pattern = r"(gallery:\s*\{.*?images:\s*\[)(.*?)(]\s*\})"

def repl(m):
    prefix = m.group(1)
    existing = m.group(2)
    suffix = m.group(3)
    
    # insert new images at the beginning
    added_str = ",\n            ".join(new_images)
    
    if existing.strip():
        new_arr = added_str + ",\n" + existing
    else:
        new_arr = added_str
        
    return prefix + "\n            " + new_arr + "\n        " + suffix

content = re.sub(pattern, repl, content, flags=re.DOTALL)

with open(filepath, 'w') as f:
    f.write(content)
