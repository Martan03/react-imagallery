export interface ImgGalleryItem {
    original: string,
    thumbnail: string,
    originalAlt?: string,
    thumbnailAlt?: string,
}

export interface ImgGalleryProps {
    items: ImgGalleryItem[],
    selected?: number,
    onClose?: () => void,
}
