import './MeFooter.css'
import Link from "next/link";
import Image from "next/image";

export default function MeFooter(){
    return(
        <div className="me">
            <div className="me__brand">
                <Image src="/brand.png" alt="logo-desafio-planeta" width="180" height="32"/>
                <div className="me__personal">
                    <p className="me__text">es una iniciativa de</p>
                    <Link className="me__go" target="_blank" passHref href="https://www.linkedin.com/in/matiasvallejos/">
                        Matias Vallejos
                    </Link>
                </div>
            </div>
            <nav className="me__nav">
                <ul>
                    <li>
                        <Link className="me__link" target="_blank" passHref href="https://twitter.com/mativallejosdev">
                            Twitter
                        </Link>
                        <p className="me__bullet">•</p>
                    </li>
                    <li>
                        <Link className="me__link" target="_blank" passHref href="https://www.linkedin.com/in/matiasvallejos/">
                            Linkedin
                        </Link>
                        <p className="me__bullet">•</p>
                    </li>
                    <li>
                        <Link className="me__link" target="_blank" passHref href="https://github.com/matiasvallejosdev/planet-challenge-game/issues/new">
                            Enviar sugerencia
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}