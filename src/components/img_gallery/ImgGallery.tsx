import React, { useState } from "react";
import "./ImgGallery.module.css";
import { ImgGalleryProps } from "./ImgGallery.types";
import Overview from "../overview/Overview";
import Slider from "../slider/Slider";
import Thumbnail from "../thumbnail/Thumbnail";

const ImgGallery: React.FC<ImgGalleryProps> = (props) => {
    const [sel, setSel] = useState<number>(props.selected ?? 0);

    return (
        <div className="img-gallery">
            <Overview
                sel={sel}
                total={props.items.length ?? 0}
                onClose={props.onClose ?? (() => {})}
            />
            <div className="original">
                <img
                    src={props.items[sel]?.original}
                    alt={props.items[sel]?.originalAlt ?? 'original image'}
                />
            </div>
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
        </div>
    )
};

export default ImgGallery;
