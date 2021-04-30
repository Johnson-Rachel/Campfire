import cv2

# Load Image and Convert to Grayscale
image_filepath = 'cam3/20210429_183558.jpg'  # will eventually be linked to front-end camera
image = cv2.imread(image_filepath)
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# Find Edges & Contour of Objects
edged = cv2.Canny(image, 10, 500)
(cnts, _) = cv2.findContours(edged.copy(), cv2.RETR_EXTERNAL,
                             cv2.CHAIN_APPROX_SIMPLE)

# Isolate Objects and Save Them as Individual Png Files
idx = 0
items = []
for c in cnts:
    x, y, w, h = cv2.boundingRect(c)
    if w > 150 and h > 150:
        idx += 1
        new_img = image[y:y + h, x:x + w]
        items.append((x, y))
        cv2.imwrite('cvimages10/' + str(idx) + '.png', new_img)

# Write on Item Numbers to Image
for idx in range(len(items)):
    cv2.putText(img=image, text=str(idx + 1), org=items[idx],
                fontFace=1, fontScale=10, color=(255, 0, 0),
                thickness=3)
cv2.imwrite(image_filepath, image)
