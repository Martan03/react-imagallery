import { ImgGalleryItem } from "../img_gallery/ImgGallery.types";

export interface ThumbnailProps {
    image: ImgGalleryItem,
    active: boolean,
    onClick: () => void,
}
