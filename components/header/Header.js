import './Header.css'
import Navbar from "../navbar/Navbar";
import Image from "next/image";
import LinkElement from "../link/LinkElement";

export default function Header(){
    return (
        <div>
            <div className="container">
               <header className="header">
                    <div className="header__elem header__elem--left">
                        <Image src='/logo.png' alt='logo-brand' width='50' height='50' className="header__icon"/>
                    </div>
                   <div className="header__elem">
                        <Navbar />
                   </div>
                   <div className="header__elem header__elem--right">
                       <LinkElement name='Jugar ahora' route='/play' featured={true}/>
                   </div>
               </header>
            </div>
        </div>
    )
}