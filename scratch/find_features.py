import cv2
import numpy as np

img = cv2.imread('public/images/stranda_map_crop.png')
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
height, width = img.shape[:2]

def find_center(mask, name):
    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    if not contours:
        print(f"Could not find {name}")
        return
    # Find largest contour
    cnt = max(contours, key=cv2.contourArea)
    M = cv2.moments(cnt)
    if M["m00"] != 0:
        cx = int(M["m10"] / M["m00"])
        cy = int(M["m01"] / M["m00"])
        print(f"{name} -> X: {cx/width*100:.1f}%, Y: {cy/height*100:.1f}%")

# 1. Sand (Plaża) - Yellow
lower_yellow = np.array([20, 100, 100])
upper_yellow = np.array([40, 255, 255])
mask_yellow = cv2.inRange(hsv, lower_yellow, upper_yellow)
find_center(mask_yellow, "Plaża (Yellow sand)")

# 2. Green Roof (Tawerna) - Teal/Dark Green
# Let's just find the largest teal object
lower_teal = np.array([70, 50, 50])
upper_teal = np.array([90, 255, 255])
mask_teal = cv2.inRange(hsv, lower_teal, upper_teal)
find_center(mask_teal, "Tawerna (Teal roof)")

# 3. Water (Blue)
lower_blue = np.array([100, 150, 50])
upper_blue = np.array([130, 255, 255])
mask_blue = cv2.inRange(hsv, lower_blue, upper_blue)

# 4. Pier (Wypożyczalnia skuterów) - Brown object surrounded by blue
# To find this, we look for brown pixels where Y is high (bottom of image)
lower_brown = np.array([10, 50, 50])
upper_brown = np.array([20, 200, 200])
mask_brown = cv2.inRange(hsv, lower_brown, upper_brown)

# Let's just find the bounding box of the Teal roof to know where Tawerna is
contours, _ = cv2.findContours(mask_teal, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
if contours:
    cnt = max(contours, key=cv2.contourArea)
    x, y, w, h = cv2.boundingRect(cnt)
    print(f"Tawerna bounding box: X={x/width*100:.1f}% to {(x+w)/width*100:.1f}%, Y={y/height*100:.1f}% to {(y+h)/height*100:.1f}%")

