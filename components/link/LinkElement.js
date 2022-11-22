'use client'
import './Link.css'
import { useState } from 'react';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function LinkElement({name, route, icon, featured, selected}){
    const [state, setState] = useState(selected);
    return (
        <Link onClick={() => setState(!state)} href={route} alt={name} passHref className={`link ${featured ? 'link--featured' : ''} ${state ? 'link--selected' : ''}` }>
            {
                icon ? <FontAwesomeIcon icon={icon} className='link__icon'/> :  <></>
            }
            <span className="link__text">
                {name}
            </span>
        </Link>
    )
}