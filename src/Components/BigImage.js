import MC from "../Assets/bmw-r80-bobber.jpg";
import "../Style/BigImage.scss";
import {ReactComponent as Light} from "../Assets/doodle_light.svg";
import {ReactComponent as HeatLeft} from "../Assets/doodle_heat_left.svg";
import {ReactComponent as HeatRight} from "../Assets/doodle_heat_right.svg";

export default function BigImage(){
    return(
        <div className="bigImage">
            <Light className="lightSVG" />
            <HeatLeft className="heatLeftSVG" />
            <HeatRight className="heatRightSVG" />

            <img className="mainImg" src={MC} alt="Motorcycle" />
        </div>
    )
}