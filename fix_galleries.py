import re

with open('src/data/stranda-apartments.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Let's find all apartments
apartments = re.findall(r"('[A-Z0-9c-]+':\s*\{.*?\n    \},?\n)", content, re.DOTALL)
print(f"Found {len(apartments)} apartments.")

new_content = content
fixed_count = 0

for apt in apartments:
    # A robust way to find all gallery blocks.
    # We look for "gallery: {" and count the matching brackets.
    # Actually, the simplest way is to look for "gallery: {" followed by anything until "    }," or "\n        }," or "additionalInfo:"
    # But since we just want to remove the ones that are NOT at the end, we can find them via regex.
    # Look for any gallery: { ... } that is inside amenities or other places.
    
    # Let's find how many times "gallery:" appears in the apartment block.
    gallery_count = apt.count("gallery: {")
    if gallery_count > 1:
        print(f"Apartment has {gallery_count} galleries.")
        
        # We know the correct gallery should be right after icalUrl: '...'
        m = re.search(r"(icalUrl: '[^']+',\n\s*gallery: \{.*?\n        \})\n", apt, re.DOTALL)
        if m:
            correct_block = m.group(1)
            # Find the ID
            m_id = re.search(r"id:\s*'([^']+)'", apt)
            apt_id = m_id.group(1) if m_id else "unknown"
            print(f"Fixing {apt_id}...")
            
            # Now, remove ALL gallery blocks.
            # A gallery block is: \s*gallery: \{.*?\]\n\s*\}
            clean_apt = re.sub(r"\s*gallery: \{.*?\]\n\s*\}", "", apt, flags=re.DOTALL)
            
            # And reinsert the correct block
            clean_apt = re.sub(r"(icalUrl: '[^']+',)", correct_block, clean_apt)
            
            new_content = new_content.replace(apt, clean_apt)
            fixed_count += 1
        else:
            print("Could not find correct block in apt")

if fixed_count > 0:
    with open('src/data/stranda-apartments.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Fixed {fixed_count} apartments.")
else:
    print("No fixes needed or possible.")
