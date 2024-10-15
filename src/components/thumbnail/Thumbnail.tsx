import styles from "./Thumbnail.module.css";
import { ThumbnailProps } from "./Thumbnail.types";

const Thumbnail: React.FC<ThumbnailProps> = ({image, active, onClick}) => {
    return (
        <div
            className={`${styles.thumbnail} ${active ? styles.active : ''}`}
            onClick={onClick}
        >
            <img
                className={styles.fg}
                src={image.thumbnail}
                alt={image.thumbnailAlt ?? 'image thumbnail'}
                loading="lazy"
            />
            <img
                className={styles.bg}
                src={image.thumbnail}
                alt={`${image.thumbnailAlt ?? 'image thumbnail'} background`}
                loading="lazy"
            />
        </div>
    )
};

export default Thumbnail;
