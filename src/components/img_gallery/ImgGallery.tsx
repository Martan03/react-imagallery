import React, { useRef, useState } from "react";
import styles from "./ImgGallery.module.css";
import { ImgGalleryItem, ImgGalleryProps } from "./ImgGallery.types";
import Overview from "../overview/Overview";
import Slider from "../slider/Slider";
import Thumbnail from "../thumbnail/Thumbnail";

const Original: React.FC<{img?: ImgGalleryItem}> = ({img}) => {
    return (
        <div className={styles.original}>
            <img
                src={img?.original}
                alt={img?.originalAlt ?? 'original image'}
            />
        </div>
    )
};

const ImgGallery: React.FC<ImgGalleryProps> = (props) => {
    const [sel, setSel] = useState<number>(props.selected ?? 0);
    const [showThumb, setShowThumb] = useState(props.showThumbnails ?? true);
    const galleryRef = useRef<HTMLDivElement>(null);

    const fullscreen = () => {
        if (!galleryRef.current)
            return;

        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            galleryRef.current.requestFullscreen();
        }
    }

    return (
        <div className={styles.imgGallery} ref={galleryRef}>
            <Overview
                sel={sel}
                total={props.items.length ?? 0}
                toggleThumb={() => setShowThumb(!showThumb)}
                onFScreen={fullscreen}
                onClose={props.onClose ?? (() => {})}
            />
            <Original img={props.items[sel]} />
            {showThumb && (
                <Slider>
                    {props.items.map((img, id) => (
                        <Thumbnail
                            key={id}
                            image={img}
                            active={id == sel}
                            onClick={() => setSel(id)}
                        />
                    ))}
                </Slider>
            )}
        </div>
    )
};

export default ImgGallery;
