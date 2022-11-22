import './Social.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Social({social}){
    return(
        <nav className="social">
            <ul className="social__list">
                {
                    social.map((social) => {
                        return(
                            <li key={social.name} className="social__elem">
                                <Link href={social.url} alt={social.name} target="_blank">
                                    <FontAwesomeIcon icon={social.icon} size='lg'/>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}