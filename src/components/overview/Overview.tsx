import "./Overview.module.css";
import { OverviewProps } from "./Overview.types";

const Overview: React.FC<OverviewProps> = ({sel, total, onClose}) => {
    return (
        <div className="overview">
            <p>{sel + 1}/{total}</p>
            <button onClick={onClose}>X</button>
        </div>
    )
};

export default Overview;

