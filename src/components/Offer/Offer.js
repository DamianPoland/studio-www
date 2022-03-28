import React, { useEffect } from 'react'
import style from './Offer.module.css'

// svg
import { ReactComponent as Card } from '../../assets/offer/card.svg'
import { ReactComponent as StandOut } from '../../assets/offer/stand_out.svg'
import { ReactComponent as Devices } from '../../assets/offer/devices.svg'
import { ReactComponent as Domain } from '../../assets/offer/domain.svg'
import { ReactComponent as Presentation } from '../../assets/offer/presentation.svg'
import { ReactComponent as Wallet } from '../../assets/offer/wallet.svg'
import { ReactComponent as Preferences } from '../../assets/offer/preferences.svg'
import { ReactComponent as Mobile } from '../../assets/offer/mobile.svg'
import { ReactComponent as ReactIcon } from '../../assets/offer/react.svg'
import { ReactComponent as Server } from '../../assets/offer/server.svg'



// images
import info1 from '../../assets/offer/info1.jpg'
import info2 from '../../assets/offer/info2.jpg'


const Offer = () => {


    useEffect(() => { window.scrollTo(0, 0) }, [])

    // svg add animations
    useEffect(() => {
        document.querySelector('#cardCardId').classList.add(style.animationUPDown)
        document.querySelector('#standPeopleId').classList.add(style.animationShowHide)
        document.querySelector('#deviceScreen1Id').classList.add(style.animationBackgroundColor)
        document.querySelector('#deviceScreen2Id').classList.add(style.animationBackgroundColor)
        document.querySelector('#deviceScreen3Id').classList.add(style.animationBackgroundColor)
        document.querySelector('#domainId').classList.add(style.animationSkew)
        document.querySelector('#cardIdPresentation').classList.add(style.animationUPDown)
        document.querySelector('#walletId').classList.add(style.animationShowHide)
        document.querySelector('#preferences1Id').classList.add(style.animationBackgroundColorCheck1)
        document.querySelector('#preferences2Id').classList.add(style.animationBackgroundColorCheck2)
        document.querySelector('#preferences3Id').classList.add(style.animationBackgroundColorCheck3)
        document.querySelector('#mobileId').classList.add(style.animationRotate)
        document.querySelector('#reactSign').classList.add(style.animationShowHide)
        document.querySelector('#serverId1').classList.add(style.animationBackgroundColorCheck1)
        document.querySelector('#serverId2').classList.add(style.animationBackgroundColorCheck2)
        document.querySelector('#serverId3').classList.add(style.animationBackgroundColorCheck3)
    }, [])


    return (
        <main className={style.background}>


            {/* section PAGES */}
            <section className={style.pages}>

                <div className="textContainer">
                    <h2 className="text1">OFERTA .01</h2>
                    <h1 className="text2">Strony internetowe:</h1>
                </div>

                <div className={style.pages__container}>
                    <div className={style.pages__item}>
                        <p data-aos="flip-up" className={style.desc}>Strona internetowa to <strong>wizytówka Twojej marki</strong> w Internecie, która pozwala uzyskać informacje o firmie.</p>
                        <div className={style.svg} data-aos="zoom-in">
                            <Card />
                        </div>
                    </div>

                    <div data-aos="customAnimation" className={style.pages__item}>
                        <div className={style.svg} data-aos="zoom-in">
                            <StandOut />
                        </div>
                        <p data-aos="flip-up" className={style.desc}>Własna strona internetowa <strong>jest wyjątkową okazją do wyróżnienia się na tle konkurencji</strong> i zachęcenia klientów do zakupu Twoich produktów lub usług.</p>
                    </div>

                    <div className={style.pages__item}>
                        <p data-aos="flip-up" className={style.desc}>Dzięki projektowaniu RWD (Responsive Web Design) Twoja strona <strong>wygląda dobrze na każdym urządzeniu</strong> niezależnie czy korzystasz z dużego monitora, smartfonu lub tableta.</p>
                        <div className={style.svg} data-aos="zoom-in">
                            <Devices />
                        </div>
                    </div>

                    <div className={style.pages__item}>
                        <div className={style.svg} data-aos="zoom-in">
                            <Domain />
                        </div>
                        <p data-aos="flip-up" className={style.desc}>Jeśli nie wiesz czym jest: domena, hosting, dns itp. to nic nie szkodzi. <strong>Przedstaw swój pomysł, a ja zajmę się resztą.</strong></p>
                    </div>

                    <div className={style.pages__item}>
                        <p data-aos="flip-up" className={style.desc}>SEO to projektowanie zgodne z zasadami optymalizacji pozwalającymi na <strong>osiągnięcie wysokich wyników w wyszukiwarkach.</strong></p>
                        <div className={style.svg} data-aos="zoom-in">
                            <Presentation />
                        </div>
                    </div>

                    <div className={style.pages__item}>
                        <div className={style.svg} data-aos="zoom-in">
                            <Wallet />
                        </div>
                        <p data-aos="flip-up" className={style.desc}>Zapytaj o ofertę - to <strong>nic nie kosztuje.</strong></p>
                    </div>
                </div>
            </section>

            {/* section Info */}
            <section className={style.info}>
                <div className={style.info__container}>
                    <figure className={style.info__figure1}>
                        <img data-aos="fade-up-left" className={style.info__img} src={info1} alt='Web Pages' />
                    </figure>

                    <div className={style.info__textContainer}>
                        <p className={style.info__text1}>Masz pomysł?</p>
                        <p className={style.info__text2}>Ja zajmę się resztą!</p>
                    </div>

                    <figure className={style.info__figure2}>
                        <img data-aos="fade-up-left" className={style.info__img} src={info2} alt='Web Apps' />
                    </figure>
                </div>
            </section>


            {/* section APPS */}
            <section id='web' className={style.apps}>

                <div className="textContainer">
                    <h2 className="text1">OFERTA .02</h2>
                    <h1 className="text2">Aplikacje webowe:</h1>
                </div>

                <div className={style.apps__container}>
                    <div className={style.apps__item}>
                        <p data-aos="flip-up" className={style.desc}>Aplikacje webowe <strong>dla małych, średnich i dużych przedsiębiorstw.</strong> Począwszy od prostych projektów ze stroną logowania, a skończywszy na skomplikowanych z możliwością aktualizacji za pomocą systemów CMS.</p>
                        <div className={style.svg} data-aos="zoom-in">
                            <Preferences />
                        </div>
                    </div>

                    <div className={style.apps__item}>
                        <div className={style.svg} data-aos="zoom-in">
                            <Mobile />
                        </div>
                        <p data-aos="flip-up" className={style.desc}>Dzięki projektowaniu PWA (Progressive Web App) <strong>nie musisz płacić za wykonanie aplikacji mobilnej.</strong> Twoja aplikacja webowa będzie się zachowywać tak jak mobilna, gdy będzie używana na urządzeniu przenośnym.</p>
                    </div>

                    <div className={style.apps__item}>
                        <p data-aos="flip-up" className={style.desc}>React to najczęściej używana biblioteka wykorzystywana przy tworzeniu aplikacji webowych, posiadająca <strong>ogromne wsparcie i nowoczesne rozwiązania.</strong></p>
                        <div className={style.svg} data-aos="zoom-in">
                            <ReactIcon />
                        </div>
                    </div>

                    <div className={style.apps__item}>
                        <div className={style.svg} data-aos="zoom-in">
                            <Server />
                        </div>
                        <p data-aos="flip-up" className={style.desc}>Projekty wykonane w oparciu o rozwiązania chmurowe (np: Firebase) są bardzo <strong>tanie w utrzymaniu, w 100% niezawodne i dobrze zabezpieczone.</strong></p>
                    </div>

                </div>
            </section>
        </main >
    )
}

export default Offer
