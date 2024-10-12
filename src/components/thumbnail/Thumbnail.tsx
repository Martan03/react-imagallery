import "./Thumbnail.module.css";
import { ThumbnailProps } from "./Thumbnail.types";

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
};

export default Thumbnail;
