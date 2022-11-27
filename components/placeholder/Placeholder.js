import './Placeholder.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Placeholder({url}){
    return(
        <Link href={url} className="placeholder" target="_blank">
            {/*<FontAwesomeIcon icon="fa-solid fa-heart" className="placeholder__icon"/>*/}
        </Link>
    )
}