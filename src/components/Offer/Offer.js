import React, { useEffect } from 'react'
import style from './Offer.module.css'


// assets
import intro from '../../assets/intro_blue_cubes.mp4'
import not_ready from '../../assets/not_ready.jpg'
import wolfmobileapps from '../../assets/wolfmobileapps.png'
import food from '../../assets/food.png'
import next from '../../assets/next.png'
import careo from '../../assets/careo.png'
import health from '../../assets/health.png'
import crypto from '../../assets/crypto.png'
import design from '../../assets/design.png'
import mobile from '../../assets/mobile.png'

// svg
import { ReactComponent as Card } from '../../assets/card.svg'
import { ReactComponent as StandOut } from '../../assets/stand_out.svg'
import { ReactComponent as Devices } from '../../assets/devices.svg'
import { ReactComponent as Domain } from '../../assets/domain.svg'
import { ReactComponent as Wallet } from '../../assets/wallet.svg'
import { ReactComponent as Preferences } from '../../assets/preferences.svg'
import { ReactComponent as Mobile } from '../../assets/mobile.svg'


const Offer = () => {

    // scroll to top when componene render
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className={style.background}>
            <div className={style.container}>

                {/* movie */}
                <div className={style.video_container}>
                    <video className={style.video} src={intro} muted autoPlay controls playsInline alt='intro strony internetowe i aplikacje webowe' />
                </div>

                {/* section Tworzenie stron www */}
                <section className={style.pages}>

                    <div data-aos="flip-up" className={style.pages_title}>
                        <div className={style.pages_title_tech}>
                            <h1 className={style.pages_title_H1}>Strony internetowe</h1>
                        </div>
                    </div>

                    <div className={style.pages_desc}>
                        <div className={style.pages_desc_content}>
                            <p data-aos="flip-up" className={style.pages_desc_P}>Strona internetowa to wizytówka Twojej marki w Internecie, która pozwala uzyskać informacje o firmie.</p>
                            <div className={style.pages_desc_svg} data-aos="zoom-in">
                                <Card />
                            </div>
                        </div>

                        <div data-aos="customAnimation" className={style.pages_desc_content}>
                            <div className={style.pages_desc_svg} data-aos="zoom-in">
                                <StandOut />
                            </div>
                            <p data-aos="flip-up" className={style.pages_desc_P}>Własna strona internetowa jest wyjątkową okazją do wyróżnienia się na tle konkurencji i zachęcenia klientów do zakupu Twoich produktów lub usług.</p>
                        </div>

                        <div className={style.pages_desc_content}>
                            <p data-aos="flip-up" className={style.pages_desc_P}>Dzięki projektowaniu RWD (Responsive Web Design) Twoja strona wygląda dobrze na każdym urządzeniu niezależnie czy kożystasz z dużego monitora, smartfonu lub tableta.</p>
                            <div className={style.pages_desc_svg} data-aos="zoom-in">
                                <Devices />
                            </div>
                        </div>

                        <div className={style.pages_desc_content}>
                            <div className={style.pages_desc_svg} data-aos="zoom-in">
                                <Domain />
                            </div>
                            <p data-aos="flip-up" className={style.pages_desc_P}>Jeśli nie wiesz czym jest: domena, hosting, dns itp. to nic nie szkodzi. Przedstaw swój pomysł a ja zajmę się resztą.</p>
                        </div>

                        <div className={style.pages_desc_content}>
                            <p data-aos="flip-up" className={style.pages_desc_P}>Zapytaj o ofertę - to nic nie kosztuje.</p>
                            <div className={style.pages_desc_svg} data-aos="zoom-in">
                                <Wallet />
                            </div>
                        </div>
                    </div>

                    <h1 className={style.pages_h2}>Obejrzyj przykładowe srony www:</h1>
                    <div className={style.pages_list}>
                        <a data-aos="zoom-in" className={style.pages_a} href='https://wolfmobileapps.com/pl/' target='blank'><img className={style.pages_img} src={wolfmobileapps} alt='strona internetowa wolfmobileapps' />
                        </a>
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
                        <a data-aos="zoom-in" className={style.pages_a} href='https://studio-exapmle-projects.web.app/design' target='blank'><img className={style.pages_img} src={design} alt='strona internetowa design' />
                        </a>
                        <a data-aos="zoom-in" className={style.pages_a} href='https://studio-exapmle-projects.web.app/careo' target='blank'><img className={style.pages_img} src={careo} alt='strona internetowa careo' />
                        </a>
                        {/* <a data-aos="zoom-in" className={style.pages_a} href='https://studio-exapmle-projects.web.app/gym' target='blank'><img className={style.pages_img} src={gym} alt='strona internetowa gym' />
                        </a> */}
                    </div>
                </section>

                <hr />

                {/* section Tworzenie aplikacji webowych */}
                <section id='web' className={style.pages}>

                    <div data-aos="flip-up" className={style.pages_title}>
                        <div className={style.pages_title_tech}>
                            <h1 className={style.pages_title_H1}>Aplikacje webowe</h1>
                        </div>
                    </div>

                    <div className={style.pages_desc}>
                        <div className={style.pages_desc_content}>
                            <p data-aos="flip-up" className={style.pages_desc_P}>Aplikacje webowe są dostosowane konkretnie do twoich potrzeb. Począwszy od prostych aplikacji ze stroną logowania a skończywszy na skomplikowanych z możliwością aktualicji za pomocą systemów CMS.</p>
                            <div className={style.pages_desc_svg} data-aos="zoom-in">
                                <Preferences />
                            </div>
                        </div>
                        <div className={style.pages_desc_content}>
                            <div className={style.pages_desc_svg} data-aos="zoom-in">
                                <Mobile />
                            </div>
                            <p data-aos="flip-up" className={style.pages_desc_P}>Dzięki projektowaniu PWA (Progressive Web App) nie musisz płacić za wykonanie aplikacji mobilnej. Twoja aplikacja webowa będzie się zachowywać tak jak mobilna gdy bedzie używana na urządzeniu przenośnym.</p>
                        </div>
                    </div>

                    <h1 className={style.pages_h2}>Obejrzyj przykładowe elementy aplikacji webowych:</h1>
                    <div className={style.pages_list}>
                        <a data-aos="zoom-in" className={style.pages_a} style={{ scrollBehavior: 'smooth' }} href='#web'><img className={style.pages_img} src={not_ready} alt='applikacja webowa' />
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


