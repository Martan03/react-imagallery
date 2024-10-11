import React, { ReactNode, useRef } from "react";

type SliderProps = {
    children?: ReactNode,
};

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
        <div className="rig-slider-wrapper">
            <img
                className="rig-slider-arrow-left"
                onClick={() => scroll(-1)}
                alt="left arrow"
                src="/icons/expand-arrow.svg"
            />
            <div className="rig-slider" ref={sliderRef}>
                {children}
            </div>
            <img
                className="rig-slider-arrow-right"
                onClick={() => scroll(1)}
                alt="right arrow"
                src="/icons/expand-arrow.svg"
            />
        </div>
    );
};

export default Slider;
