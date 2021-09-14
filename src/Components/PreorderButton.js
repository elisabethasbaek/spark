import "../Style/PreorderButton.scss";
import { Link } from "@reach/router";

export default function PreorderButton({text}){
    return(
        <Link to="/" className="preorderButton">{text}</Link>
    )
}