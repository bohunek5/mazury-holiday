import sys
from PIL import Image

def find_red_features():
    img_path = "/Users/karolbohdanowicz/.gemini/antigravity-ide/brain/e839beec-bf81-446e-9bf1-05d5cd99756d/media__1781257634420.png"
    img = Image.open(img_path).convert('RGB')
    width, height = img.size
    
    red_pixels = []
    for y in range(height):
        for x in range(width):
            r, g, b = img.getpixel((x, y))
            if r > 150 and g < 50 and b < 50:
                red_pixels.append((x, y))
                
    # more sensitive clustering
    clusters = []
    for px, py in red_pixels:
        found = False
        for cluster in clusters:
            if px >= cluster['min_x'] - 10 and px <= cluster['max_x'] + 10 and py >= cluster['min_y'] - 10 and py <= cluster['max_y'] + 10:
                cluster['pixels'].append((px, py))
                if px < cluster['min_x']: cluster['min_x'] = px
                if px > cluster['max_x']: cluster['max_x'] = px
                if py < cluster['min_y']: cluster['min_y'] = py
                if py > cluster['max_y']: cluster['max_y'] = py
                found = True
                break
        if not found:
            clusters.append({
                'pixels': [(px, py)],
                'min_x': px, 'max_x': px, 'min_y': py, 'max_y': py
            })
            
    print(f"Total tight clusters: {len(clusters)}")
    # merge overlapping clusters
    merged = True
    while merged:
        merged = False
        for i in range(len(clusters)):
            for j in range(i + 1, len(clusters)):
                c1, c2 = clusters[i], clusters[j]
                # if overlap
                if not (c1['max_x'] < c2['min_x'] - 10 or c1['min_x'] > c2['max_x'] + 10 or c1['max_y'] < c2['min_y'] - 10 or c1['min_y'] > c2['max_y'] + 10):
                    c1['pixels'].extend(c2['pixels'])
                    c1['min_x'] = min(c1['min_x'], c2['min_x'])
                    c1['max_x'] = max(c1['max_x'], c2['max_x'])
                    c1['min_y'] = min(c1['min_y'], c2['min_y'])
                    c1['max_y'] = max(c1['max_y'], c2['max_y'])
                    clusters.pop(j)
                    merged = True
                    break
            if merged: break
            
    print(f"Total merged clusters: {len(clusters)}")
    
    # Identify which ones are text and which are circles
    for i, c in enumerate(clusters):
        w = c['max_x'] - c['min_x']
        h = c['max_y'] - c['min_y']
        
        # A circle is usually square-ish, say w/h between 0.5 and 2.0
        # and has a hollow center
        is_circle = False
        if w > 10 and h > 10:
            if 0.5 < w/h < 2.0:
                # check center
                cx = c['min_x'] + w//2
                cy = c['min_y'] + h//2
                center_pixels = sum(1 for px, py in c['pixels'] if abs(px-cx) < w//4 and abs(py-cy) < h//4)
                if center_pixels < (w//2 * h//2) * 0.2: # less than 20% of center is red
                    is_circle = True
                    
        cx = c['min_x'] + w/2
        cy = c['min_y'] + h/2
        pct_x = (cx / width) * 100
        pct_y = (cy / height) * 100
        
        print(f"Cluster {i}: Center X:{pct_x:.2f}%, Y:{pct_y:.2f}% | Size: {w}x{h} | Pixels: {len(c['pixels'])} | Circle? {is_circle}")

find_red_features()
