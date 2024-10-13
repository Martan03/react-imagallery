export interface ImgGalleryItem {
    original: string,
    thumbnail: string,
    originalAlt?: string,
    thumbnailAlt?: string,
}

export interface ImgGalleryProps {
    items: ImgGalleryItem[],
    selected?: number,
    autoPlay?: boolean,
    slideInterval?: number,
    infinite?: boolean,
    showControls?: boolean,
    showThumbnails?: boolean,
    onClose?: () => void,
}
