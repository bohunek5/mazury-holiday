import sys
from PIL import Image

def find_red_clusters():
    img_path = "/Users/karolbohdanowicz/.gemini/antigravity-ide/brain/e839beec-bf81-446e-9bf1-05d5cd99756d/media__1781257634420.png"
    try:
        img = Image.open(img_path).convert('RGB')
    except Exception as e:
        print(f"Error opening image: {e}")
        return

    width, height = img.size
    print(f"Image size: {width}x{height}")

    red_pixels = []
    for y in range(height):
        for x in range(width):
            r, g, b = img.getpixel((x, y))
            # The red drawn by user is usually very red, e.g. R>200, G<50, B<50
            if r > 150 and g < 50 and b < 50:
                red_pixels.append((x, y))
                
    if not red_pixels:
        print("No red pixels found.")
        return
        
    # cluster them simply
    clusters = []
    for px, py in red_pixels:
        found_cluster = False
        for cluster in clusters:
            cx, cy, count = cluster['sum_x']/cluster['count'], cluster['sum_y']/cluster['count'], cluster['count']
            if abs(px - cx) < 60 and abs(py - cy) < 60:
                cluster['sum_x'] += px
                cluster['sum_y'] += py
                cluster['count'] += 1
                
                if px < cluster['min_x']: cluster['min_x'] = px
                if px > cluster['max_x']: cluster['max_x'] = px
                if py < cluster['min_y']: cluster['min_y'] = py
                if py > cluster['max_y']: cluster['max_y'] = py
                
                found_cluster = True
                break
        if not found_cluster:
            clusters.append({
                'sum_x': px, 'sum_y': py, 'count': 1,
                'min_x': px, 'max_x': px, 'min_y': py, 'max_y': py
            })
            
    print(f"Found {len(clusters)} red clusters")
    
    # Sort by Y coordinate so we can make sense of them easily
    clusters.sort(key=lambda c: c['sum_y'] / c['count'])
    
    for i, c in enumerate(clusters):
        cx = c['sum_x'] / c['count']
        cy = c['sum_y'] / c['count']
        width_c = c['max_x'] - c['min_x']
        height_c = c['max_y'] - c['min_y']
        
        pct_x = (cx / width) * 100
        pct_y = (cy / height) * 100
        print(f"Cluster {i+1}: Center ({cx:.1f}, {cy:.1f}) -> X: {pct_x:.2f}%, Y: {pct_y:.2f}%. Size: {width_c}x{height_c}. Pixels: {c['count']}")

find_red_clusters()
