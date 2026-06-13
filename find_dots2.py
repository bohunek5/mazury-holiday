import cv2
import numpy as np
import sys

def main():
    img_path = "/Users/karolbohdanowicz/.gemini/antigravity-ide/brain/e839beec-bf81-446e-9bf1-05d5cd99756d/map_dots_local_1781285416892.png"
    img = cv2.imread(img_path)
    if img is None:
        print("Could not read image")
        sys.exit(1)
    
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    
    # Red has two ranges in HSV
    lower_red1 = np.array([0, 100, 100])
    upper_red1 = np.array([10, 255, 255])
    mask1 = cv2.inRange(hsv, lower_red1, upper_red1)
    
    lower_red2 = np.array([160, 100, 100])
    upper_red2 = np.array([180, 255, 255])
    mask2 = cv2.inRange(hsv, lower_red2, upper_red2)
    
    mask = mask1 + mask2
    
    # find contours
    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    print(f"Image size: {img.shape}")
    
    for c in contours:
        # filter small contours
        if cv2.contourArea(c) > 20:
            M = cv2.moments(c)
            if M["m00"] != 0:
                cx = int(M["m10"] / M["m00"])
                cy = int(M["m01"] / M["m00"])
                print(f"Red dot at x={cx}, y={cy} ({cx/img.shape[1]*100:.1f}%, {cy/img.shape[0]*100:.1f}%)")

if __name__ == '__main__':
    main()
