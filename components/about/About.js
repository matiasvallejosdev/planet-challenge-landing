import './About.css'
import Image from "next/image";

export default function About(){
    return(
        <>
            <div className="about">
                <div className="about__item">
                    <div className="about__banner">
                        <Image className="about__game" src="/placeholder.jpg" alt="" width="500" height="380"/>
                    </div>
                    <div className="about__head">
                        <h2 className="about__title">
                            ¡Aprende sobre el cambio climatico!
                        </h2>
                        <p className="about__text">
                            La educación es un elemento esencial en la promoción de la acción en favor del clima. Esta ayuda a que las personas comprendan y hagan frente a las repercusiones de la crisis climática.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}