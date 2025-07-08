#!/bin/zsh

# Define the image types to search for
image_types=("*.jpeg" "*.jpg" "*.tiff" "*.tif" "*.png")

# Iterate over each image type
for type in "${image_types[@]}" ".mov"; do
  # Find files of the specified image or video type
  find . -type f -iname "$type" | while read -r FILE; do
    # Get the filename without extension
    filename_without_extension=${FILE%.*}

    # Convert the file to WebP format
    case $type in
      *.mov)
        ffmpeg -i "$FILE" -c:v libwebp -qmin 10 "${filename_without_extension}.webp"
        ;;
      *)
        cwebp "$FILE" -o "${filename_without_extension}.webp"
        ;;
    esac

    echo "Converted $FILE to ${filename_without_extension}.webp"

    # Remove the original file
    rm "$FILE"
  done
done

echo "Conversion complete."
