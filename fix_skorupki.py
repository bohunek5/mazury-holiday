from pathlib import Path

f = Path('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/data/skorupki-data.ts')
content = f.read_text(encoding='utf-8')

# We want to replace the gallery completely
import re

new_gallery = """        gallery: {
        heroImage: getAssetPath("/images/skorupki/skorupki_1.webp"),
        images: [
"""
for i in range(1, 59):
    new_gallery += f'            getAssetPath("/images/skorupki/skorupki_{i}.webp"),\n'

new_gallery += """        ]
    }"""

# Use regex to replace the gallery block
content = re.sub(r'gallery: \{.*?\}(?=\s*\};)', new_gallery, content, flags=re.DOTALL)
f.write_text(content, encoding='utf-8')

