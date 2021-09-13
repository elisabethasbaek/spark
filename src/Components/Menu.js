import "../Style/Menu.scss";
import {ReactComponent as Logo} from "../Assets/logo.svg";
import { Link } from "@reach/router";

export default function Menu(){
    return(
        <header className="menu">
            <Link to="/" className="menu__logo">
                <Logo className="logo" alt="Logo" />
            </Link>

            <ul className="menu__nav">
                <li><Link className="navLink" to="/">Help</Link></li>
                <li><Link className="navLink" to="/">FAQ</Link></li>
                <li><Link className="navLink" to="/">About</Link></li>
                <li><Link className="navLink" to="/">Preorder</Link></li>
            </ul>
        </header>
    )
}