'use client'
import './Navbar.css'
import LinkElement from "../link/LinkElement";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faGem, faChessRook, faFaceGrinWide } from "@fortawesome/free-regular-svg-icons";

library.add(faChessRook)
library.add(faGem)
library.add(faStar)
library.add(faFaceGrinWide)

const navigation = [{
    'name': 'Inicio',
    'route': '/',
    'featured': false,
    'icon': 'fa-regular fa-chess-rook',
}, {
    'name': 'Sponsors',
    'route': '/sponsors',
    'featured': false,
    'icon': 'fa-regular fa-star',
}, {
    'name': 'Faq',
    'route': '#faq',
    'featured': false,
    'icon': 'fa-regular fa-face-grin-wide',
}]

export default function Navbar(){
    return(
        <nav className="navbar">
            <ul className="navbar__list">
                {
                    navigation.map(({name, route, featured, icon, selected}) => {
                        return <li key={name} className="navbar__elem">
                            <LinkElement name={name} route={route} featured={featured} icon={icon} selected={selected}/>
                        </li>
                    })
                }
            </ul>
        </nav>
    )
}