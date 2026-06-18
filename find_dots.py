from PIL import Image
import numpy as np
from scipy.ndimage import label, center_of_mass

img = Image.open('/Users/karolbohdanowicz/.gemini/antigravity-ide/brain/87a6b7c8-830c-460f-97e0-80b6a2c4e55a/media__1781255498709.png').convert('RGB')
arr = np.array(img)
h, w, _ = arr.shape

# Threshold for dark pixels
threshold = 80
mask = (arr[:,:,0] < threshold) & (arr[:,:,1] < threshold) & (arr[:,:,2] < threshold)

labeled, num_features = label(mask)

print("Found features:")
for i in range(1, num_features+1):
    component_mask = (labeled == i)
    area = np.sum(component_mask)
    if 10 < area < 1000:
        cy, cx = center_of_mass(component_mask)
        px = cx / w * 100
        py = cy / h * 100
        print(f"x: {px:.2f}, y: {py:.2f}, area: {area}")

