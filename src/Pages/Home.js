import ArticleText from "../Components/ArticleText";
import AsSeenIn from "../Components/AsSeenIn";
import BigImage from "../Components/BigImage";
import "../Style/Home.scss";

export default function Home(){
    return(
        <main className="home">
            <article className="home__article">
                <BigImage />
                <ArticleText />
            </article>

            <AsSeenIn />
        </main>
    )
}