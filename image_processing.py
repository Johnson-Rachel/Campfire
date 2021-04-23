# Imports
import numpy as np
import pandas as pd
import time
from skimage.filters import threshold_otsu
from skimage.color import rgb2gray
import matplotlib.pyplot as plt
import scipy.ndimage as ndi


# Load Image and Convert to Grayscale
original_image = plt.imread('image filepath')
gray_image = rgb2gray(original_image)

# Create and Apply Threshold
thresh = threshold_otsu(gray_image)
foreground = gray_image > thresh

# Find Objects
labels, nlabels = ndi.label(foreground)
current_objects = pd.DataFrame(columns=['Image', 'Time'])
for label in labels:
    im_ob_and_time = dict()
    ob_mask = np.where(labels == label, 1, 0)
    bboxes = ndi.find_objects(ob_mask)
    im_ob = foreground[bboxes[0]]
    im_ob_and_time['Image'] = im_ob
    im_ob_and_time['Time'] = time.time()
    current_objects.append(im_ob_and_time, ignore_index=True)

# Import Existing Objects & Create DataFrame to Write New Ones To
prior_objects = pd.read_csv('where images were stored')
new_objects = pd.DataFrame(columns=['Image', 'Time'])

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
    if match == 0:
        new_objects.append(c_ob)  # If Not Already There, Then Record It

# Compare Times to See How Long It's Been There
nrows = current_objects.size / 2
times = list()
for i in range(nrows):
    list[i] = round((time.time() - current_objects.iloc[i, 1]) * 60)

# Produce Image to Display Which Has Markers on It


# Done
