import React, { useRef } from "react";
import styles from "./Slider.module.css";
import { SliderProps } from "./Slider.types";

import Arrow from '../../icons/arrow.svg';

const Slider: React.FC<SliderProps> = ({children}) => {
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

    return (
        <div className={styles.sliderWrapper}>
            <Arrow className={styles.leftArrow} onClick={() => scroll(-1)} />
            <div className={styles.slider} ref={sliderRef}>
                {children}
            </div>
            <Arrow className={styles.rightArrow} onClick={() => scroll(1)} />
        </div>
    );
};

export default Slider;
