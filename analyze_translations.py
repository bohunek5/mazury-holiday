import re

with open('src/lib/translations.ts', 'r') as f:
    lines = f.readlines()

langs = []
current_lang = None
keys = {}

for line in lines:
    m = re.match(r'^\s{4}([a-z]{2}): \{', line)
    if m:
        current_lang = m.group(1)
        langs.append(current_lang)
        keys[current_lang] = 0
    elif current_lang and re.match(r'^\s{8}\w+', line):
        keys[current_lang] += 1

print(f"Languages found: {langs}")
for lang, count in keys.items():
    print(f"  {lang}: {count} top-level keys")

