import React, { useEffect } from 'react'
import style from './Price.module.css'

//svg
import { ReactComponent as Mark } from '../../assets/icons/mark__OK.svg'


const siteSmall = ["Jeden widok", "Darmowy hosting", "Konfiguracja DNS (domena)", "Certyfikat SSL", "Logo", "RWD (Responsive Web Design)", "Zdjęcia i ikony", "Google maps", "Przygotowanie pod CEO",]
const siteBig = ["Do 6 widoków", "Darmowy hosting", "Konfiguracja DNS (domena)", "Certyfikat SSL", "Logo", "RWD (Responsive Web Design)", "Zdjęcia i ikony", "Google maps", "Przygotowanie pod CEO", "Formularz kontaktowy", "Polityka prywatności (cookies)", "Framework React",]
const siteApp = ["Wiele widoków", "Hosting", "Konfiguracja DNS (domena)", "Certyfikat SSL", "Logo", "RWD (Responsive Web Design)", "Zdjęcia i ikony", "Google maps", "Przygotowanie pod CEO", "Formularz kontaktowy", "Polityka prywatności (cookies)", "Framework React", "Logowanie (Gmail, Facebook, telefon)", "Usługi chmurowe (Firebase)", "Bazy danych noSQL", "Obliczenia", "API", "PWA (Progressive Web Apps)", "GPS, aparat", "Powiadomienia", "inne"]


const Price = () => {

    useEffect(() => { window.scrollTo(0, 0) }, [])

    // full screen in mobile first section (cut browser search bar on mobile) + css code
    useEffect(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`)
        // window.addEventListener('resize', () => { // change vh when browser search bar disapear
        //     document.querySelector(':root').style
        //         .setProperty('--vh', window.innerHeight / 100 + 'px')
        // })
    }, [])


    return (
        <main className={style.background}>

            {/* section PRICE */}
            <section className={style.price}>
                <div className={style.price__background}></div>
                <div className={style.price__container}>

                    <div className="textContainer">
                        <h1 className="text1">CENNIK</h1>
                        <p className="text2 text__white">Sprawdź aktualne ceny:</p>
                    </div>

                    <div className={style.price__content}>

                        <div data-aos="flip-left" className={style.price__item}>
                            <h2 className={style.price__itemTextMine}>Strona internetowa<br />wizytówka</h2>
                            <p className={style.price__itemTextPrice}>800 zł</p>
                            {siteSmall.map(item => {
                                return (
                                    <div key={item} className={style.price__itemLineText}>
                                        <Mark />
                                        <p className={style.price__itemDesc}>{item}</p>
                                    </div>
                                )
                            })}
                        </div>


                        <div data-aos="flip-left" className={style.price__item}>
                            <h2 className={style.price__itemTextMine}>Strona internetowa<br />rozbudowana</h2>
                            <p className={style.price__itemTextPrice}>1200 zł</p>
                            {siteBig.map(item => {
                                return (
                                    <div key={item} className={style.price__itemLineText}>
                                        <Mark />
                                        <p className={style.price__itemDesc}>{item}</p>
                                    </div>
                                )
                            })}
                        </div>

                        <div data-aos="flip-left" className={style.price__item}>
                            <h2 className={style.price__itemTextMine}>Aplikacja webowa lub<br />portal internetowy</h2>
                            <p className={style.price__itemTextPrice}>od 1500 zł</p>
                            {siteApp.map(item => {
                                return (
                                    <div key={item} className={style.price__itemLineText}>
                                        <Mark />
                                        <p className={style.price__itemDesc}>{item}</p>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </section>

        </main >
    )
}

export default Price
