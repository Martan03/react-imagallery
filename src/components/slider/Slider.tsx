import React, { useEffect, useRef } from "react";
import styles from "./Slider.module.css";
import { SliderProps } from "./Slider.types";

import Arrow from '../../icons/arrow.svg';
import Thumbnail from "../thumbnail/Thumbnail";

const Slider: React.FC<SliderProps> = ({items, sel, setSel}) => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scroll = (dir: number) => {
        if (!sliderRef.current)
            return;
        const slider = sliderRef.current;
        slider.scrollBy({
            left: slider.offsetWidth * dir,
            behavior: 'smooth',
        });
    }

    useEffect(() => {
        const makeVisible = () => {
            if (!sliderRef.current || !sliderRef.current.children[sel])
                return;

            const thumb = sliderRef.current.children[sel];
            const rect = thumb.getBoundingClientRect();
            const prect = sliderRef.current.getBoundingClientRect();
            if (rect.left < prect.left || rect.right > prect.right) {
                thumb.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center',
                });
            }
        };

        makeVisible();
    }, [sel]);

    return (
        <div className={styles.sliderWrapper}>
            <Arrow className={styles.leftArrow} onClick={() => scroll(-1)} />
            <div className={styles.slider} ref={sliderRef}>
                {items.map((img, id) => (
                    <Thumbnail
                        key={id}
                        image={img}
                        active={id == sel}
                        onClick={() => setSel(id)}
                    />
                ))}
            </div>
            <Arrow className={styles.rightArrow} onClick={() => scroll(1)} />
        </div>
    );
};

export default Slider;
