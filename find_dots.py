import cv2
import numpy as np
import sys

def main():
    img_path = "/Users/karolbohdanowicz/.gemini/antigravity-ide/brain/e839beec-bf81-446e-9bf1-05d5cd99756d/map_dots_maximized_1781285423701.png"
    img = cv2.imread(img_path)
    if img is None:
        print("Could not read image")
        return

    # Find the map bounding box by ignoring black pixels
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    _, thresh = cv2.threshold(gray, 10, 255, cv2.THRESH_BINARY)
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    
    # Largest contour is the map
    if not contours:
        print("No map found")
        return
    largest_contour = max(contours, key=cv2.contourArea)
    x, y, w, h = cv2.boundingRect(largest_contour)
    print(f"Map bounding box: x={x}, y={y}, w={w}, h={h}")

    # Crop to map
    map_img = img[y:y+h, x:x+w]
    
    # Convert to HSV to find red
    hsv = cv2.cvtColor(map_img, cv2.COLOR_BGR2HSV)
    
    # Red has two ranges in HSV
    lower_red1 = np.array([0, 150, 150])
    upper_red1 = np.array([10, 255, 255])
    lower_red2 = np.array([170, 150, 150])
    upper_red2 = np.array([180, 255, 255])
    
    mask1 = cv2.inRange(hsv, lower_red1, upper_red1)
    mask2 = cv2.inRange(hsv, lower_red2, upper_red2)
    red_mask = mask1 | mask2
    
    # Find contours of red circles
    red_contours, _ = cv2.findContours(red_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    
    print("Found red circles at (percentages):")
    for cnt in red_contours:
        area = cv2.contourArea(cnt)
        if area > 10: # filter out noise
            M = cv2.moments(cnt)
            if M["m00"] != 0:
                cx = M["m10"] / M["m00"]
                cy = M["m01"] / M["m00"]
                pct_x = (cx / w) * 100
                pct_y = (cy / h) * 100
                print(f"Red dot: x={pct_x:.1f}%, y={pct_y:.1f}%")

if __name__ == "__main__":
    main()
