# react-img-gallery

## Table of Contents
{{ mdcon }}

## Installation

## Features
- Fullscreen support
- Thumbnail navigation
- Swipe & drag gestures
- Slideshow support
- Responsive design
- Customization

## Props
- `items`: (ImgGalleryItem[], required)
    - `original`: *(string, required)*: image source URL
    - `thumbnail`: *(string, required)*: image thumbnail source URL
    - `originalAlt`: *(string)*: image alt
    - `thumbnailAlt`: *(string)*: image thumbnail alt
- `selected`: *(number)*: selected item index to be displayed
- `autoPlay`: *(boolean)*: whether slideshow should play automatically
- `slideInterval`: *(number)*: interval between slides when slideshow is played
- `swipeDistance`: *(number)*: swipe distance needed for changing selected
    image
- `infinite`: *(boolean)*: whether images should create infinite loop
- `showControls`: *(boolean)*: whether to show controls
- `showThumbnails`: *(boolean)*: whether to show image thumbnails
- `showArrows`: *(boolean)*: whether to show arrows for changing selected image
- `onClose`: *(() => void)*: called when close button is clicked

## Links

- **Author:** [Martan03](https://github.com/Martan03)
- **GitHub repository:** [react-img-gallery](https://github.com/Martan03/react-img-gallery)
- **Author website:** [martan03.github.io](https://martan03.github.io)
