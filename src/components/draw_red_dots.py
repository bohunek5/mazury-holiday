import cv2
import numpy as np

img = cv2.imread('/Users/karolbohdanowicz/.gemini/antigravity-ide/brain/e839beec-bf81-446e-9bf1-05d5cd99756d/media__1781284401462.png')
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

for cnt in contours:
    area = cv2.contourArea(cnt)
    if area > 10:
        M = cv2.moments(cnt)
        if M["m00"] != 0:
            cx = int(M["m10"] / M["m00"])
            cy = int(M["m01"] / M["m00"])
            x_pct = (cx / width) * 100
            y_pct = (cy / height) * 100
            cv2.putText(img, f"({x_pct:.1f},{y_pct:.1f}) Area:{area:.0f}", (cx+10, cy), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
            cv2.circle(img, (cx, cy), 5, (255, 255, 0), -1)

cv2.imwrite('annotated_map.png', img)
