import React from 'react'
import { Link } from 'react-router-dom'
import style from './Footer.module.css'
import logoAlexaWeb from '../../assets/logoAlexaWeb.png'

//svg
import { ReactComponent as Phone } from '../../assets/icons/phone.svg'
import { ReactComponent as Location } from '../../assets/icons/location.svg'
import { ReactComponent as Email } from '../../assets/icons/email.svg'
import { ReactComponent as Facebbok } from '../../assets/icons/facebook.svg'
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedIn.svg'
import { ReactComponent as GitHub } from '../../assets/icons/gitHub.svg'

// images 
import html from '../../assets/tools/html.png'
import css from '../../assets/tools/css.png'
import js from '../../assets/tools/js.png'
import reactImg from '../../assets/tools/react.png'
import ts from '../../assets/tools/ts.png'
import firebase from '../../assets/tools/firebase.png'


const Footer = () => {
    return (
        <footer className={style.background}>

            <div className={style.desc}>
                <div className={style.desc_container}>

                    <section className={style.desc__item}>
                        <p className={style.desc__title}>O NAS</p>
                        <p className={style.desc__text}>Zajmujemy się tworzeniem stron<br />internetowych, aplikacji webowych<br />oraz serwisów internetowych.</p>
                        <div className={style.desc__tools}>
                            <img className={style.desc__img} src={html} alt='html5' />
                            <img className={style.desc__img} src={css} alt='css3' />
                            <img className={style.desc__img} src={js} alt='java script' />
                            <img className={style.desc__img} src={reactImg} alt='react' />
                            <img className={style.desc__img} src={ts} alt='type script' />
                            <img className={style.desc__img} src={firebase} alt='firebase' />
                        </div>
                    </section>

                    <section className={style.desc__item}>
                        <p className={style.desc__title}>NAWIGACJA</p>
                        <nav className={style.desc__nav}>
                            <Link to='/home' className={style.desc__link}><i className={style.desc__arrow} />Strona główna</Link>
                            <Link to='/about' className={style.desc__link}><i className={style.desc__arrow} />O nas</Link>
                            <Link to='/offer' className={style.desc__link}><i className={style.desc__arrow} />Oferta</Link>
                            <Link to='/cennik' className={style.desc__link}><i className={style.desc__arrow} />Cennik</Link>
                            {/* <Link to='/realizations' className={style.desc__link}><i className={style.desc__arrow} />Realizacje</Link> */}
                            <Link to='/contact' className={style.desc__link}><i className={style.desc__arrow} />Kontakt</Link>
                            <Link to='/privacy-policy' className={style.desc__link}><i className={style.desc__arrow} />Polityka prywatności</Link>
                        </nav>
                    </section>

                    <section className={style.desc__item}>
                        <p className={style.desc__title}>KONTAKT</p>
                        <div className={style.desc__phone}>
                            <a href='tel:+48887638907' className={style.desc__contactSvgBig}><Phone /></a>
                            <p className={style.desc__phoneText}>+48 887-638-907</p>
                        </div>
                        <div className={style.desc__contact}>

                            <a href={`http://maps.google.com/?q=studio-www, Bydgoszcz ul. Filtrowa 27`} target='_blank' rel="noopener noreferrer" className={style.desc__contactItem}>
                                <Location className={style.desc__contactItemSvg} />
                                <p className={style.desc__contactItemText}>Mapa</p>
                            </a>

                            <a href='mailto:info@studio-www.com?subject=Zapytanie' className={style.desc__contactItem}>
                                <Email className={style.desc__contactItemSvg} />
                                <p className={style.desc__contactItemText}>Email</p>
                            </a>

                            <a href='https://www.fb.me/AplikacjeIStronyInternetowe' target='_blank' rel="noopener noreferrer" className={style.desc__contactItem}>
                                <Facebbok className={style.desc__contactItemSvg} />
                                <p className={style.desc__contactItemText}>Facebbok</p>
                            </a>

                            {/* <a href={`https://www.linkedin.com/in/damian-wilczy%C5%84ski-9b1124195/`} target='_blank' rel="noopener noreferrer" className={style.desc__contactItem}>
                                <LinkedIn className={style.desc__contactItemSvg} />
                                <p className={style.desc__contactItemText}>LinkedIn</p>
                            </a> */}

                            {/* <a href={`https://github.com/DamianPoland`} target='_blank' rel="noopener noreferrer" className={style.desc__contactItem}>
                                <GitHub className={style.desc__contactItemSvg} />
                                <p className={style.desc__contactItemText}>GitHub</p>
                            </a> */}

                        </div>
                    </section>

                </div>
            </div>
            <p className={style.foot}>Copyright © 2023 studio-www</p>
            <div className={style.foot}>
                <p>Designed & Developed by</p>
                <figure><img src={logoAlexaWeb} alt='logo' style={{ margin: "0 0.5rem" }} /></figure>
                <a href='https://alexa-web.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={style.foot_link}
                >Alexa-Web.com</a>
            </div>
        </footer>
    )
}

export default Footer