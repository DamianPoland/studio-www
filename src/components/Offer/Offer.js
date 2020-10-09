import React from 'react'
import style from './Offer.module.css'


// assets
import intro from '../../assets/intro_blue_cubes.mp4'
import not_ready from '../../assets/not_ready.jpg'
import food from '../../assets/food.png'
import next from '../../assets/next.png'
import careo from '../../assets/careo.png'
import health from '../../assets/health.png'
import crypto from '../../assets/crypto.png'
import design from '../../assets/design.png'
import gym from '../../assets/gym.png'
import mobile from '../../assets/mobile.png'


const Offer = () => {



    return (
        <div className={style.background}>
            <div className={style.container}>

                {/* section Tworzenie stron www */}
                <section className={style.pages}>
                    <div data-aos="flip-up" className={style.pages_content}>
                        <h1 className={style.pages_h1}><strong>Strony www</strong></h1>
                        <p className={style.pages_desc}>Strona www to wizytówka Twojej marki w Internecie, która nie tylko pozwala uzyskać podstawowe informacje o firmie, ale jest również wyjątkową okazją do wyróżnienia się na tle konkurencji i zachęcenia klientów do zakupu Twoich produktów lub usług.</p>
                        <p className={style.pages_desc}>Jeśli nie wiesz czym jest: domena, hosting, dns itp. to nic nie szkodzi. Przedstaw swój pomysł a ja zajmę się resztą. Zapytaj o ofertę - to nic nie kosztuje</p>
                    </div>

                    <h1 className={style.pages_h2}>Obejrzyj przykładowe srony www:</h1>
                    <div className={style.pages_list}>
                        <a data-aos="zoom-in" className={style.pages_a} href='https://studio-exapmle-projects.web.app/food' target='blank'><img className={style.pages_img} src={food} alt='strona internetowa food' />
                        </a>
                        <a data-aos="zoom-in" className={style.pages_a} href='https://studio-exapmle-projects.web.app/next' target='blank'><img className={style.pages_img} src={next} alt='strona internetowa next' />
                        </a>
                        <a data-aos="zoom-in" className={style.pages_a} href='https://studio-exapmle-projects.web.app/mobile' target='blank'><img className={style.pages_img} src={mobile} alt='strona internetowa mobile' />
                        </a>
                        <a data-aos="zoom-in" className={style.pages_a} href='https://studio-exapmle-projects.web.app/health' target='blank'><img className={style.pages_img} src={health} alt='strona internetowa health' />
                        </a>
                        <a data-aos="zoom-in" className={style.pages_a} href='https://studio-exapmle-projects.web.app/crypto' target='blank'><img className={style.pages_img} src={crypto} alt='strona internetowa crypto' />
                        </a>
                        <a data-aos="zoom-in" className={style.pages_a} href='https://studio-exapmle-projects.web.app/gym' target='blank'><img className={style.pages_img} src={gym} alt='strona internetowa gym' />
                        </a>
                        <a data-aos="zoom-in" className={style.pages_a} href='https://studio-exapmle-projects.web.app/design' target='blank'><img className={style.pages_img} src={design} alt='strona internetowa design' />
                        </a>
                        <a data-aos="zoom-in" className={style.pages_a} href='https://studio-exapmle-projects.web.app/careo' target='blank'><img className={style.pages_img} src={careo} alt='strona internetowa careo' />
                        </a>
                    </div>
                </section>

                <hr />
                {/* movie */}

                <video className={style.video} src={intro} autoPlay muted controls alt='intro strony internetowe i aplikacje webowe' />

                <hr />

                {/* section Tworzenie aplikacji webowych */}
                <section id='web' className={style.pages}>
                    <div data-aos="flip-up" className={style.pages_content}>
                        <h1 className={style.pages_h1}><strong>Aplikacje web</strong></h1>
                        <p className={style.pages_desc}>Aplikacje webowe są dostosowane konkretnie do twoich potrzeb. Począwszy od prostych aplikacji ze stroną logowania i wykonujących podstawowe obliczenia a skończywszy na skomplikowanych i rozbudowanych z możliwością aktualicji za pomocą systemów CMS.</p>
                        <p className={style.pages_desc}>Dzięki projektowaniu PWA (Progressive Web App) nie musisz płacić za wykonanie aplikacji mobilnej. Twoja aplikacja webowa będzie się zachowywać tak jak mobilna gdy bedzie używana na urządzeniu przenośnym. </p>
                    </div>

                    <h1 className={style.pages_h2}>Obejrzyj przykładowe elementy aplikacji web:</h1>
                    <div className={style.pages_list}>
                        <a data-aos="zoom-in" className={style.pages_a} href='#web'><img className={style.pages_img} src={not_ready} alt='applikacja webowa' />
                        </a>
                        <a data-aos="zoom-in" className={style.pages_a} href='#web'><img className={style.pages_img} src={not_ready} alt='applikacja webowa' />
                        </a>
                        <a data-aos="zoom-in" className={style.pages_a} href='#web'><img className={style.pages_img} src={not_ready} alt='applikacja webowa' />
                        </a>
                        <a data-aos="zoom-in" className={style.pages_a} href='#web'><img className={style.pages_img} src={not_ready} alt='applikacja webowa' />
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Offer
