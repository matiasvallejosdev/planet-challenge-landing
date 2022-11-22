import './page.css'
import Social from "../components/social/Social";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faHandHoldingMedical, faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import BannerElement from "../components/banner-element/BannerElement";
import Typewriter from "../components/typewriter/Typewriter";
import Header from "../components/header/Header";
import Partners from "../components/partners/Partners";

library.add(faLinkedin)
library.add(faInstagram)
library.add(faFacebook)
library.add(faGlobe)
library.add(faHandHoldingMedical)
library.add(faHeart)

const social = [{'name': 'Instagram',
    'icon': 'fa-brands fa-instagram',
    'url': 'https://www.instagram.com/manosverdes_arg/'
}, {'name': 'Linkedin',
    'icon': 'fa-brands fa-linkedin',
    'url': 'https://www.linkedin.com/company/fundacion-manos-verdes/'
}, {'name': 'Facebook',
    'icon': 'fa-brands fa-facebook',
    'url': 'https://www.facebook.com/fundacionmanosverdes'
}, {'name': 'Page',
    'icon': 'fa-solid fa-globe',
    'url': 'https://manos-verdes.org/'
}
]

const typeWriter = [
    "#1 Videojuego del cambio climatico",
    "#1 Videojuego educativo ambiental"
]

export default function Home() {
    const date = new Date().getFullYear()
    return (
      <>
          <Header />
          <div className="hero container">
              <div className="hero__head">
                  <div className="vercel">
                      <h1 style= {{
                          "--color": "var(--brand-color)"
                      }}>
                          Desafio
                      </h1>
                      <h1 style= {{
                          "--color": "var(--brand-alternative-color)"
                      }}>
                          Planeta
                      </h1>
                  </div>
                  <Typewriter textArray={typeWriter}/>
                  <BannerElement name="¡Empezar a jugar!" />
                  <div className="foot">
                      <Social social={social}/>
                      <p className="foot__text">© {date} desafioplaneta.com. Todos los derechos reservados.</p>
                      <Link href='https://github.com/matiasvallejosdev/planet-challenge-game' className='foot__text foot__text--small'>
                          v.1.0.0
                      </Link>
                  </div>
              </div>
          </div>
          <Partners />
      </>
  )
}
