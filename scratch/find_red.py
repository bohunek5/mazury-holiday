import cv2
import numpy as np

img = cv2.imread('public/images/stranda_map_crop.png')
# Convert to HSV
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

# Red color range
lower_red1 = np.array([0, 100, 100])
upper_red1 = np.array([10, 255, 255])
lower_red2 = np.array([160, 100, 100])
upper_red2 = np.array([180, 255, 255])

mask1 = cv2.inRange(hsv, lower_red1, upper_red1)
mask2 = cv2.inRange(hsv, lower_red2, upper_red2)
mask = mask1 + mask2

# Find contours
contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

centers = []
for cnt in contours:
    area = cv2.contourArea(cnt)
    if area > 100: # Filter small noise
        M = cv2.moments(cnt)
        if M["m00"] != 0:
            cx = int(M["m10"] / M["m00"])
            cy = int(M["m01"] / M["m00"])
            centers.append((cx, cy, area))

centers.sort(key=lambda x: x[0]) # Sort by X coordinate
for c in centers:
    # Print percentage
    print(f"Red spot at X: {c[0]/1024*100:.1f}%, Y: {c[1]/457*100:.1f}% (Area: {c[2]})")

