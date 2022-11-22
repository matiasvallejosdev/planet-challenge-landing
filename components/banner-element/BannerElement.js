import './BannerElement.css'
import Link from "next/link";

export default function BannerElement({name, handleClick}){
    return (
        <>
            <div className="banner">
                <p className="banner__text">
                    Haz click aqui para iniciar el desafio planeta
                </p>
                <button className="banner__button">
                    <Link href={"/play"}>
                        {name}
                    </Link>
                </button>
            </div>
        </>
    )
}