import { ImgGalleryItem } from "../img_gallery/Imagallery.types";

export interface SliderProps {
    items: ImgGalleryItem[],
    sel: number,
    setSel: React.Dispatch<React.SetStateAction<number>>,
};
