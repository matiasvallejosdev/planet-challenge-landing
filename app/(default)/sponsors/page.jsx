import './sponsors.css'
import Link from "next/link";
import Image from "next/image";


export default function SponsorsPage(){
    return (
        <div className="container container__sponsors">
            <div className="sponsors">
                <div className="sponsors__head">
                    <h2 className="sponsors__title">¡Gracias a esta gente esto es posible!</h2>
                    <p className="sponsors__description">
                        Los patrocinadores nos permiten mantener el proyecto activo, mejorarlo y dejarlo completamente gratis.
                    </p>
                </div>
                <div className="sponsors__elem sponsors__elem--one" style={{backgroundColor: '#009ddb'}}>
                    <Link href="https://ies21.edu.ar/" passHref target="_blank" className="sponsors__link">
                        <Image width="400" height="400" src="/images/sponsors/logo-ies.png" alt="" className="sponsors__image"/>
                    </Link>
                </div>
                <div className="sponsors__elem sponsors__elem--two" style={{backgroundColor: '#208344'}}>
                    <Link href="https://manos-verdes.org/" passHref target="_blank" className="sponsors__link">
                        <Image width="400" height="400" src="/images/sponsors/logo-manos-verdes.png" alt="" className="sponsors__image"/>
                    </Link>
                </div>
                {/*<div className="sponsors__elem sponsors__elem--three" style={{backgroundColor: '#000'}}>*/}
                {/*    <Link href="/" passHref target="_blank" className="sponsors__link">*/}
                {/*        <Image width="400" height="400" src="/images/sponsors/logo-manos-verdes.png" alt="" className="sponsors__image"/>*/}
                {/*    </Link>*/}
                {/*</div>*/}
                {/*<div className="sponsors__elem sponsors__elem--four" style={{backgroundColor: '#000'}}>*/}
                {/*    <Link href="/" passHref target="_blank" className="sponsors__link">*/}
                {/*        <Image width="400" height="400" src="/images/sponsors/logo-manos-verdes.png" alt="" className="sponsors__image"/>*/}
                {/*    </Link>*/}
                {/*</div>*/}
                {/*<div className="sponsors__elem sponsors__elem--five" style={{backgroundColor: '#000'}}>*/}
                {/*    <Link href="/" passHref target="_blank" className="sponsors__link">*/}
                {/*        <Image width="400" height="400" src="/images/sponsors/logo-manos-verdes.png" alt="" className="sponsors__image"/>*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}