import os
from PIL import Image

def get_thumb_path(filepath):
    base, ext = os.path.splitext(filepath)
    return base + '_thumb.webp'

def main():
    root_dir = 'public/images'
    for dirpath, _, filenames in os.walk(root_dir):
        for f in filenames:
            ext = os.path.splitext(f)[1].lower()
            if ext in ['.jpg', '.jpeg', '.png', '.webp']:
                if f.endswith('_thumb.webp') or f.endswith('_optimized.webp') or f.endswith('-severe-noise-1024x576.webp') or f.endswith('.svg'):
                    continue
                
                filepath = os.path.join(dirpath, f)
                thumb_path = get_thumb_path(filepath)
                
                if not os.path.exists(thumb_path):
                    try:
                        with Image.open(filepath) as img:
                            # Thumbnail max size 800x800
                            img.thumbnail((800, 800), Image.Resampling.LANCZOS)
                            img.save(thumb_path, 'WEBP', quality=80)
                            print(f"Generated {thumb_path}")
                    except Exception as e:
                        print(f"Error processing {filepath}: {e}")

if __name__ == "__main__":
    main()
