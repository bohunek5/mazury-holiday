import cv2
import numpy as np
import sys

def main():
    img_path1 = "/Users/karolbohdanowicz/.gemini/antigravity-ide/brain/e839beec-bf81-446e-9bf1-05d5cd99756d/map_dots_local_1781285416892.png"
    img_path2 = "/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/public/images/stranda_map.webp"
    
    img1 = cv2.imread(img_path1)
    img2 = cv2.imread(img_path2)
    
    # Let's find red dots in img1
    hsv = cv2.cvtColor(img1, cv2.COLOR_BGR2HSV)
    mask1 = cv2.inRange(hsv, np.array([0, 100, 100]), np.array([10, 255, 255]))
    mask2 = cv2.inRange(hsv, np.array([160, 100, 100]), np.array([180, 255, 255]))
    mask = mask1 + mask2
    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    
    dots = []
    for c in contours:
        if cv2.contourArea(c) > 20:
            M = cv2.moments(c)
            if M["m00"] != 0:
                cx = int(M["m10"] / M["m00"])
                cy = int(M["m01"] / M["m00"])
                dots.append((cx, cy))
                
    # Now let's try to match img2 within img1 using SIFT
    sift = cv2.SIFT_create()
    kp1, des1 = sift.detectAndCompute(img1, None)
    kp2, des2 = sift.detectAndCompute(img2, None)
    
    bf = cv2.BFMatcher()
    matches = bf.knnMatch(des1, des2, k=2)
    
    good = []
    for m, n in matches:
        if m.distance < 0.75 * n.distance:
            good.append(m)
            
    if len(good) > 10:
        src_pts = np.float32([kp1[m.queryIdx].pt for m in good]).reshape(-1, 1, 2)
        dst_pts = np.float32([kp2[m.trainIdx].pt for m in good]).reshape(-1, 1, 2)
        
        M, _ = cv2.findHomography(src_pts, dst_pts, cv2.RANSAC, 5.0)
        
        for (cx, cy) in dots:
            pt = np.array([[[cx, cy]]], dtype=np.float32)
            transformed = cv2.perspectiveTransform(pt, M)
            tx, ty = transformed[0][0]
            print(f"Red dot in original map coords: x={tx:.1f}, y={ty:.1f} ({tx/img2.shape[1]*100:.1f}%, {ty/img2.shape[0]*100:.1f}%)")
    else:
        print("Not enough matches")

if __name__ == '__main__':
    main()
