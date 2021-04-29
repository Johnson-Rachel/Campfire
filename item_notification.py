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


def gray_image(file_number):
    """Takes an integer """
    image_filepath = 'src/assets/' + str(file_number) + '.jpg'
    if not exists(image_filepath):
        raise ValueError('No file found at: ' + image_filepath)
    image = mplimg.imread(image_filepath)
    grayscaled = rgb2gray(image)
    return grayscaled

most_recent_file_number = # insert integer here
current_image = gray_image(most_recent_file_number)

prior_file_number = most_recent_file_number - 1

if prior_file_number >= 0:


