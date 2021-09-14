import "../Style/ArticleText.scss";
import PreorderButton from "./PreorderButton";
import {ReactComponent as Arrow} from "../Assets/doodle_arrow.svg";

export default function ArticleText(){
    return(
        <section className="articleText">
            <h1 className="articleText__heading">The ultimate<br/>modern battery for<br/>any motorcycle</h1>

            <p className="articleText__text">Whether you're running a vintage, building your perfect café racer or just making your daily motorcycle as reliable as it can be.</p>

            <div className="articleText__wrapper">
                <p className="text">We got you covered from <strong>&euro;99</strong></p>

                <PreorderButton text="Preorder" />

                <Arrow alt="arrow pointing to button" className="arrow" />
            </div>
        </section>
    )
}