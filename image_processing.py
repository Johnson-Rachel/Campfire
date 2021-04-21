# Imports
import numpy as np
from skimage.filters import threshold_otsu
from skimage.color import rgb2gray
import matplotlib.pyplot as plt


# Load Image and Convert to Grayscale
original_image = plt.imread('image filepath')
gray_image = rgb2gray(original_image)


# Create and Apply Threshold
thresh = threshold_otsu(gray_image)
foreground = gray_image > thresh




