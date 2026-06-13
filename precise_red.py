import sys
from PIL import Image

def get_red_circles():
    img_path = "/Users/karolbohdanowicz/.gemini/antigravity-ide/brain/e839beec-bf81-446e-9bf1-05d5cd99756d/media__1781257634420.png"
    img = Image.open(img_path).convert('RGB')
    width, height = img.size
    
    red_pixels = []
    for y in range(height):
        for x in range(width):
            r, g, b = img.getpixel((x, y))
            if r > 180 and g < 60 and b < 60:
                red_pixels.append((x, y))
                
    clusters = []
    for px, py in red_pixels:
        found = False
        for c in clusters:
            if px >= c['min_x'] - 20 and px <= c['max_x'] + 20 and py >= c['min_y'] - 20 and py <= c['max_y'] + 20:
                c['pixels'].append((px, py))
                c['min_x'] = min(c['min_x'], px)
                c['max_x'] = max(c['max_x'], px)
                c['min_y'] = min(c['min_y'], py)
                c['max_y'] = max(c['max_y'], py)
                found = True
                break
        if not found:
            clusters.append({
                'pixels': [(px, py)],
                'min_x': px, 'max_x': px, 'min_y': py, 'max_y': py
            })
            
    # merge
    merged = True
    while merged:
        merged = False
        for i in range(len(clusters)):
            for j in range(i + 1, len(clusters)):
                c1, c2 = clusters[i], clusters[j]
                if not (c1['max_x'] < c2['min_x'] - 20 or c1['min_x'] > c2['max_x'] + 20 or c1['max_y'] < c2['min_y'] - 20 or c1['min_y'] > c2['max_y'] + 20):
                    c1['pixels'].extend(c2['pixels'])
                    c1['min_x'] = min(c1['min_x'], c2['min_x'])
                    c1['max_x'] = max(c1['max_x'], c2['max_x'])
                    c1['min_y'] = min(c1['min_y'], c2['min_y'])
                    c1['max_y'] = max(c1['max_y'], c2['max_y'])
                    clusters.pop(j)
                    merged = True
                    break
            if merged: break
            
    # Output the ones that look like circles
    for c in clusters:
        w = c['max_x'] - c['min_x']
        h = c['max_y'] - c['min_y']
        cx = c['min_x'] + w//2
        cy = c['min_y'] + h//2
        pct_x = (cx / width) * 100
        pct_y = (cy / height) * 100
        
        # Count pixels near center
        center_pixels = sum(1 for px, py in c['pixels'] if abs(px-cx) < w//4 and abs(py-cy) < h//4)
        total_pixels = len(c['pixels'])
        
        # A circle has empty center and is roughly square
        if 20 < w < 100 and 20 < h < 100 and 0.5 < w/h < 2.0:
            if center_pixels < (w//2 * h//2) * 0.3:
                print(f"CIRCLE: X={pct_x:.1f}%, Y={pct_y:.1f}%")
            else:
                print(f"TEXT/OTHER: X={pct_x:.1f}%, Y={pct_y:.1f}% (w={w}, h={h}, center_px={center_pixels})")

get_red_circles()
