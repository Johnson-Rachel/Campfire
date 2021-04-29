import numpy as np
import pandas as pd
from time import time
from time import sleep
from skimage.filters import threshold_otsu, rank
from skimage.color import rgb2gray
from skimage.morphology import disk
from skimage.util import img_as_ubyte
import matplotlib.pyplot as plt
import matplotlib.image as mplimg
import scipy.ndimage as ndi
from os import remove
from os.path import exists
from PIL import Image
from PIL import ImageDraw

# Load Image and Convert to Grayscale
image_filepath = 'src/assets/0.jpg'
original_image = mplimg.imread(image_filepath)
gray_image = rgb2gray(original_image)
img = img_as_ubyte(gray_image)

from skimage import io, feature, segmentation
edges = feature.canny(gray_image, sigma=3)
io.imshow(segmentation.mark_boundaries(gray_image, edges))
io.show()
sleep(4)
raise KeyboardInterrupt

# Create and Apply Threshold
radius = 15
selem = disk(radius)
local_otsu = rank.otsu(img, selem)
foreground = img > local_otsu

# Find Objects
labels, nlabels = ndi.label(foreground)
data = {'Image': [], 'Time': [], 'Box': []}
current_objects = pd.DataFrame(data)
for label in labels[0:9]:
    object_info = dict()
    ob_mask = np.where(labels == label, 1, 0)
    bboxes = ndi.find_objects(ob_mask, max_label=0)
    image_section = bboxes[0]
    im_ob = original_image[image_section]
    object_info = {'Image': [im_ob], 'Time': [time()], 'Box': [image_section]}
    current_objects = current_objects.append(object_info, ignore_index=True)

# Import Existing Objects & Create DataFrame to Write New Ones To
object_storage_filepath = 'items.csv'
if exists(object_storage_filepath):
    prior_objects = pd.read_csv(object_storage_filepath)
    # Compare Current to Prior
    for c_ob in current_objects:
        match = 0
        for p_ob in prior_objects:
            diff = np.absolute(c_ob[:, 0] - p_ob[:, 0])
            total = np.sum(c_ob[:, 0])
            if (diff / total) < 0.2:
                c_ob[:, 1] = p_ob[:, 1]
                match = 1
            if match == 1:
                break

# Produce Image to Display Which Has Markers on It
# image = Image.open(image_filepath)
# draw = ImageDraw.Draw(image)
# for i in len(current_objects.index):
# draw.text((x-coor, y-coor), str(i), (red, green, blue))

# Delete Old File and Old Image and Write Into New Ones
if exists(object_storage_filepath):
    remove(object_storage_filepath)
current_objects.to_csv(object_storage_filepath)
# image.save('~/Documents/Campfire/annotatedpicture.png')
