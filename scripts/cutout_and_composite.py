import os
from PIL import Image, ImageEnhance, ImageOps, ImageFilter
import numpy as np

# Paths
input_photo_path = r'C:/Users/sawan/.gemini/antigravity/brain/13551de0-5a26-4545-90a4-34529070a558/.user_uploaded/media_1793816188939.jpg'
master_mockup_path = r'C:/Users/sawan/.gemini/antigravity/brain/13551de0-5a26-4545-90a4-34529070a558/.user_uploaded/media_1793813420304.png'

print('Step 1: Removing background using rembg...')
try:
    from rembg import remove
    input_img = Image.open(input_photo_path)
    output_no_bg = remove(input_img)
    output_no_bg.save('gaurav_raw_cutout.png')
    print('Successfully removed background, size:', output_no_bg.size)
except Exception as e:
    print('Rembg error or not ready yet:', e)
