'use client'
import './Link.css'
import { useState } from 'react';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function LinkElement({name, route, icon, featured, selected}){
    return (
        <Link scroll={true} href={route} alt={name}  rel="noopener noreferrer" passHref={true} className={`link ${featured ? 'link--featured' : ''} ${selected ? 'link--selected' : ''}` }>
            {
                icon ? <FontAwesomeIcon icon={icon} className='link__icon'/> :  <></>
            }
            <span className="link__text">
                {name}
            </span>
        </Link>
    )
}