import React, { useEffect } from 'react'
import style from './Home.module.css'
import { Link } from 'react-router-dom'

// components
import Carousel from '../../UI/Carousel/Carousel'


// images
import firstImg from '../../assets/firstImg.jpg'
import rwd from '../../assets/rwd.jpg'
import pwa from '../../assets/pwa.jpg'
import twa from '../../assets/twa.jpg'
import seo from '../../assets/seo.jpg'
import faas from '../../assets/faas.jpg'
import react from '../../assets/react.jpg'

//svg 
import { ReactComponent as Html } from '../../assets/icon_html.svg'
import { ReactComponent as Css } from '../../assets/icon_css.svg'
import { ReactComponent as Js } from '../../assets/icon_js.svg'
import { ReactComponent as ReactIcon } from '../../assets/icon_react.svg'
import { ReactComponent as Firebase } from '../../assets/icon_firebase.svg'
import { ReactComponent as Ts } from '../../assets/icon_ts.svg'
import { ReactComponent as Phone } from '../../assets/phone.svg'

// images
import beautystudio from '../../assets/realizations/beautystudio.jpg'
import calendar from '../../assets/realizations/calendar.jpg'
import getpol from '../../assets/realizations/getpol.jpg'
import imgToText from '../../assets/realizations/imgToText.jpg'
import jatestuje from '../../assets/realizations/jatestuje.jpg'
import tatarczuk from '../../assets/realizations/tatarczuk.jpg'
import wlaczremont from '../../assets/realizations/wlaczremont.jpg'



const offer = [
    { img: beautystudio, text: "Realizacja studio-www" },
    { img: calendar, text: "Realizacja studio-www" },
    { img: getpol, text: "Realizacja studio-www" },
    { img: imgToText, text: "Realizacja studio-www" },
    { img: jatestuje, text: "Realizacja studio-www" },
    { img: tatarczuk, text: "Realizacja studio-www" },
    { img: wlaczremont, text: "Realizacja studio-www" },
]


const Home = () => {

    // scroll to top when componene render
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main className={style.background}>

            {/* img intro */}
            <section className={style.section}>
                <div className={style.introContainer}>
                    <img className={style.introImg} src={firstImg} alt='strony internetowe' />
                    <div className={style.introBlack}></div>
                    <div className={style.introContainerText}>
                        <h1 className={`${style.introText} ${style.introText1}`}>Strony internetowe</h1>
                        <h2 className={`${style.introText} ${style.introText2}`}>Aplikacje webowe</h2>
                        <h2 className={`${style.introText} ${style.introText3}`}>Portale internetowe</h2>
                    </div>
                    <h1 className={style.headerName}>studio-www.com</h1>
                </div>
            </section>

            {/* section TOOLS */}
            <section className={style.tools}>
                <div className="textContainer">
                    <p className="text1">NARZĘDZIA</p>
                    <h1 className="text2">Czego używam w mojej pracy:</h1>
                </div>
                <div className={style.tools__container}>
                    <div className={style.svg}><Html /></div>
                    <div className={style.svg}><Css /></div>
                    <div className={style.svg}><Js /></div>
                    <div className={style.svg}><ReactIcon /></div>
                    <div className={style.svg}><Ts /></div>
                    <div className={style.svg}><Firebase /></div>
                </div>
            </section>

            {/* section APPROACH */}
            <section className={style.approach}>
                <div className={style.approach__content}>
                    <div className="textContainer">
                        <p className="text1">DLACZEGO WARTO</p>
                        <h1 className="text2 text__white">Co cechuje moje projekty:</h1>
                    </div>
                    <div className={style.approach__container}>
                        <div data-aos="flip-left" className={style.approach__item}>
                            <figure className={style.approach__figure}>
                                <img className={style.img} src={rwd} alt='approach studio-www' />
                            </figure>
                            <p className={style.approach__text}>Wosoka<br /><span className={style.approach__textEmphasize}>jakość</span></p>
                        </div>
                        <div data-aos="flip-left" className={style.approach__item}>
                            <figure className={style.approach__figure}>
                                <img className={style.img} src={rwd} alt='approach studio-www' />
                            </figure>
                            <p className={style.approach__text}>Konkurencyjna<br /><span className={style.approach__textEmphasize}>cena</span></p>
                        </div>
                        <div data-aos="flip-left" className={style.approach__item}>
                            <figure className={style.approach__figure}>
                                <img className={style.img} src={rwd} alt='approach studio-www' />
                            </figure>
                            <p className={style.approach__text}>Nowoczesny<br /><span className={style.approach__textEmphasize}>wygląd</span></p>
                        </div>
                        <div data-aos="flip-left" className={style.approach__item}>
                            <figure className={style.approach__figure}>
                                <img className={style.img} src={rwd} alt='approach studio-www' />
                            </figure>
                            <p className={style.approach__text}>Wykonanie<br /><span className={style.approach__textEmphasize}>na czas</span></p>
                        </div>
                        <div data-aos="flip-left" className={style.approach__item}>
                            <figure className={style.approach__figure}>
                                <img className={style.img} src={rwd} alt='approach studio-www' />
                            </figure>
                            <p className={style.approach__text}>Nowoczesne<br /><span className={style.approach__textEmphasize}>rozwiązania</span></p>
                        </div>
                        <div data-aos="flip-left" className={style.approach__item}>
                            <figure className={style.approach__figure}>
                                <img className={style.img} src={rwd} alt='approach studio-www' />
                            </figure>
                            <p className={style.approach__text}>Indywidualne<br /><span className={style.approach__textEmphasize}>podejście</span></p>
                        </div>
                    </div>
                    <Link to='/about' className={`${style.link} ${style.textWhite}`}>Dowiedz się więcej o mnie<p className={style.linkArrow}></p></Link>
                </div>
            </section>


            {/* section STANDARDS */}
            <section className={style.standards}>
                <div className="textContainer marginLeftRight">
                    <p className="text1">STANDARDY</p>
                    <h1 className="text2">Co mogę Tobie zaoferować:</h1>
                </div>

                <div className={style.standards__item}>
                    <div className={style.standards__content}>
                        <h2 data-aos="zoom-in" className={style.standards__header}><strong className={style.font}>RWD</strong></h2>
                        <h2 className={style.standards__header2}>(<strong>Responsive Web Design</strong>)</h2>
                        <p className={style.standards__text}><strong>RWD</strong> to technika projektowania widoków, dzięki której Twoja strona wygląda dobrze na każdym urządzeniu. Niezależnie czy korzystasz z dużego monitora, smartfonu lub tableta, widok automatycznie dopasuje się do danej rozdzielczości.
                                </p>
                        <a href='https://pl.wikipedia.org/wiki/Responsive_web_design' target='blank' className={style.standards__anchor}>Czytaj więcej...</a>
                    </div>
                    <figure className={style.standards__figure}>
                        <img data-aos="fade-up-left" className={style.img} src={rwd} alt='Responsive Web Design' />
                    </figure>
                </div>

                <div className={style.standards__item}>
                    <div className={style.standards__content}>
                        <h2 data-aos="zoom-in" className={style.standards__header}><strong className={style.font}>PWA</strong></h2>
                        <h2 className={style.standards__header2}>(<strong>Progressive Web Apps</strong>)</h2>
                        <p className={style.standards__text}><strong>PWA</strong> pozwala tak zaprojektować stronę internetową, aby na urządzeniu mobilnym mogła być używana jak aplikacja mobilna. Można ją zainstalować w telefonie i korzystać w trybie offline. Działa na platformie Android i iOS.
                                </p>
                        <a href='https://pl.wikipedia.org/wiki/Progressive_web_app' target='blank' className={style.standards__anchor}>Czytaj więcej...</a>
                    </div>
                    <figure className={style.standards__figure}>
                        <img data-aos="fade-up-left" className={style.img} src={pwa} alt='Progressive Web Apps' />
                    </figure>
                </div>

                <div className={style.standards__item}>
                    <div className={style.standards__content}>
                        <h2 data-aos="zoom-in" className={style.standards__header}><strong className={style.font}>TWA</strong></h2>
                        <h2 className={style.standards__header2}>(<strong>Trusted Web Activities</strong>)</h2>
                        <p className={style.standards__text}><strong>TWA</strong> daje możliwość udostępniania w sklepie Google Play aplikacji PWA. Nie ma potrzeby pisania oddzielnego kodu. Wszelkie aktualizacje są automatyczne i nie wymagają ingerencji w sklepie, dzięki czemu utrzymanie całego projektu jest o wiele tańsze.
                                </p>
                        <a href='https://developers.google.com/web/android/trusted-web-activity' target='blank' className={style.standards__anchor}>Czytaj więcej...</a>
                    </div>
                    <figure className={style.standards__figure}>
                        <img data-aos="fade-up-left" className={style.img} src={twa} alt='Trusted Web Activities' />
                    </figure>
                </div>

                <div className={style.standards__item}>
                    <div className={style.standards__content}>
                        <h2 data-aos="zoom-in" className={style.standards__header}><strong className={style.font}>SEO</strong></h2>
                        <h2 className={style.standards__header2}>(<strong>Search Engine Optimization</strong>)</h2>
                        <p className={style.standards__text}><strong>SEO</strong> to projektowanie zgodne z zasadami optymalizacji pozwalającymi na osiągnięcie wysokich wyników w wyszukiwarkach dla wybranych słów lub fraz kluczowych. Kod strony, jej treść oraz responsywność są dostosowane do aktualnych algorytmów wyszukiwarek w celu poprawienia pozycji danego serwisu na liście wynikowej.
                                </p>
                        <a href='https://pl.wikipedia.org/wiki/Optymalizacja_dla_wyszukiwarek_internetowych' target='blank' className={style.standards__anchor}>Czytaj więcej...</a>
                    </div>
                    <figure className={style.standards__figure}>
                        <img data-aos="fade-up-left" className={style.img} src={seo} alt='Search Engine Optimization' />
                    </figure>
                </div>

                <div className={style.standards__item}>
                    <div className={style.standards__content}>
                        <h2 data-aos="zoom-in" className={style.standards__header}><strong className={style.font}>FaaS</strong></h2>
                        <h2 className={style.standards__header2}>(<strong>Function as a Service</strong>)</h2>
                        <p className={style.standards__text}><strong>FaaS</strong> to usługa chmurowa pozwalająca na bardzo łatwe, szybkie i tanie projektowanie tzw. backendu. Projekty wykonane w oparciu o FaaS, dostarczane przez takich gigantów jak Amazon lub Google, są bardzo tanie w utrzymaniu, w 100% niezawodne i dobrze zabezpieczone.
                                </p>
                        <a href='https://en.wikipedia.org/wiki/Function_as_a_service' target='blank' className={style.standards__anchor}>Czytaj więcej...</a>
                    </div>
                    <figure className={style.standards__figure}>
                        <img data-aos="fade-up-left" className={style.img} src={faas} alt='Function as a Service' />
                    </figure>
                </div>

                <div className={style.standards__item}>
                    <div className={style.standards__content}>
                        <h2 data-aos="zoom-in" className={style.standards__header}><strong className={style.font}>React</strong></h2>
                        <h2 className={style.standards__header2}>(<strong>JavaScript Library</strong>)</h2>
                        <p className={style.standards__text}><strong>React</strong> to javascriptowa biblioteka służąca do tworzenia interfejsów użytkownika. Aktualnie jest to najczęściej używana biblioteka wykorzystywana przy tworzeniu aplikacji webowych, posiadająca ogromne wsparcie i nowoczesne rozwiązania.
                                </p>
                        <a href='https://pl.wikipedia.org/wiki/React.js' target='blank' className={style.standards__anchor}>Czytaj więcej...</a>
                    </div>
                    <figure className={style.standards__figure}>
                        <img data-aos="fade-up-left" className={style.img} src={react} alt='React JavaScript Library' />
                    </figure>
                </div>
                <Link to='/offer' className={`${style.link} ${style.linkLeftPadding}`}>Zobacz pełną ofertę<p className={style.linkArrow}></p></Link>
            </section>


            {/* section REALIZATIONS */}
            <section className={style.realizations}>
                <div className="textContainer">
                    <p className="text1">REALIZACJE</p>
                    <h1 className="text2">Obejrzyj moje realizacje</h1>
                </div>

                <section className={style.carousel}>
                    <Carousel array={offer} />
                </section>

                <Link to='/realizations' className={style.link}>Zobacz moje ostatnie realizacje<p className={style.linkArrow}></p></Link>
            </section>

            {/* section USER */}
            <section className={style.user}>
                <div className={style.user__content}>
                    <figure className={style.user__figure}>
                        <img className={style.img} src={rwd} alt='approach studio-www' />
                    </figure>
                    <div className={style.user__textContainer}>
                        <div className="textContainer">
                            <p className="text1">STREFA KLIENTA</p>
                            <h1 className="text2 text__white">Jesteś już klientem?</h1>
                            <Link to='/login' className={`${style.link} ${style.textWhite}`}>Śledź postępy w projekcie<p className={style.linkArrow}></p></Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* section CONTACT */}
            <section className={style.contact}>
                <div className="textContainer">
                    <p className="text1">KONTAKT</p>
                    <h1 className="text2">Zadzwoń i zapytaj o ofertę</h1>
                </div>
                <p className={style.contact__tel}>
                    <a href='tel:+48795631039' className={style.contact__telIcon}>
                        <Phone />
                    </a>
                        +48 795-631-039
                        </p>
                <Link to='/contact' className={style.link}>Sprawdź inne formy kontaktu<p className={style.linkArrow}></p></Link>
            </section>

        </main >
    )
}

export default Home
