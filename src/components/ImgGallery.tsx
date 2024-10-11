import React, { useState } from "react";
import Slider from "./Slider";

type OverviewProps = {
    sel: number,
    total: number,
    onClose: () => void,
};

const Overview: React.FC<OverviewProps> = ({sel, total, onClose}) => {
    return (
        <div className="overview">
            <p>{sel + 1}/{total}</p>
            <button onClick={onClose}>X</button>
        </div>
    )
};

type ThumbnailProps = {
    image: ImgGalleryItem,
    active: boolean,
    onClick: () => void,
};

const Thumbnail: React.FC<ThumbnailProps> = ({image, active, onClick}) => {
    return (
        <div onClick={onClick} className={active ? 'active' : ''}>
            <img
                className="fg"
                src={image.thumbnail}
                alt={image.thumbnailAlt ?? 'image thumbnail'}
            />
            <img
                className="bg"
                src={image.thumbnail}
                alt={`${image.thumbnailAlt ?? 'image_thumbnail'} background`}
            />
        </div>
    )
}

export interface ImgGalleryItem {
    original: string,
    thumbnail: string,
    originalAlt?: string,
    thumbnailAlt?: string,
}

export interface ImgGalleryProps {
    items: ImgGalleryItem[],
    selected?: number,
    onClose?: () => void,
}

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
