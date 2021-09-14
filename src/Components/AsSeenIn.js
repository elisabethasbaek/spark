import "../Style/AsSeenIn.scss";
import BikeExif from "../Assets/media_bikeexif.png";
import ChopCult from "../Assets/media_chopcult.png";
import PipeBurn from "../Assets/media_pipeburn.png";
import Greasy from "../Assets/Greasy.png";

export default function AsSeenIn(){
    var imgArray = [BikeExif, PipeBurn, Greasy, ChopCult];

    return(
        <article className="asSeenIn">
            <p className="asSeenIn__heading">As seen in</p>

            <section className="asSeenIn__images">
                {imgArray.map(function(image){
                    return(
                        <img src={image} alt="Logo" />
                    )
                })}
            </section>
        </article>
    )
}