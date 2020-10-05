import React from 'react'
import style from './Offer.module.css'
import office from '../../assets/office.jpg'

const Offer = () => {



    return (
        <div className={style.background}>
            <div className={style.container}>

                {/* section Tworzenie stron www */}
                <section className={style.pages}>
                    <div data-aos="flip-up" className={style.pages_content}>
                        <h1 className={style.pages_h1}><strong>Strony www</strong></h1>
                        <p className={style.pages_desc}>Strona www to wizytówka Twojej marki w Internecie, która nie tylko pozwala uzyskać podstawowe informacje o firmie, ale jest również wyjątkową okazją do wyróżnienia się na tle konkurencji i zachęcenia klientów do zakupu Twoich produktów lub usług.</p>
                        <p className={style.pages_desc}>Jeśli nie wiesz czym jest: domena, hosting, dns itp. to nic nie szkodzi. Przedstaw swój pomysł a ja zajmę się resztą. Zapytaj o ofertę - to nic nie kosztuje</p>
                    </div>

                    <h2 className={style.pages_h2}>Obejrzyj przykładowe srony www:</h2>
                    <div className={style.pages_list}>
                        <a href='https://studio-exapmle-projects.web.app/electric' target='blank'><img className={style.pages_img} src={office} alt='project' /></a>
                        <a href='https://studio-exapmle-projects.web.app/crypto' target='blank'><img className={style.pages_img} src={office} alt='project' /></a>
                        <a href='https://studio-exapmle-projects.web.app/design' target='blank'><img className={style.pages_img} src={office} alt='project' /></a>
                        <a href='https://studio-exapmle-projects.web.app/mobile' target='blank'><img className={style.pages_img} src={office} alt='project' /></a>
                        <img className={style.pages_img} src={office} alt='project' />
                        <img className={style.pages_img} src={office} alt='project' />
                    </div>
                </section>

                <hr />

                {/* section Tworzenie aplikacji webowych */}
                <section className={style.pages}>
                    <div data-aos="flip-up" className={style.pages_content}>
                        <h1 className={style.pages_h1}><strong>Aplikacje web</strong></h1>
                        <p className={style.pages_desc}>Aplikacje webowe są dostosowane konkretnie do twoich potrzeb. Począwszy od prostych aplikacji ze stroną logowania i wykonujących podstawowe obliczenia a skończywszy na skomplikowanych i rozbudowanych z możliwością aktualicji za pomocą systemów CMS.</p>
                        <p className={style.pages_desc}>Dzięki projektowaniu PWA (Progressive Web App) nie musisz płacić za wykonanie aplikacji mobilnej. Twoja aplikacja webowa będzie się zachowywać tak jak mobilna gdy bedzie używana na urządzeniu przenośnym. </p>
                    </div>

                    <h2 className={style.pages_h2}>Obejrzyj przykładowe elementy aplikacji web:</h2>
                    <div className={style.pages_list}>
                        <img className={style.pages_img} src={office} alt='project' />
                        <img className={style.pages_img} src={office} alt='project' />
                        <img className={style.pages_img} src={office} alt='project' />
                        <img className={style.pages_img} src={office} alt='project' />
                        <img className={style.pages_img} src={office} alt='project' />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Offer
