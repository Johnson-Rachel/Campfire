import cv2

# Load Image and Convert to Grayscale
image_filepath = '2021-04-29/20210429_182801.jpg'
image = cv2.imread(image_filepath)
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# Find Edges (via Canny
edged = cv2.Canny(image, 10, 500)
(cnts, _) = cv2.findContours(edged.copy(), cv2.RETR_EXTERNAL,
                             cv2.CHAIN_APPROX_SIMPLE)

# Isolate Objects and Save Them
idx = 0
items = []
for c in cnts:
    x, y, w, h = cv2.boundingRect(c)
    if w > 100 and h > 100:
        idx += 1
        new_img = image[y:y + h, x:x + w]
        items.append((x, y))
        cv2.imwrite('cvimages1/' + str(idx) + '.png', new_img)

# Write on Item Numbers to Image
for idx in range(len(items)):
    cv2.putText(img=image, text=str(idx + 1), org=items[idx],
                fontFace=1, fontScale=10, color=(255, 0, 0),
                thickness=3)
cv2.imwrite(image_filepath, image)
