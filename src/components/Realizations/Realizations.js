import React, { useState, useEffect } from 'react'
import style from './Realizations.module.css'
import AOS from 'aos'


// images realizations
// import ketozocha from '../../assets/realizations/ketozocha.jpg'
// import beautystudio from '../../assets/realizations/beautystudio.jpg'
import calendar from '../../assets/realizations/calendar.jpg'
import getpol from '../../assets/realizations/getpol.jpg'
import imgToText from '../../assets/realizations/imgToText.jpg'
import jatestuje from '../../assets/realizations/jatestuje.jpg'
// import tatarczuk from '../../assets/realizations/tatarczuk.jpg'
import wlaczremont from '../../assets/realizations/wlaczremont.jpg'


const Realizations = () => {


    useEffect(() => { window.scrollTo(0, 0) }, [])


    // AOS reload after load first photo to not show animations before load screen
    const [loadPhoto,] = useState(false)
    useEffect(() => { AOS.refresh() }, [loadPhoto])


    return (
        <main className={style.background}>


            {/* section REALIZATIONS */}
            <section className={style.realizations}>

                <div className="textContainer">
                    <p className="text1">REALIZACJE</p>
                    <h1 className="text2">Obejrzyj moje ostatnie realizacje:</h1>
                </div>

                {/* <div className={style.realizations__item}>
                    <div className={style.realizations__itemTextContainer}>
                        <h2 className="text1">Portale www</h2>
                        <h3 className={style.realizations__text}>Blog dietetyczny: ketozocha.site</h3>
                        <a href="https://ketozocha.site" target="_blank" rel="noopener noreferrer" className={style.realizations__link}>Zobacz...</a>
                    </div>
                    <a href="https://ketozocha.pl" target="_blank" rel="noopener noreferrer" data-aos="fade-up-left" className={style.realizations__figure}>
                        <img onLoad={() => setLoadPhoto(true)} className={style.img} src={ketozocha} alt='ketozocha.pl' />
                    </a>
                </div> */}

                {/* <div className={style.realizations__item}>
                    <div className={style.realizations__itemTextContainer}>
                        <h2 className="text1">Strony www</h2>
                        <h3 className={style.realizations__text}>Strona internetowa firmy hydraulicznej: tatarczuk.com.pl</h3>
                        <a href="https://tatarczuk.com.pl" target="_blank" rel="noopener noreferrer" className={style.realizations__link}>Zobacz...</a>
                        <span className={style.animation__border}></span>
                    </div>
                    <a href="https://tatarczuk.com.pl" target="_blank" rel="noopener noreferrer" data-aos="fade-up-left" className={style.realizations__figure}>
                        <img className={style.img} src={tatarczuk} alt='tatarczuk.com.pl' />
                        <span className={`${style.animation__border} ${style.animation__borderRotate}`}></span>
                    </a>
                </div> */}

                <div className={style.realizations__item}>
                    <div className={style.realizations__itemTextContainer}>
                        <h2 className="text1">Aplikacje webowe</h2>
                        <h3 className={style.realizations__text}>Ogólnopolski portal ogłoszeniowy jaTestuje.pl</h3>
                        <a href='https://jatestuje.pl' target="_blank" rel="noopener noreferrer" className={style.realizations__link}>Zobacz...</a>
                    </div>
                    <a href='https://jatestuje.pl' target="_blank" rel="noopener noreferrer" data-aos="fade-up-left" className={style.realizations__figure}>
                        <img className={style.img} src={jatestuje} alt='jatestuje.pl' />
                    </a>
                </div>

                <div className={style.realizations__container}>

                    <div className={style.realizations__item}>
                        <div className={style.realizations__itemTextContainer}>
                            <h2 className="text1">Strony www</h2>
                            <h3 className={style.realizations__text}>Strona internetowa firmy ogólnobudowlanej: wlaczremont.pl</h3>
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
                            <h2 className="text1">Strony www</h2>
                            <h3 className={style.realizations__text}>Strona internetowa firmy elektrycznej: getpol.com.pl</h3>
                            <a href="https://getpol.com.pl" target="_blank" rel="noopener noreferrer" className={style.realizations__link}>Zobacz...</a>
                        </div>
                        <a href="https://getpol.com.pl" target="_blank" rel="noopener noreferrer" data-aos="fade-up-left" className={style.realizations__figure}>
                            <img className={style.img} src={getpol} alt='getpol.com.pl' />
                        </a>
                    </div>

                    <div className={style.realizations__item}>
                        <div className={style.realizations__itemTextContainer}>
                            <h2 className="text1">Aplikacje webowe</h2>
                            <h3 className={style.realizations__text}>Moduł kalendarza do rezerwacji wizyt lub obiektów </h3>
                            <a href='https://kalendarz.studio-www.com' target="_blank" rel="noopener noreferrer" className={style.realizations__link}>Zobacz...</a>
                            <span className={style.animation__border}></span>
                        </div>
                        <a href='https://kalendarz.studio-www.com' target="_blank" rel="noopener noreferrer" data-aos="fade-up-left" className={style.realizations__figure}>
                            <img className={style.img} src={calendar} alt='calendar' />
                            <span className={`${style.animation__border} ${style.animation__borderRotate}`}></span>
                        </a>
                    </div>

                    {/* <div className={style.realizations__item}>
                        <div className={style.realizations__itemTextContainer}>
                            <h2 className="text1">Strony www</h2>
                            <h3 className={style.realizations__text}>Strona internetowa salonu piękności: beautystudio.com.pl</h3>
                            <a href="https://beautystudio.com.pl/" target="_blank" rel="noopener noreferrer" className={style.realizations__link}>Zobacz...</a>
                        </div>
                        <a href="https://beautystudio.com.pl/" target="_blank" rel="noopener noreferrer" data-aos="fade-up-left" className={style.realizations__figure}>
                            <img className={style.img} src={beautystudio} alt='beautystudio.com.pl' />
                        </a>
                    </div> */}

                    <div className={style.realizations__item}>
                        <div className={style.realizations__itemTextContainer}>
                            <h2 className="text1">Aplikacje webowe</h2>
                            <h3 className={style.realizations__text}>Aplikacja służąca do rozpoznawania i tłumaczenia tekstu</h3>
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

        </main>
    )
}

export default Realizations
