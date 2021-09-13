import AsSeenIn from "../Components/AsSeenIn";
import Menu from "../Components/Menu";
import "../Style/Home.scss";

export default function Home(){
    return(
        <main className="home">
            <Menu />
            <AsSeenIn />
        </main>
    )
}