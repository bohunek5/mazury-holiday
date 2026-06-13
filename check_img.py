from PIL import Image

def check_image():
    img_path = "/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/public/images/stranda_map_crop.png"
    img = Image.open(img_path).convert('RGB')
    print(f"Base map image size: {img.size}")
check_image()
