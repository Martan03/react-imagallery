# react-imagallery

React Imagallery is react component for displaying image gallery.

## Table of Contents
- [Installation](#installation)
- [Example](#example)
- [Features](#features)
- [Props](#props)
- [Links](#links)

## Installation

Imagallery can be installed using npm (with React 16.0.0 or later):
```bash
npm i react-imagallery
```

## Example

You can see basic example of displaying images
[here](https://github.com/Martan03/react-imagallery/tree/master/example).

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
- **GitHub repository:** [react-imagallery](https://github.com/Martan03/react-imagallery)
- **Author website:** [martan03.github.io](https://martan03.github.io)
