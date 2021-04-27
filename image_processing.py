import numpy as np
import pandas as pd
from time import time
from skimage.filters import threshold_otsu
from skimage.color import rgb2gray
import matplotlib.pyplot as plt
import scipy.ndimage as ndi
from os import remove
from os.path import exists
from PIL import Image
from PIL import ImageDraw

# Load Image and Convert to Grayscale
image_filepath = 'image filepath'
original_image = plt.imread(image_filepath)
gray_image = rgb2gray(original_image)

# Create and Apply Threshold
thresh = threshold_otsu(gray_image)
foreground = gray_image > thresh

# Find Objects
labels, nlabels = ndi.label(foreground)
current_objects = pd.DataFrame(columns=['Image', 'Time', 'Box'])
for label in labels:
    object_info = dict()
    ob_mask = np.where(labels == label, 1, 0)
    bboxes = ndi.find_objects(ob_mask)
    image_section = bboxes[0]
    im_ob = original_image[image_section]
    object_info['Image'] = im_ob
    object_info['Time'] = time()
    object_info['Box'] = image_section
    object_df = pd.DataFrame(data=object_info, index=range(1))
    current_objects.append(object_df, ignore_index=True)

# Import Existing Objects & Create DataFrame to Write New Ones To
object_storage_filepath = 'where images are stored'
if exists(object_storage_filepath):
    prior_objects = pd.read_csv(object_storage_filepath)
    # Compare Current to Prior
    for c_ob in current_objects:
        match = 0
        for p_ob in prior_objects:
            diff = np.absolute(c_ob['Image'] - p_ob['Image'])
            total = np.sum(c_ob['Image'])
            if (diff / total) < 0.2:
                c_ob['Time'] = p_ob['Time']
                match = 1
            if match == 1:
                break

# Compare Times to See How Long It's Been There
nrows = current_objects.shape[0]
times = list()
for i in range(nrows):
    list[i] = round((time() - current_objects.iloc[i, 1]) * 60)

# Produce Image to Display Which Has Markers on It
image = Image.open(image_filepath)
draw = ImageDraw.Draw(image)
for i in len(current_objects.index):
    draw.text((x-coor, y-coor), str(i), (red, green, blue))

# Delete Old File and Old Image and Write Into New Ones
if exists(object_storage_filepath):
    remove(object_storage_filepath)
current_objects.to_csv(object_storage_filepath)
if exists(image_filepath):
    remove(image_filepath)
image.save(image_filepath)
