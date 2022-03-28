import React, { useState, useEffect } from 'react'
import style from './Home.module.css'
import AOS from 'aos'
import { Link } from 'react-router-dom'

// components
import TouchSlider from "../../UI/TouchSlider/HomeTouchSlider"
import Spinner from '../../UI/Spinner/Spinner'

//video
import start_video from '../../assets/home/home_start_video.mp4'

// images
import logo from '../../assets/nav/logo192.png'

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

import sitesImg from '../../assets/home/desktop.png'
import appsImg from '../../assets/home/laptop.png'
import seo from '../../assets/home/seo.png'
import reactJs from '../../assets/home/reactJs.png'

import beautystudio from '../../assets/realizations/beautystudio.jpg'
import ketozocha from '../../assets/realizations/ketozocha.jpg'
import calendar from '../../assets/realizations/calendar.jpg'
import getpol from '../../assets/realizations/getpol.jpg'
import imgToText from '../../assets/realizations/imgToText.jpg'
import jatestuje from '../../assets/realizations/jatestuje.jpg'
import tatarczuk from '../../assets/realizations/tatarczuk.jpg'
import wlaczremont from '../../assets/realizations/wlaczremont.jpg'

import desktopEmpty from '../../assets/home/desktopEmpty.png'

import userImg from '../../assets/home/user.png'

import contactImg from '../../assets/home/contact.png'

//svg
import { ReactComponent as Phone } from '../../assets/icons/phone__home.svg'
import { ReactComponent as Mark } from '../../assets/icons/mark__OK.svg'


const offer = [
    <img className={style.img} src={ketozocha} alt={`portal internetowy ${ketozocha}`} />,
    <img className={style.img} src={beautystudio} alt={`strona internetowa ${beautystudio}`} />,
    <img className={style.img} src={calendar} alt={`aplikacja internetowa ${calendar}`} />,
    <img className={style.img} src={getpol} alt={`strona internetowa ${getpol}`} />,
    <img className={style.img} src={imgToText} alt={`aplikacja internetowa ${imgToText}`} />,
    <img className={style.img} src={jatestuje} alt={`aplikacja internetowa ${jatestuje}`} />,
    <img className={style.img} src={tatarczuk} alt={`strona internetowa ${tatarczuk}`} />,
    <img className={style.img} src={wlaczremont} alt={`strona internetowa ${wlaczremont}`} />,
]


const Home = () => {


    useEffect(() => { window.scrollTo(0, 0) }, [])


    const [isVideoLoaded, setIsVideoLoaded] = useState(false)


    // AOS reload after load video to not show animations before load screen
    useEffect(() => { AOS.refresh() }, [isVideoLoaded])


    // full screen in mobile first section (cut browser search bar on mobile) + css code
    useEffect(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`)
    }, [])


    // onScroll to parallax for section start
    useEffect(() => {

        const startContainer = document.querySelector("#start__contaner")

        if (!startContainer) { return }

        // event listener funcion
        const startScrool = () => {

            let scrollPosition = window.pageYOffset

            // stop when > 700 => startContainer not visible
            if (scrollPosition > 700) { return }

            let scale = (1 - scrollPosition * 0.0015)
            startContainer.style.transform = `translateY(${scrollPosition * -0.5}px) scale(${scale > 0 ? scale : 0})`
        }

        // add/remove event listener
        window.addEventListener('scroll', startScrool)
        return () => {
            window.removeEventListener('scroll', startScrool)
        }
    }, [isVideoLoaded])


    return (
        <main className={style.background}>

            {/* section START */}
            <section className={style.start}>
                <div className={style.start__videoContainer}>
                    <video className={style.start__video} src={start_video} autoPlay loop muted playsInline alt="intro" onCanPlayThrough={() => setIsVideoLoaded(true)} />
                    <div className={style.start__videoFilter}></div>
                </div>
                {!isVideoLoaded
                    ? <Spinner />
                    : <div className={style.start__container}>
                        <div id="start__contaner" className={style.start__containerText}>
                            <div className={style.start__titleContainer}>
                                <img className={style.start__logo} src={logo} alt="logo studio-www" />
                                <h2 className={style.start__title}><span className={style.textWhite}>studio-</span>www</h2>
                            </div>
                            <h1 className={`${style.start__text} ${style.start__text1}`}>Strony internetowe</h1>
                            <h1 className={`${style.start__text} ${style.start__text2}`}>Aplikacje webowe</h1>
                            <h1 className={`${style.start__text} ${style.start__text3}`}>Portale internetowe</h1>
                        </div>
                    </div>}
                <i className={style.start__arrow} />
            </section>

            {/* section TOOLS */}
            <section className={style.tools}>
                <div className="textContainer">
                    <h2 className="text1">NARZĘDZIA</h2>
                    <p className="text2">Czego używam w mojej pracy?</p>
                </div>
                <div className={style.tools__container}>
                    <figure data-aos="zoom-in" className={style.tools__figure}>
                        <img className={style.img} src={html} alt='html5' />
                    </figure>
                    <figure data-aos="zoom-in" className={style.tools__figure}>
                        <img className={style.img} src={css} alt='css3' />
                    </figure>
                    <figure data-aos="zoom-in" className={style.tools__figure}>
                        <img className={style.img} src={js} alt='java script' />
                    </figure>
                    <figure data-aos="zoom-in" className={style.tools__figure}>
                        <img className={style.img} src={reactImg} alt='react' />
                    </figure>
                    <figure data-aos="zoom-in" className={style.tools__figure}>
                        <img className={style.img} src={ts} alt='type script' />
                    </figure>
                    <figure data-aos="zoom-in" className={style.tools__figure}>
                        <img className={style.img} src={firebase} alt='firebase' />
                    </figure>
                </div>
            </section>


            {/* section APPROACH */}
            <section className={style.approach}>
                <div className={style.approach__content}>
                    <div className="textContainer">
                        <h2 className="text1">DLACZEGO WARTO</h2>
                        <p className="text2 text__white">Co cechuje moje projekty?</p>
                    </div>
                    <div className={style.approach__container}>
                        <div data-aos="flip-left" className={style.approach__item}>
                            <figure className={style.approach__figure}>
                                <img className={style.img} src={quality} alt='jakość studio-www' />
                            </figure>
                            <p className={style.approach__text}>Wysoka<br /><span className={style.approach__textEmphasize}>jakość</span></p>
                        </div>
                        <div data-aos="flip-left" className={style.approach__item}>
                            <figure className={style.approach__figure}>
                                <img className={style.img} src={price} alt='cena studio-www' />
                            </figure>
                            <p className={style.approach__text}>Konkurencyjna<br /><span className={style.approach__textEmphasize}>cena</span></p>
                        </div>
                        <div data-aos="flip-left" className={style.approach__item}>
                            <figure className={style.approach__figure}>
                                <img className={style.img} src={apperance} alt='wygląd studio-www' />
                            </figure>
                            <p className={style.approach__text}>Nowoczesny<br /><span className={style.approach__textEmphasize}>wygląd</span></p>
                        </div>
                        <div data-aos="flip-left" className={style.approach__item}>
                            <figure className={style.approach__figure}>
                                <img className={style.img} src={time} alt='czas studio-www' />
                            </figure>
                            <p className={style.approach__text}>Wykonanie na<br /><span className={style.approach__textEmphasize}>czas</span></p>
                        </div>
                        <div data-aos="flip-left" className={style.approach__item}>
                            <figure className={style.approach__figure}>
                                <img className={style.img} src={solutions} alt='rozwiązania studio-www' />
                            </figure>
                            <p className={style.approach__text}>Sprawdzone<br /><span className={style.approach__textEmphasize}>rozwiązania</span></p>
                        </div>
                        <div data-aos="flip-left" className={style.approach__item}>
                            <figure className={style.approach__figure}>
                                <img className={style.img} src={individual} alt='podejście studio-www' />
                            </figure>
                            <p className={style.approach__text}>Indywidualne<br /><span className={style.approach__textEmphasize}>podejście</span></p>
                        </div>
                    </div>
                    <div>
                        <Link to='/about' className={`${style.link} ${style.textWhite}`}>Dowiedz się więcej o mnie<p className={style.linkArrow}></p></Link>
                    </div>
                </div>
            </section>


            {/* section OFFER */}
            <section className={style.offer}>
                <div className="textContainer marginLeftRight">
                    <h2 className="text1">OFERTA</h2>
                    <p className="text2">Co mogę Tobie zaoferować?</p>
                </div>

                <div className={style.offer__item}>
                    <figure className={style.offer__figure}>
                        <img data-aos="fade-up-right" className={style.img} src={sitesImg} alt='Responsive Web Design' />
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
                        <p className={style.offer__text}><strong>Aplikacje webowe (aplikacje internetowe)</strong> to moźliwość realizacji Twojej idei w Internecie. Jeśli masz pomysł, to zgłoś się do mnie, a ja wykonam projekt od początku do końca.</p>
                    </div>
                    <figure className={style.offer__figure}>
                        <img data-aos="fade-up-left" className={style.img} src={appsImg} alt='React JavaScript Library' />
                        <img className={style.offer__img} src={reactJs} alt='react js' />
                    </figure>
                </div>
                <div>
                    <Link to='/offer' className={`${style.link} ${style.linkLeftPadding}`}>Zobacz pełną ofertę<p className={style.linkArrow}></p></Link>
                </div>
            </section>


            {/* section PRICE */}
            <section className={style.price}>
                <div className={style.price__background}>
                    <div className={style.price__containerText}>
                        <div className="textContainer">
                            <h1 className="text1">CENNIK</h1>
                            <p className="text2 text__white">Ile to kosztuje?</p>
                        </div>

                        <div className={style.price__content}>

                            <div className={style.price__item}>
                                <Mark />
                                <h2 className={style.price__desc}>Strona internetowa - 1200 zł</h2>
                            </div>

                            <div className={style.price__item}>
                                <Mark />
                                <h2 className={style.price__desc}>Aplikacja webowa - od 1900 zł</h2>
                            </div>

                            <div>
                                <div><Link to='/cennik' className={`${style.link} ${style.textWhite}`}>Zobacz szczegółowy cennik<p className={style.linkArrow}></p></Link></div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/* section REALIZATIONS */}
            <section className={style.realizations}>
                <div className="textContainer">
                    <h2 className="text1">REALIZACJE</h2>
                    <p className="text2">Co już wykonałem?</p>
                </div>

                <div className={style.slider}>
                    <TouchSlider itemsArray={offer} />
                    <img className={style.slider__img} src={desktopEmpty} alt="desktop empty" />
                </div>

                <div>
                    <div><Link to='/realizations' className={style.link}>Zobacz ostatnie realizacje<p className={style.linkArrow}></p></Link></div>
                </div>
            </section>

            {/* section USER */}
            <section className={style.user}>
                <div className={style.user__container}>
                    <div className={style.user__textContainer}>
                        <div className="textContainer">
                            <h2 className="text1">STREFA KLIENTA</h2>
                            <p className="text2 text__white">Jesteś już klientem?</p>
                            <div>
                                <Link to='/login' className={`${style.link} ${style.textWhite}`}>Śledź postępy w projekcie<p className={style.linkArrow}></p></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <figure className={style.user__figure}>
                    <img className={style.user__img} src={userImg} alt='userImg studio-www' />
                </figure>
            </section>


            {/* section CONTACT */}
            <section className={style.contact}>
                <div className={style.contact__container}>
                    <figure className={style.contact__figure}>
                        <img className={style.img} src={contactImg} alt='userImg studio-www' />
                    </figure>
                    <div className={style.contact__desc}>
                        <div className="textContainer">
                            <h2 className="text1">KONTAKT</h2>
                            <p className="text2">Jak się skontaktować?</p>
                        </div>

                        <p className={style.contact__tel}>
                            <a href='tel:+48795631039' className={style.contact__telIcon}>
                                <Phone />
                            </a>
                            +48 795-631-039
                        </p>
                        <div>
                            <Link to='/contact' className={style.link}>Sprawdź inne formy kontaktu<p className={style.linkArrow}></p></Link>
                        </div>
                    </div>
                </div>
            </section>

        </main >
    )
}

export default Home
