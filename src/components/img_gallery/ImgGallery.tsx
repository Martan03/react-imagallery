import React, { useEffect, useRef, useState } from "react";
import styles from "./ImgGallery.module.css";
import { ImgGalleryItem, ImgGalleryProps } from "./ImgGallery.types";
import Slider from "../slider/Slider";
import Thumbnail from "../thumbnail/Thumbnail";
import Controls from "../controls/Controls";

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
    const [playing, setPlaying] = useState(props.autoPlay ?? false);
    const [showThumb, setShowThumb] = useState(props.showThumbnails ?? true);
    const galleryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!playing)
            return;

        const timer = setInterval(next, props.slideInterval ?? 3000);
        return () => clearInterval(timer);
    }, [playing]);

    const prev = () => setSel(prev => {
        if (props.infinite ?? true) {
            return (prev - 1 + props.items.length) % props.items.length;
        } else if (prev - 1 < 0) {
            setPlaying(false);
            return prev;
        }
        return prev - 1;
    });

    const next = () => setSel(prev => {
        if (props.infinite ?? true) {
            return (prev + 1) % props.items.length;
        } else if (prev + 1 >= props.items.length) {
            setPlaying(false);
            return prev;
        }
        return prev + 1;
    });

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                next();
            } else if (e.key === 'ArrowLeft') {
                prev();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    });

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
            {(props.showControls ?? true) ? (
                <Controls
                    sel={sel}
                    total={props.items.length ?? 0}
                    playing={playing}
                    togglePlaying={() => setPlaying(prev => !prev)}
                    toggleThumb={() => setShowThumb(prev => !prev)}
                    onFScreen={fullscreen}
                    onClose={props.onClose ?? (() => {})}
                />
            ) : ''}
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
