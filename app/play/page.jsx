import './play.css'
import Image from "next/image";
import Building from "../../components/building/Building";

export default function PlayPage(){
    return(
        <div className="container container__play">
            <Building />
        </div>
    )
}