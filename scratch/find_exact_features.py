import cv2
import numpy as np

img = cv2.imread('public/images/stranda_map_crop.png')
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
height, width = img.shape[:2]

# Print pixel dimensions
print(f"Image: {width}x{height}")

def print_pct(x, y, label):
    print(f"{label}: X={x/width*100:.1f}%, Y={y/height*100:.1f}%")

# 1. Parking: Top right, grey area with cars. Let's find the center of the grey area at the top.
# Look at top 30% of image, find largest grey contour.
mask_grey = cv2.inRange(hsv, np.array([0, 0, 50]), np.array([180, 50, 200]))
mask_grey[int(height*0.3):, :] = 0 # only top 30%
mask_grey[:, :int(width*0.4)] = 0 # only right 60%
contours, _ = cv2.findContours(mask_grey, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
if contours:
    cnt = max(contours, key=cv2.contourArea)
    M = cv2.moments(cnt)
    if M["m00"] != 0:
        print_pct(M["m10"]/M["m00"], M["m01"]/M["m00"], "Parking (Grey area top)")

# 2. Tawerna: We already found it. X: 49.8%, Y: 70.7%
print_pct(width * 0.498, height * 0.707, "Tawerna (Green roof)")

# 3. Plaża: We already found it. X: 39.8%, Y: 78.3%
print_pct(width * 0.398, height * 0.783, "Plaża (Sand)")

# 4. Sauna: Small structure left of Plaża. Look for brown/grey just left of X: 39.8%, Y: 78.3%.
# Let's search in region X: 30-40%, Y: 70-85%
mask_sauna = cv2.inRange(hsv, np.array([0, 0, 0]), np.array([180, 255, 255])) # any non-water, non-grass?
# Let's just find the center of the water boundary in that region.
print("Sauna is likely around X=34%, Y=74% based on typical beach layout.")

# 5. Beach bar: Brown area right next to Tawerna (left of it).
# Tawerna is at X=42.9% to 56.6%, Y=65.6% to 76.4%. Left of it is X=35-43%, Y=65-75%.
# Look for brown/orange pixels.
lower_brown = np.array([10, 50, 50])
upper_brown = np.array([30, 255, 255])
mask_bb = cv2.inRange(hsv, lower_brown, upper_brown)
mask_bb[:, :int(width*0.35)] = 0
mask_bb[:, int(width*0.45):] = 0
mask_bb[:int(height*0.60), :] = 0
mask_bb[int(height*0.80):, :] = 0
contours, _ = cv2.findContours(mask_bb, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
if contours:
    cnt = max(contours, key=cv2.contourArea)
    M = cv2.moments(cnt)
    if M["m00"] != 0:
        print_pct(M["m10"]/M["m00"], M["m01"]/M["m00"], "Beach bar (Brown area)")

# 6. Sklepik portowy: Right of Tawerna. X=57-65%, Y=65-75%. Look for small building.
mask_sk = cv2.inRange(hsv, lower_brown, upper_brown)
mask_sk[:, :int(width*0.57)] = 0
mask_sk[:, int(width*0.65):] = 0
mask_sk[:int(height*0.65), :] = 0
mask_sk[int(height*0.75):, :] = 0
contours, _ = cv2.findContours(mask_sk, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
if contours:
    cnt = max(contours, key=cv2.contourArea)
    M = cv2.moments(cnt)
    if M["m00"] != 0:
        print_pct(M["m10"]/M["m00"], M["m01"]/M["m00"], "Sklepik portowy")

# 7. Plac zabaw: Green area left of Building A (A is at 39.7%, 21.2%).
# Let's just guess X=33%, Y=45%? Wait, B is at 48.6%, 39.2%. 
# Plac zabaw is between the path and the water.

