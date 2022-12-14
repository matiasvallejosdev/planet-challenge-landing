import './Partners.css'
import Link from "next/link";
import Image from "next/image";

const partners = [
    { name: "IES21", imageUrl: '/images/partners/logo1.png', url: 'https://ies21.edu.ar/', width: 110, height: 100},
    // { name: "Education ambiental", imageUrl: '/images/partners/logo2.png', url: '', width: 250, height: 55},
    { name: "Manos Verdes", imageUrl: '/images/partners/logo3.png', url: 'https://manos-verdes.org/', width: 190, height: 55},
]

export default function Partners(){
    return(
        <div className="partners">
            <p className="partners__text">Este proyecto es posible gracias a...</p>
            <div className="partners__container">
                {
                    partners.map(partner => {
                        return <div key={partner.name} className="partners__item">
                            <Link className="partners__link" href={partner.url} target='_blank'>
                                <Image className="partners__img" src={partner.imageUrl} alt={partner.name} width={partner.width} height={partner.height}/>
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    )
}