import os
import json
import re

base_dir = '/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/public/images/apartments/stranda_new'
apartments = [d for d in os.listdir(base_dir) if os.path.isdir(os.path.join(base_dir, d))]

all_360 = {}
for apt in apartments:
    apt_360_dir = os.path.join(base_dir, apt, '360')
    if os.path.isdir(apt_360_dir):
        images = [i for i in os.listdir(apt_360_dir) if i.lower().endswith(('.jpg', '.jpeg', '.png'))]
        if images:
            all_360[apt] = [f"/images/apartments/stranda_new/{apt}/360/{img}" for img in sorted(images)]

# 1. Update stranda-apartments.ts
data_file = '/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/data/stranda-apartments.ts'
with open(data_file, 'r', encoding='utf-8') as f:
    content = f.read()

for apt, images in all_360.items():
    # We will replace `virtualTourImage: "..."` with `virtualTourImages: [...]`
    img_array_str = json.dumps(images)
    pattern = r'(virtualTourUrl:\s*"/360-viewer\?id=' + apt + r'",\s*)virtualTourImage:\s*".*?",'
    replacement = r'\1virtualTourImages: ' + img_array_str + ','
    content = re.sub(pattern, replacement, content)

with open(data_file, 'w', encoding='utf-8') as f:
    f.write(content)

# 2. Update ApartmentDetailTemplate.tsx
template_file = '/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/components/ApartmentDetailTemplate.tsx'
with open(template_file, 'r', encoding='utf-8') as f:
    html = f.read()

# Replace the virtualTour section
tour_pattern = re.compile(r'(\{data\.virtualTourUrl && \(\s*<div.*?<h3.*?>.*?</h3>\s*<a\s*href=\{data\.virtualTourUrl\}\s*target="_blank"\s*rel="noopener noreferrer"\s*className=".*?">\s*<svg.*?</svg>\s*<span>.*?</span>\s*</a>\s*</div>\s*\)})', re.DOTALL)

new_tour_html = """{data.virtualTourUrl && (
                                <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                                    <h3 className="text-lg font-sans mb-4 text-slate-900 dark:text-white text-center">{t("details", "virtualTour") || "Wirtualny Spacer 360°"}</h3>
                                    <a
                                        href={data.virtualTourUrl}
                                        className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex justify-center items-center gap-2"
                                    >
                                        <span>Zdjęcia 360°</span>
                                    </a>
                                </div>
                            )}"""

html = tour_pattern.sub(new_tour_html, html)
with open(template_file, 'w', encoding='utf-8') as f:
    f.write(html)

print("Updated data and template.")
