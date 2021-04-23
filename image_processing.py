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
    ob_mask = np.where(labels == label, 1, 0)
    bboxes = ndi.find_objects(ob_mask)
    im_ob = foreground[bboxes[0]]
    im_ob_and_time = np.array(im_ob, time.time())
    current_objects.append(im_ob_and_time)

# Import Existing Objects
prior_objects = pd.read_csv('where images were stored')

# Compare Current to Prior

# If Already There, Compare Times to See How Long it Has Been There

# If Not Already There, Then Record It


# Produce Image to Display Which Has Markers on It

# Done
