import { ImgGalleryItem } from "../img_gallery/ImgGallery.types";

export interface OriginalProps {
    items: ImgGalleryItem[],
    sel: number,
    showArrows: boolean,
    swipeDistance: number,
    next: () => void,
    prev: () => void,
}
