import cv2
import numpy as np

# Load image
img = cv2.imread('/Users/karolbohdanowicz/.gemini/antigravity-ide/brain/e839beec-bf81-446e-9bf1-05d5cd99756d/media__1781284401462.png')
if img is None:
    print("Could not load image")
    exit(1)

h, w, _ = img.shape

# Convert to HSV to find red color easily
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

# Red has two ranges in HSV
lower_red1 = np.array([0, 100, 100])
upper_red1 = np.array([10, 255, 255])
lower_red2 = np.array([160, 100, 100])
upper_red2 = np.array([180, 255, 255])

mask1 = cv2.inRange(hsv, lower_red1, upper_red1)
mask2 = cv2.inRange(hsv, lower_red2, upper_red2)
mask = mask1 + mask2

# Find contours of the red dots
contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

points = []
for cnt in contours:
    # Filter by area to avoid noise
    area = cv2.contourArea(cnt)
    if area > 10:  # Adjust this if needed
        M = cv2.moments(cnt)
        if M["m00"] != 0:
            cx = int(M["m10"] / M["m00"])
            cy = int(M["m01"] / M["m00"])
            x_pct = (cx / w) * 100
            y_pct = (cy / h) * 100
            points.append((x_pct, y_pct, area))

points.sort(key=lambda p: p[0]) # Sort by X coordinate

print(f"Found {len(points)} red dots.")
for i, p in enumerate(points):
    print(f"Point {i+1}: X={p[0]:.2f}%, Y={p[1]:.2f}%, Area={p[2]}")

