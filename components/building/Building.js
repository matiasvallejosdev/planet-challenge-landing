import './Building.css'
import Image from "next/image";

export default function Building(){
    return <div className="build">
        <Image width="300" height="300" src="/images/game/character-sleep.png" alt="Building" className="build__logo" />
        <h3 className="build__title">¡Bajo construcción!</h3>
        <p className="build__description">Nuestro videojuego está en construcción, estamos
            trabajando muy duro para brindarle la mejor experiencia
            con este.
        </p>
        <button className="build__button"><a href="/">Volver al inicio</a></button>
    </div>
}