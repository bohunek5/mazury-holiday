with open('src/app/apartamenty/stranda/page.tsx', 'r') as f:
    content = f.read()

# Replace the sauna logic
old_logic = """                if (filterSauna) {
                    const hasSauna = aptData.amenities?.living?.some((item: string) => item.toLowerCase().includes('sauna')) 
                        || aptData.title?.toLowerCase().includes('sauna');
                    if (!hasSauna) return false;
                }"""

new_logic = """                if (filterSauna) {
                    const hasSauna = (aptData.amenities?.living?.some((item: string) => item.toLowerCase().includes('sauna')) || false)
                        || (aptData.amenities?.bathroom?.some((item: string) => item.toLowerCase().includes('sauna')) || false)
                        || (aptData.amenities?.terrace?.some((item: string) => item.toLowerCase().includes('sauna')) || false)
                        || (aptData.title?.toLowerCase().includes('sauna') || false)
                        || (aptData.description?.toLowerCase().includes('sauna') || false);
                    if (!hasSauna) return false;
                }"""

if old_logic in content:
    content = content.replace(old_logic, new_logic)
    with open('src/app/apartamenty/stranda/page.tsx', 'w') as f:
        f.write(content)
    print("Fixed sauna logic")
else:
    print("Could not find old logic. Maybe already changed or formatted differently.")
