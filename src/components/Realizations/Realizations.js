import React, { useEffect } from 'react'
import style from './Realizations.module.css'

// components
import TouchSlider from "../../UI/TouchSlider/TouchSlider"


// images realizations
import beautystudio from '../../assets/realizations/beautystudio.jpg'
import calendar from '../../assets/realizations/calendar.jpg'
import getpol from '../../assets/realizations/getpol.jpg'
import imgToText from '../../assets/realizations/imgToText.jpg'
import jatestuje from '../../assets/realizations/jatestuje.jpg'
import tatarczuk from '../../assets/realizations/tatarczuk.jpg'
import wlaczremont from '../../assets/realizations/wlaczremont.jpg'

// images sites
import wolfmobileapps from '../../assets/realizations/wolfmobileapps.png'
import food from '../../assets/realizations/food.png'
import next from '../../assets/realizations/next.png'
import careo from '../../assets/realizations/careo.png'
import health from '../../assets/realizations/health.png'
import crypto from '../../assets/realizations/crypto.png'
import design from '../../assets/realizations/design.png'
import mobile from '../../assets/realizations/mobile.png'
import gym from '../../assets/realizations/gym.png'


// array of agregat images
const arrayPages = [
    <img href='https://wolfmobileapps.com/pl/' className={style.img} src={wolfmobileapps} alt={`${wolfmobileapps}`} />,
    <img href='https://examples.studio-www.com//food' className={style.img} src={food} alt={`${food}`} />,
    <img href='https://examples.studio-www.com//next' className={style.img} src={next} alt={`${next}`} />,
    <img href='https://examples.studio-www.com//careo' className={style.img} src={careo} alt={`${careo}`} />,
    <img href='https://examples.studio-www.com//health' className={style.img} src={health} alt={`${health}`} />,
    <img href='https://examples.studio-www.com//crypto' className={style.img} src={crypto} alt={`${crypto}`} />,
    <img href='https://examples.studio-www.com//design' className={style.img} src={design} alt={`${design}`} />,
    <img href='https://examples.studio-www.com//mobile' className={style.img} src={mobile} alt={`${mobile}`} />,
    <img href='https://examples.studio-www.com//gym' className={style.img} src={gym} alt={`${gym}`} />,
]


const Realizations = () => {

    // scroll to top when componene render
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <main className={style.background}>


            {/* section REALIZATIONS */}
            <section className={style.realizations}>

                <div className="textContainer">
                    <p className="text1">REALIZACJE</p>
                    <h1 className="text2">Obejrzyj moje ostatnie realizacje:</h1>
                </div>

                <div className={style.realizations__item}>
                    <div className={style.realizations__itemTextContainer}>
                        <p className="text1">Strony www</p>
                        <p className={style.realizations__text}>Strona internetowa firmy hydraulicznej: tatarczuk.com.pl</p>
                        <a href="https://tatarczuk.com.pl" target="_blank" rel="noopener noreferrer" className={style.realizations__link}>Zobacz...</a>
                        <span className={style.animation__border}></span>
                    </div>
                    <a href="https://tatarczuk.com.pl" target="_blank" rel="noopener noreferrer" data-aos="fade-up-left" className={style.realizations__figure}>
                        <img className={style.img} src={tatarczuk} alt='tatarczuk.com.pl' />
                        <span className={`${style.animation__border} ${style.animation__borderRotate}`}></span>
                    </a>
                </div>

                <div className={style.realizations__item}>
                    <div className={style.realizations__itemTextContainer}>
                        <p className="text1">Aplikacje webowe</p>
                        <p className={style.realizations__text}>Ogólnopolski portal ogłoszeniowy jaTestuje.pl</p>
                        <a href='https://jatestuje.pl' target="_blank" rel="noopener noreferrer" className={style.realizations__link}>Zobacz...</a>
                    </div>
                    <a href='https://jatestuje.pl' target="_blank" rel="noopener noreferrer" data-aos="fade-up-left" className={style.realizations__figure}>
                        <img className={style.img} src={jatestuje} alt='jatestuje.pl' />
                    </a>
                </div>

                <div className={style.realizations__container}>

                    <div className={style.realizations__item}>
                        <div className={style.realizations__itemTextContainer}>
                            <p className="text1">Strony www</p>
                            <p className={style.realizations__text}>Strona internetowa firmy ogólnobudowlanej: wlaczremont.pl</p>
                            <a href="http://wlaczremont.pl/" target="_blank" rel="noopener noreferrer" className={style.realizations__link}>Zobacz...</a>
                            <span className={style.animation__border}></span>
                        </div>
                        <a href="http://wlaczremont.pl/" target="_blank" rel="noopener noreferrer" data-aos="fade-up-left" className={style.realizations__figure}>
                            <img className={style.img} src={wlaczremont} alt='wlaczremont.pl' />
                            <span className={`${style.animation__border} ${style.animation__borderRotate}`}></span>
                        </a>
                    </div>

                    <div className={style.realizations__item}>
                        <div className={style.realizations__itemTextContainer}>
                            <p className="text1">Strony www</p>
                            <p className={style.realizations__text}>Strona internetowa firmy elektrycznej: getpol.com.pl</p>
                            <a href="https://getpol.com.pl" target="_blank" rel="noopener noreferrer" className={style.realizations__link}>Zobacz...</a>
                        </div>
                        <a href="https://getpol.com.pl" target="_blank" rel="noopener noreferrer" data-aos="fade-up-left" className={style.realizations__figure}>
                            <img className={style.img} src={getpol} alt='getpol.com.pl' />
                        </a>
                    </div>

                    <div className={style.realizations__item}>
                        <div className={style.realizations__itemTextContainer}>
                            <p className="text1">Aplikacje webowe</p>
                            <p className={style.realizations__text}>Modół kalendarza do rezerwacji wizyt lub obiektów </p>
                            <a href='https://kalendarz.studio-www.com' target="_blank" rel="noopener noreferrer" className={style.realizations__link}>Zobacz...</a>
                            <span className={style.animation__border}></span>
                        </div>
                        <a href='https://kalendarz.studio-www.com' target="_blank" rel="noopener noreferrer" data-aos="fade-up-left" className={style.realizations__figure}>
                            <img className={style.img} src={calendar} alt='calendar' />
                            <span className={`${style.animation__border} ${style.animation__borderRotate}`}></span>
                        </a>
                    </div>

                    <div className={style.realizations__item}>
                        <div className={style.realizations__itemTextContainer}>
                            <p className="text1">Strony www</p>
                            <p className={style.realizations__text}>Strona internetowa salonu piękności: beautystudio.com.pl</p>
                            <a href="https://beautystudio.com.pl/" target="_blank" rel="noopener noreferrer" className={style.realizations__link}>Zobacz...</a>
                        </div>
                        <a href="https://beautystudio.com.pl/" target="_blank" rel="noopener noreferrer" data-aos="fade-up-left" className={style.realizations__figure}>
                            <img className={style.img} src={beautystudio} alt='beautystudio.com.pl' />
                        </a>
                    </div>

                    <div className={style.realizations__item}>
                        <div className={style.realizations__itemTextContainer}>
                            <p className="text1">Aplikacje webowe</p>
                            <p className={style.realizations__text}>Aplikacja służąca do rozpoznawania i tłumaczenia tekstu</p>
                            <a href='https://imgtotext.web.app' target="_blank" rel="noopener noreferrer" className={style.realizations__link}>Zobacz...</a>
                            <span className={style.animation__border}></span>
                        </div>
                        <a href='https://imgtotext.web.app' target="_blank" rel="noopener noreferrer" data-aos="fade-up-left" className={style.realizations__figure}>
                            <img className={style.img} src={imgToText} alt='imgToText' />
                            <span className={`${style.animation__border} ${style.animation__borderRotate}`}></span>
                        </a>
                    </div>

                </div>
            </section>

            {/* section SAMPLES */}
            <section className={style.samples}>

                <div className="textContainer">
                    <p className="text1">REALIZACJE</p>
                    <h1 className="text2">Obejrzyj przykładowe strony www:</h1>
                </div>

                <div className={style.slider}>
                    <TouchSlider itemsArray={arrayPages} />
                </div>

            </section>

        </main>
    )
}

export default Realizations
