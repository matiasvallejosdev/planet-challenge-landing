import Marquee from "../../components/marquee/Marquee";

const messages = [
    "El clima esta cambiando nosotros también deberíamos.",
    "La herramienta más eficiente para combatir el cambio climático eres tú.",
    "No hay PLANeta B",
    "Solo tenemos un planeta. ...",
    "La tierra es más valiosa que el dinero",
    "A veces, aprender sobre el cambio climatico puede resultar aburrido, pero que tal si jugamos, nos divertimos y aprendemos sobre nuestro planeta.",
]

export default function Layout({children}){
    return<>
        <div className="container">
            <Marquee messages={messages}/>
            {children}
        </div>
    </>
}