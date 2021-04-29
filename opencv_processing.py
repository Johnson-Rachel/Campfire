import cv2

image_filepath = 'src/assets/test2/2a.jpg'
image = cv2.imread(image_filepath)
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
edged = cv2.Canny(image, 100, 200)
(cnts, _) = cv2.findContours(edged.copy(), cv2.RETR_EXTERNAL,
                             cv2.CHAIN_APPROX_SIMPLE)
idx = 0
for c in cnts:
    x, y, w, h = cv2.boundingRect(c)
    if w > 150 and h > 150:
        idx += 1
        new_img = image[y:y + h, x:x + w]
        cv2.imwrite('cvimages1/' + str(idx) + '.png', new_img)

