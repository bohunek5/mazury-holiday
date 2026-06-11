import json
import re

with open('scratch/ido_data.json', 'r') as f:
    ido = json.load(f)

with open('src/data/stranda-apartments.ts', 'r') as f:
    content = f.read()

# For each apartment in the file, if we have ido data, we replace the description and amenities.
# The structure is:
# 'A103': {
#     id: 'A103',
#     title: `...`,
#     building: 'A',
#     type: '...',
#     price: ...,
#     guests: '...',
#     description: `...`,
#     amenities: {
#         living: [...],
#         kitchen: [...],
#         bedroom: [...],
#         bathroom: [...],
#         terrace: [...]
#     },
#     gallery: { ... }

# Replacing description and amenities block with regex is tricky. 
# We can find the block by finding `'A103': {` and the next `gallery: {`
for apt_id, data in ido.items():
    desc = data['desc'].replace('`', '\\`')
    
    # We will just replace the `description: \`...\`,` block
    pattern = r"(\b" + apt_id + r"\b.*?description:\s*`)(.*?)(`,\s*amenities:)"
    # Note: the regex needs to be careful.
    
    # Let's try simpler:
    # find `id: 'A103'` block, then replace description and amenities inside it.
