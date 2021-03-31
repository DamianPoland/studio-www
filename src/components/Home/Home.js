import React, { useEffect } from 'react'
import style from './Home.module.css'
import { Link } from 'react-router-dom'

// components
import Carousel from '../../UI/Carousel/Carousel'

//video
import start_video from '../../assets/home/home_start_video.mp4'

// images
import html from '../../assets/tools/html.png'
import css from '../../assets/tools/css.png'
import js from '../../assets/tools/js.png'
import reactImg from '../../assets/tools/react.png'
import ts from '../../assets/tools/ts.png'
import firebase from '../../assets/tools/firebase.png'

import quality from '../../assets/home/quality.jpg'
import price from '../../assets/home/price.jpg'
import apperance from '../../assets/home/apperance.jpg'
import time from '../../assets/home/time.jpg'
import solutions from '../../assets/home/solutions.jpg'
import individual from '../../assets/home/individual.jpg'




import sitesImg from '../../assets/home/laptop2.png'
import appsImg from '../../assets/home/laptop.png'
import seo from '../../assets/home/seo.png'
import reactJs from '../../assets/home/reactJs.png'

import beautystudio from '../../assets/realizations/beautystudio.jpg'
import calendar from '../../assets/realizations/calendar.jpg'
import getpol from '../../assets/realizations/getpol.jpg'
import imgToText from '../../assets/realizations/imgToText.jpg'
import jatestuje from '../../assets/realizations/jatestuje.jpg'
import tatarczuk from '../../assets/realizations/tatarczuk.jpg'
import wlaczremont from '../../assets/realizations/wlaczremont.jpg'

import userImg from '../../assets/home/user.png'

//svg
import { ReactComponent as Phone } from '../../assets/icons/phone__home.svg'


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

    useEffect(() => { window.scrollTo(0, 0) }, [])

    return (
        <main className={style.background}>

            {/* section START */}
            <section className={style.start}>
                <div className={style.start__videoContainer}>
                    <video className={style.start__video} src={start_video} autoPlay loop muted playsInline alt="intro"
                        onLoadedData={() => console.log('video onLoadedData')}
                        onCanPlay={() => console.log('video onCanPlay')} />
                    <div className={style.start__videoFilter}></div>
                </div>
                <div className={style.start__container}>
                    <h1 className={`${style.start__text} ${style.start__text1}`}>Strony internetowe</h1>
                    <h2 className={`${style.start__text} ${style.start__text2}`}>Aplikacje webowe</h2>
                    <h2 className={`${style.start__text} ${style.start__text3}`}>Portale internetowe</h2>
                </div>
                <i className={style.start__arrow} />
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
                                <img className={style.img} src={quality} alt='approach studio-www' />
                            </figure>
                            <p className={style.approach__text}>Wosoka<br /><span className={style.approach__textEmphasize}>jakość</span></p>
                        </div>
                        <div data-aos="flip-left" className={style.approach__item}>
                            <figure className={style.approach__figure}>
                                <img className={style.img} src={price} alt='approach studio-www' />
                            </figure>
                            <p className={style.approach__text}>Konkurencyjna<br /><span className={style.approach__textEmphasize}>cena</span></p>
                        </div>
                        <div data-aos="flip-left" className={style.approach__item}>
                            <figure className={style.approach__figure}>
                                <img className={style.img} src={apperance} alt='approach studio-www' />
                            </figure>
                            <p className={style.approach__text}>Nowoczesny<br /><span className={style.approach__textEmphasize}>wygląd</span></p>
                        </div>
                        <div data-aos="flip-left" className={style.approach__item}>
                            <figure className={style.approach__figure}>
                                <img className={style.img} src={time} alt='approach studio-www' />
                            </figure>
                            <p className={style.approach__text}>Wykonanie na<br /><span className={style.approach__textEmphasize}>czas</span></p>
                        </div>
                        <div data-aos="flip-left" className={style.approach__item}>
                            <figure className={style.approach__figure}>
                                <img className={style.img} src={solutions} alt='approach studio-www' />
                            </figure>
                            <p className={style.approach__text}>Sprawdzone<br /><span className={style.approach__textEmphasize}>rozwiązania</span></p>
                        </div>
                        <div data-aos="flip-left" className={style.approach__item}>
                            <figure className={style.approach__figure}>
                                <img className={style.img} src={individual} alt='approach studio-www' />
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
                    <figure className={style.offer__figure}>
                        <img data-aos="fade-up-left" className={style.img} src={appsImg} alt='Responsive Web Design' />
                        <img className={style.offer__img} src={seo} alt='seo' />
                    </figure>
                    <div className={style.offer__content}>
                        <h2 data-aos="zoom-in" className={style.offer__header}><strong className={style.font}>Strony internetowe</strong></h2>
                        <p className={style.offer__text}><strong>Strona internetowa</strong> to wizytówka Twojej marki w Internecie, która pozwala uzyskać informacje o firmie. Jest wyjątkową okazją do wyróżnienia się na tle konkurencji.</p>
                    </div>
                </div>

                <div className={style.offer__item}>
                    <div className={style.offer__content}>
                        <h2 data-aos="zoom-in" className={style.offer__header}><strong className={style.font}>Aplikacje webowe</strong></h2>
                        <p className={style.offer__text}><strong>Aplikacje webowe (aplikacje internetowe)</strong> to moźliwość realizacji Twojej idei w internecie. Jeśli masz pomysł to zgłoś się do mnie a ja wykonam projekt od początku do końca.</p>
                    </div>
                    <figure className={style.offer__figure}>
                        <img data-aos="fade-up-left" className={style.img} src={sitesImg} alt='React JavaScript Library' />
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
                <div className={style.user__container}>
                    <div className={style.user__textContainer}>
                        <div className="textContainer">
                            <p className="text1">STREFA KLIENTA</p>
                            <h1 className="text2 text__white">Jesteś już klientem?</h1>
                            <Link to='/login' className={`${style.link} ${style.textWhite}`}>Śledź postępy w projekcie<p className={style.linkArrow}></p></Link>
                        </div>
                    </div>
                </div>
                <figure className={style.user__figure}>
                    <img className={style.user__img} src={userImg} alt='userImg studio-www' />
                </figure>
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
