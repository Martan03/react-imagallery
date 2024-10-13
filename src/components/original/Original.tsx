import { useState } from "react";
import styles from "./Original.module.css";
import { OriginalProps } from "./Original.types";

import Arrow from '../../icons/arrow.svg';

const Original: React.FC<OriginalProps> = (props) => {
    const [start, setStart] = useState<number|null>(null);
    const [end, setEnd] = useState<number|null>(null);

    const handleMove = (dist: number) => {
        if (dist > props.swipeDistance) {
            props.next();
        } else if (dist < -props.swipeDistance) {
            props.prev();
        }
    }

    const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setEnd(null);
        setStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        setEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (start !== null && end !== null)
            handleMove(start - end);
    }

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setEnd(null);
        setStart(e.clientX);
    }

    const onMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
        if (start !== null)
            handleMove(start - e.clientX);
    }

    return (
        <div
            className={styles.original}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
        >
            {props.showArrows && (
                <Arrow className={styles.leftArrow} onClick={props.prev} />
            )}
            <img
                src={props.items[props.sel]?.original}
                alt={props.items[props.sel]?.originalAlt ?? 'original image'}
                draggable={false}
            />
            {props.showArrows && (
                <Arrow className={styles.rightArrow} onClick={props.next} />
            )}
        </div>
    );
};

export default Original;
