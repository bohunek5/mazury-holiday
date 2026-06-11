import re
import os

filepath = 'src/data/stranda-apartments.ts'
with open(filepath, 'r') as f:
    content = f.read()

# 1. Update c-z-dwoma-sypialniami
content = re.sub(
    r"(id: 'c-z-dwoma-sypialniami',\s*)title: `Apartament C z 2 sypialniami 4\+2 z Jacuzzi`,",
    r"\g<1>title: 'Giżycko Stranda - Apartament z 2 sypialniami - C z 2 sypialniami',\n        shortTitle: 'Apartament z 2 sypialniami',",
    content
)

# 2. Update c-z-jedna-sypialnia
content = re.sub(
    r"(id: 'c-z-jedna-sypialnia',\s*)title: `Apartament C z 1 sypialnią 2\+2 z Jacuzzi`,",
    r"\g<1>title: 'Giżycko Stranda - Apartament z 1 sypialnią - C z jedną sypialnią',\n        shortTitle: 'Apartament z 1 sypialnią',",
    content
)

# 3. Update c-studio
content = re.sub(
    r"(id: 'c-studio',\s*)title: `Apartament C Studio 2\+2 z Jacuzzi`,",
    r"\g<1>title: 'Giżycko Stranda - Apartament typu Studio - C Studio',\n        shortTitle: 'Apartament typu Studio',",
    content
)

# 4. Update C304
content = re.sub(
    r"(id: 'C304',\s*)title: `Apartament C304 Studio 2\+2`,",
    r"\g<1>title: `Apartament C304 Studio 2+2`,\n        shortTitle: 'Apartament typu Studio',",
    content
)

# 5. Update B304
content = re.sub(
    r"(id: 'B304',[\s\S]*?)gallery: \{",
    r"\g<1>idoBookingId: '44',\n        gallery: {",
    content
)

# 6. Delete B305 and C205 blocks
# Let's remove from 'B305': { to the next },
content = re.sub(r"\s*'B305': \{[\s\S]*?gallery: \{[\s\S]*?images: \[[\s\S]*?\]\n\s*\}\n\s*\},", "", content)
content = re.sub(r"\s*'C205': \{[\s\S]*?gallery: \{[\s\S]*?images: \[[\s\S]*?\]\n\s*\}\n\s*\},", "", content)

with open(filepath, 'w') as f:
    f.write(content)
