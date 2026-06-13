import cv2
import numpy as np
import sys

def main():
    img_path_crop = "/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/public/images/stranda_map_crop.png"
    img_path_full = "/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/public/images/stranda_map.webp"
    
    img1 = cv2.imread(img_path_crop)
    img2 = cv2.imread(img_path_full)
    
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
        
        # Old points in percentages for crop
        old_points = {
            "A": (37.9, 14.3),
            "B": (47.1, 29.5),
            "C": (57.7, 26.0),
            "parking": (48.5, 8.0),
            "playground": (35.4, 54.6),
            "sauna": (28.7, 66.9),
            "beach": (30.8, 77.1),
            "scooters": (34.0, 88.8),
            "beachbar": (39.7, 70.5),
            "tavern": (49.6, 71.5),
            "shop": (58.8, 74.4)
        }
        
        new_points = {}
        for name, (px, py) in old_points.items():
            cx = px / 100.0 * img1.shape[1]
            cy = py / 100.0 * img1.shape[0]
            
            pt = np.array([[[cx, cy]]], dtype=np.float32)
            transformed = cv2.perspectiveTransform(pt, M)
            tx, ty = transformed[0][0]
            
            new_points[name] = (tx / img2.shape[1] * 100, ty / img2.shape[0] * 100)
            
        print("Mapped old points to new coordinates:")
        for name, (nx, ny) in new_points.items():
            print(f"{name}: x={nx:.1f}, y={ny:.1f}")
            
        # Also print the red dots to see which ones match
        red_dots = [
            (37.0, 61.2),
            (34.1, 54.4),
            (56.8, 53.0),
            (50.1, 51.0),
            (41.2, 50.5),
            (37.5, 41.6),
            (48.1, 27.4),
            (56.6, 23.8),
            (38.8, 19.2),
            (40.4, 17.1)
        ]
        
        print("\nMatching red dots to labels:")
        for name, (nx, ny) in new_points.items():
            best_dist = 1000
            best_dot = None
            for rdx, rdy in red_dots:
                dist = np.sqrt((nx - rdx)**2 + (ny - rdy)**2)
                if dist < best_dist:
                    best_dist = dist
                    best_dot = (rdx, rdy)
            
            if best_dist < 5: # 5% threshold
                print(f"Matched {name} to user red dot {best_dot} (dist: {best_dist:.2f}%)")
            else:
                print(f"No user red dot for {name} (closest dist: {best_dist:.2f}%) -> Fallback to mapped: x={nx:.1f}, y={ny:.1f}")

if __name__ == '__main__':
    main()
