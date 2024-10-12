import styles from "./Overview.module.css";
import { OverviewProps } from "./Overview.types";

import Fullscreen from '../../icons/fullscreen.svg';
import Grid from '../../icons/grid.svg';
import Close from '../../icons/close.svg';

const Overview: React.FC<OverviewProps> = (props) => {
    return (
        <div className={styles.overview}>
            <div>
                <Fullscreen onClick={props.onFScreen} />
                <Grid onClick={props.toggleThumb} />
                <p>{props.sel + 1}/{props.total}</p>
            </div>
            <button onClick={props.onClose}>
                <Close />
            </button>
        </div>
    )
};

export default Overview;

