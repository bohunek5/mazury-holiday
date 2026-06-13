from PIL import Image

def find_centers():
    img = Image.open('public/images/stranda_map_crop.png')
    width, height = img.size
    print(f"Image size: {width}x{height}")
    
    # Just print the exact pixels if possible? No, finding A, B, C is hard visually.
    # Instead, let me just calculate the mapping from the user's screenshot pixels 
    # to the `StrandaMap` percentages if the user's screenshot IS the stranda_map_crop.png.
    # Actually, I can use the same relation:
    # We found X multiplier is ~9.4, Y multiplier is ~10.0.
    pass

find_centers()
