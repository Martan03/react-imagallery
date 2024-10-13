import { ImgGalleryItem } from "../img_gallery/ImgGallery.types";

export interface SliderProps {
    items: ImgGalleryItem[],
    sel: number,
    setSel: React.Dispatch<React.SetStateAction<number>>,
};
