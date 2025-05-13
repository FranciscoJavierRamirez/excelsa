from PIL import Image
import sys

# Enable AVIF support
try:
    from pillow_avif import AvifImagePlugin
except ImportError:
    print("AVIF plugin not available")

# Path to the updated image
input_image = "public/assets/images/testimonials/valentina.png"

# Output paths
webp_output = "public/assets/images/testimonials/valentina.webp"
avif_output = "public/assets/images/testimonials/valentina.avif"

# Load the image
img = Image.open(input_image)

# Convert to WebP (with quality of 80)
img.save(webp_output, format="WEBP", quality=80)
print(f"Saved WebP image to {webp_output}")

# Convert to AVIF (with quality of 80)
try:
    img.save(avif_output, format="AVIF", quality=80)
    print(f"Saved AVIF image to {avif_output}")
except Exception as e:
    print(f"Error converting to AVIF: {e}") 