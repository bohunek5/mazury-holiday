import re

with open("src/data/stranda-apartments.ts", "r") as f:
    content = f.read()

# The pattern is any line starting with "Nasze apartamenty" followed by maybe some empty lines, and ending with a line ending in ``,
# We can just remove the specific block:
# It looks like:
# Nasze apartamenty...
# 
# Bliskość do...`,
pattern = re.compile(r'^Nasze apartamenty.*?Bliskość do centrum.*?[`\'"],$', re.MULTILINE | re.DOTALL)
new_content = pattern.sub('', content)

# There might also be single lines ending with `,
# Let's just find and replace them exactly:
lines = new_content.split('\n')
cleaned = []
skip = False
for line in lines:
    if line.startswith("Nasze apartamenty"):
        skip = True
    if skip and (line.endswith("`,") or line.endswith("',") or line.endswith('",')):
        skip = False
        continue
    if not skip:
        cleaned.append(line)

with open("src/data/stranda-apartments.ts", "w") as f:
    f.write('\n'.join(cleaned))
