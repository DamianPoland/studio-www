import React, { useEffect } from 'react'
import style from './Realizations.module.css'

// components
import TouchSlider from "../../UI/TouchSlider/TouchSlider"


// images
import wolfmobileapps from '../../assets/wolfmobileapps.png'
import food from '../../assets/food.png'
import next from '../../assets/next.png'
import careo from '../../assets/careo.png'
import health from '../../assets/health.png'
import crypto from '../../assets/crypto.png'
import design from '../../assets/design.png'
import mobile from '../../assets/mobile.png'
import imgToText from '../../assets/imgToText.png'
import calendar from '../../assets/calendar.png'
import gym from '../../assets/gym.png'

import info1 from '../../assets/info1.jpg'
import info2 from '../../assets/info2.jpg'


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
        <div className={style.background}>

            {/* section PAGES */}
            <section className={style.pages}>

                <div className="textContainer">
                    <p className="text1">REALIZACJE</p>
                    <h1 className="text2">Obejrzyj przykładowe strony www:</h1>
                </div>

                <div className={style.slider}>
                    <TouchSlider itemsArray={arrayPages} />
                </div>

                <div className={style.pages__list}>
                    <a data-aos="zoom-in" className={style.a} href='https://wolfmobileapps.com/pl/' target='blank'><img className={style.img} src={wolfmobileapps} alt='strona internetowa wolfmobileapps' />
                    </a>
                    <a data-aos="zoom-in" className={style.a} href='https://examples.studio-www.com//food' target='blank'><img className={style.img} src={food} alt='strona internetowa food' />
                    </a>
                    <a data-aos="zoom-in" className={style.a} href='https://examples.studio-www.com//next' target='blank'><img className={style.img} src={next} alt='strona internetowa next' />
                    </a>
                    <a data-aos="zoom-in" className={style.a} href='https://examples.studio-www.com//mobile' target='blank'><img className={style.img} src={mobile} alt='strona internetowa mobile' />
                    </a>
                    <a data-aos="zoom-in" className={style.a} href='https://examples.studio-www.com/health' target='blank'><img className={style.img} src={health} alt='strona internetowa health' />
                    </a>
                    <a data-aos="zoom-in" className={style.a} href='https://examples.studio-www.com//crypto' target='blank'><img className={style.img} src={crypto} alt='strona internetowa crypto' />
                    </a>
                    <a data-aos="zoom-in" className={style.a} href='https://examples.studio-www.com//design' target='blank'><img className={style.img} src={design} alt='strona internetowa design' />
                    </a>
                    <a data-aos="zoom-in" className={style.a} href='https://examples.studio-www.com//careo' target='blank'><img className={style.img} src={careo} alt='strona internetowa careo' />
                    </a>
                    {/* <a data-aos="zoom-in" className={style.pages_a} href='https://examples.studio-www.com//gym' target='blank'><img className={style.pages_img} src={gym} alt='strona internetowa gym' />
                        </a> */}
                </div>
            </section>


            {/* section Info */}
            <section className={style.info}>
                <div className={style.info__container}>
                    <figure className={style.info__figure1}>
                        <img data-aos="fade-up-left" className={style.info__img} src={info1} alt='Web Pages' />
                    </figure>

                    <div className={style.info__textContainer}>
                        <p className={style.info__text}>Musisz mieć tylko pomysł, a ja zajmę się resztą. Wykonam cały projekt od
                        początku
                    dokońca. </p>
                    </div>

                    <figure className={style.info__figure2}>
                        <img data-aos="fade-up-left" className={style.info__img} src={info2} alt='Web Apps' />
                    </figure>
                </div>
            </section>

            {/* section APPS */}
            <section className={style.apps}>

                <div className="textContainer">
                    <p className="text1">REALIZACJE</p>
                    <h1 className="text2">Obejrzyj przykładowe aplikacje webowe:</h1>
                </div>

                <div className={style.apps__list}>
                    <a data-aos="zoom-in" className={style.a} href='https://imgtotext.web.app/' target='blank'><img className={style.img} src={imgToText} alt='applikacja webowa' />
                    </a>
                    <a data-aos="zoom-in" className={style.a} href='https://kalendarz.studio-www.com' target='blank'><img className={style.img} src={calendar} alt='moduł kalendarza' />
                    </a>
                    {/* <a data-aos="zoom-in" className={style.pages_a} href='#web'><img className={style.pages_img} src={not_ready} alt='applikacja webowa' />
                        </a> */}
                </div>
            </section>
        </div>
    )
}

export default Realizations
