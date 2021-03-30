import React, { useEffect } from 'react'
import style from './Home.module.css'
import { Link } from 'react-router-dom'

// components
import Carousel from '../../UI/Carousel/Carousel'


// images
import firstImg from '../../assets/firstImg.jpg'
import rwd from '../../assets/rwd.jpg'
import react from '../../assets/react.jpg'

// images 
import html from '../../assets/tools/html.png'
import css from '../../assets/tools/css.png'
import js from '../../assets/tools/js.png'
import reactImg from '../../assets/tools/react.png'
import ts from '../../assets/tools/ts.png'
import firebase from '../../assets/tools/firebase.png'
import seo from '../../assets/seo.png'
import reactJs from '../../assets/reactJs.png'

import beautystudio from '../../assets/realizations/beautystudio.jpg'
import calendar from '../../assets/realizations/calendar.jpg'
import getpol from '../../assets/realizations/getpol.jpg'
import imgToText from '../../assets/realizations/imgToText.jpg'
import jatestuje from '../../assets/realizations/jatestuje.jpg'
import tatarczuk from '../../assets/realizations/tatarczuk.jpg'
import wlaczremont from '../../assets/realizations/wlaczremont.jpg'

//svg
import { ReactComponent as Phone } from '../../assets/phone.svg'


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

                    <figure className={style.tools__figure}>
                        <img className={style.img} src={html} alt='html5' />
                    </figure>
                    <figure className={style.tools__figure}>
                        <img className={style.img} src={css} alt='css3' />
                    </figure>
                    <figure className={style.tools__figure}>
                        <img className={style.img} src={js} alt='java script' />
                    </figure>
                    <figure className={style.tools__figure}>
                        <img className={style.img} src={reactImg} alt='react' />
                    </figure>
                    <figure className={style.tools__figure}>
                        <img className={style.img} src={ts} alt='type script' />
                    </figure>
                    <figure className={style.tools__figure}>
                        <img className={style.img} src={firebase} alt='firebase' />
                    </figure>
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
                            <p className={style.approach__text}>Wykonanie na<br /><span className={style.approach__textEmphasize}>czas</span></p>
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


            {/* section OFFER */}
            <section className={style.offer}>
                <div className="textContainer marginLeftRight">
                    <p className="text1">OFERTA</p>
                    <h1 className="text2">Co mogę Tobie zaoferować:</h1>
                </div>

                <div className={style.offer__item}>
                    <div className={style.offer__content}>
                        <h2 data-aos="zoom-in" className={style.offer__header}><strong className={style.font}>Strony internetowe</strong></h2>
                        <p className={style.offer__text}><strong>Strona internetowa</strong> to wizytówka Twojej marki w Internecie, która pozwala uzyskać informacje o firmie. Jest wyjątkową okazją do wyróżnienia się na tle konkurencji.</p>
                    </div>
                    <figure className={style.offer__figure}>
                        <img data-aos="fade-up-left" className={style.img} src={rwd} alt='Responsive Web Design' />
                        <img className={style.offer__img} src={seo} alt='seo' />
                    </figure>
                </div>

                <div className={style.offer__item}>
                    <div className={style.offer__content}>
                        <h2 data-aos="zoom-in" className={style.offer__header}><strong className={style.font}>Aplikacje webowe</strong></h2>
                        <p className={style.offer__text}><strong>Aplikacje webowe (aplikacje internetowe)</strong> to moźliwość realizacji Twojej idei w internecie. Jeśli masz pomysł jak mógłbyś zarabiać to zgłoś się do mnie a ja wykonam projekt od początku do końca.</p>
                    </div>
                    <figure className={style.offer__figure}>
                        <img data-aos="fade-up-left" className={style.img} src={react} alt='React JavaScript Library' />
                        <img className={style.offer__img} src={reactJs} alt='react js' />

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
