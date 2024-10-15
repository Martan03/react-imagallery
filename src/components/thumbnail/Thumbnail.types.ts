import { ImgGalleryItem } from "../img_gallery/Imagallery.types";

export interface ThumbnailProps {
    image: ImgGalleryItem,
    active: boolean,
    onClick: () => void,
}
