import cv2
import numpy as np
import sys

img_path = sys.argv[1]
img = cv2.imread(img_path)
if img is None:
    print(f"Could not read {img_path}")
    sys.exit(1)

hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
lower_red1 = np.array([0, 100, 100])
upper_red1 = np.array([10, 255, 255])
lower_red2 = np.array([160, 100, 100])
upper_red2 = np.array([180, 255, 255])

mask1 = cv2.inRange(hsv, lower_red1, upper_red1)
mask2 = cv2.inRange(hsv, lower_red2, upper_red2)
mask = mask1 + mask2

contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
height, width = img.shape[:2]

dots = []
for cnt in contours:
    area = cv2.contourArea(cnt)
    if area > 10:
        M = cv2.moments(cnt)
        if M["m00"] != 0:
            cx = int(M["m10"] / M["m00"])
            cy = int(M["m01"] / M["m00"])
            x_pct = (cx / width) * 100
            y_pct = (cy / height) * 100
            dots.append((x_pct, y_pct, area))

dots.sort(key=lambda d: d[0])
print(f"Found {len(dots)} red dots in {img_path}")
for i, d in enumerate(dots):
    print(f"Dot {i+1}: X={d[0]:.1f}%, Y={d[1]:.1f}%, Area={d[2]:.1f}")
