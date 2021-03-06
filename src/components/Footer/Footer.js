import React from 'react'
import { Link } from 'react-router-dom'
import style from './Footer.module.css'

// chat messanger facebbok
import MessengerCustomerChat from 'react-messenger-customer-chat'

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

            {/* facebook messanger */}
            <MessengerCustomerChat
                pageId="100619948474636" //<YOUR_PAGE_ID>
                appId="1998434536978637" //<YOUR_APP_ID>
            />

            <div className={style.desc}>
                <div className={style.desc_container}>

                    <section className={style.desc__item}>
                        <p className={style.desc__title}>O MNIE</p>
                        <p className={style.desc__text}>Zajmuję się tworzeniem stron<br />internetowych, aplikacji webowych<br />oraz serwisów internetowych.</p>
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
                            <Link to='/about' className={style.desc__link}><i className={style.desc__arrow} />O mnie</Link>
                            <Link to='/offer' className={style.desc__link}><i className={style.desc__arrow} />Oferta</Link>
                            <Link to='/cennik' className={style.desc__link}><i className={style.desc__arrow} />Cennik</Link>
                            <Link to='/realizations' className={style.desc__link}><i className={style.desc__arrow} />Realizacje</Link>
                            <Link to='/login' className={style.desc__link}><i className={style.desc__arrow} />Strefa klienta</Link>
                            <Link to='/contact' className={style.desc__link}><i className={style.desc__arrow} />Kontakt</Link>
                            <Link to='/privacy-policy' className={style.desc__link}><i className={style.desc__arrow} />Polityka prywatności</Link>
                        </nav>
                    </section>

                    <section className={style.desc__item}>
                        <p className={style.desc__title}>KONTAKT</p>
                        <div className={style.desc__phone}>
                            <a href='tel:+48795631039' className={style.desc__contactSvgBig}><Phone /></a>
                            <p className={style.desc__phoneText}>+48 795-631-039</p>
                        </div>
                        <div className={style.desc__contact}>

                            <a href={`http://maps.google.com/?q=studio-www, Gdynia ul. Kaliska 22`} target='_blank' rel="noopener noreferrer" className={style.desc__contactItem}>
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

                            <a href={`https://linkedin.com/in/damian-wi-9b1124195`} target='_blank' rel="noopener noreferrer" className={style.desc__contactItem}>
                                <LinkedIn className={style.desc__contactItemSvg} />
                                <p className={style.desc__contactItemText}>LinkedIn</p>
                            </a>

                            <a href={`https://github.com/DamianPoland`} target='_blank' rel="noopener noreferrer" className={style.desc__contactItem}>
                                <GitHub className={style.desc__contactItemSvg} />
                                <p className={style.desc__contactItemText}>GitHub</p>
                            </a>

                        </div>
                    </section>

                </div>
            </div>
            <p className={style.foot}>Copyright © 2020 studio-www</p>
        </footer>
    )
}

export default Footer