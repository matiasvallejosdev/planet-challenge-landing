import './BannerElement.css'
import Link from "next/link";

export default function BannerElement({name, handleClick}){
    return (
        <>
            <div className="banner">
                <p className="banner__text">
                    Haz click aqui para iniciar el desafio planeta
                </p>
                <Link href={"/play"}>
                    <button className="banner__button">
                        {name}
                    </button>
                </Link>
            </div>
        </>
    )
}