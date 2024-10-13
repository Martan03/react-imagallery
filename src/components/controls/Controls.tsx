import styles from "./Controls.module.css";
import { OverviewProps } from "./Controls.types";

import Fullscreen from '../../icons/fullscreen.svg';
import Grid from '../../icons/grid.svg';
import Close from '../../icons/close.svg';
import Play from '../../icons/play.svg';
import Pause from '../../icons/pause.svg';

const Controls: React.FC<OverviewProps> = (props) => {
    return (
        <div className={styles.overview}>
            <div>
                <Fullscreen onClick={props.onFScreen} />
                <Grid onClick={props.toggleThumb} />
            </div>
            <div>
                {props.playing ? (
                    <Pause onClick={props.togglePlaying} />
                ) : (
                    <Play onClick={props.togglePlaying} />
                )}
                <p>{props.sel + 1}/{props.total}</p>
            </div>
            <div className={styles.right}>
                <button onClick={props.onClose}>
                    <Close />
                </button>
            </div>
        </div>
    )
};

export default Controls;

