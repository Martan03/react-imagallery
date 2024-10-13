import React, { useEffect, useRef, useState } from "react";
import styles from "./ImgGallery.module.css";
import { ImgGalleryProps } from "./ImgGallery.types";
import Slider from "../slider/Slider";
import Controls from "../controls/Controls";
import Original from "../original/Original";

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
            <Original
                items={props.items}
                sel={sel}
                showArrows={props.showArrows ?? true}
                swipeDistance={props.swipeDistance ?? 30}
                next={next}
                prev={prev}
            />
            {showThumb && (
                <Slider items={props.items} sel={sel} setSel={setSel} />
            )}
        </div>
    )
};

export default ImgGallery;
