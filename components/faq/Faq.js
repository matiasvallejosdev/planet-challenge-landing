import './Faq.css'

const faq = [{
    question: '¿Porque un videojuego educativo?',
    answer: "Los videojuegos facilitan el aprendizaje de los contenidos educativos y el desarrollo de habilidades cognitivas."
},{
    question: '¿Es gratis?',
    answer: "Sí, jugar a Desafio Planeta es totalmente gratis. Gracias a nuestros sponsors es posible mantener actualizado el videojuego."
},{
    question: '¿Puedo colaborar con el proyecto?',
    answer: "Actualmente el código fuente no está disponible. Es un proyecto que he hecho en muy poco tiempo y todavía está en fase de desarrollo. Intentaré abrir el código fuente en el futuro. Mientras, si encuentras un error, puedes dejar una issue en el repositorio."
},{
    question: 'Quiero llevar el videojuego a mi escuela ¿Como hago?',
    answer: "El videojuego esta pensado para ser implementado en cada escuela y organización. Puedes comunicarte en cualquiera de nuestras redes!"
}]

export default function Faq(){
    return(
        <>
            <h4 className="section__title">Preguntas frecuentes</h4>
            <div className="faq">
                {
                    faq.map(({question, answer}) => {
                        return (
                            <div key={question} className="faq__elem">
                                <p className="faq__question">{question}</p>
                                <p className="faq__text">{answer}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}