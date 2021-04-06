import React, { useState, useEffect } from 'react'
import style from './About.module.css'
import AOS from 'aos'


// images
import team from '../../assets/about/team.jpg'
import why from '../../assets/about/why.jpg'

// images standards
import rwd from '../../assets/about/rwd.jpg'
import pwa from '../../assets/about/pwa.jpg'
import twa from '../../assets/about/twa.jpg'
import seo from '../../assets/about/seo.jpg'
import faas from '../../assets/about/faas.jpg'
import react from '../../assets/about/react.jpg'

//svg
import { ReactComponent as Aperance } from '../../assets/icons/aperance.svg'
import { ReactComponent as Tech } from '../../assets/icons/tech.svg'
import { ReactComponent as Quality } from '../../assets/icons/quality.svg'
import { ReactComponent as Responsive } from '../../assets/icons/responsive.svg'



const About = () => {

    // scroll to top when componene render
    useEffect(() => { window.scrollTo(0, 0) }, [])

    // AOS reload after load first photo to not show animations before load screen
    const [loadPhoto, setLoadPhoto] = useState(false)
    useEffect(() => { AOS.refresh() }, [loadPhoto])



    return (
        <main className={style.background}>


            {/* section WHO*/}
            <section className={style.who}>
                <div className={style.who__container}>
                    <figure className={style.figure__img}>
                        <img onLoad={() => setLoadPhoto(true)} className={style.img} data-aos="fade-right" src={team} alt='wykonywanie stron internetowych i aplikacji webowych' />
                    </figure>
                    <div className={style.who__text}>
                        <div className={style.who__textContainer}>
                            <div className="textContainer">
                                <p className="text1">O MNIE</p>
                                <p className="text2">Kim jestem?</p>
                            </div>
                            <p className={style.text__desc}><span className={style.text__bigLeter}>J</span>estem osobą z tytułem mgr inż. Od kilku lat pracuję w branży IT. Zajmuję się tworzeniem <strong>stron internetowych</strong>, <strong>aplikacji webowych</strong> oraz <strong>serwisów internetowych</strong>. Przy tworzeniu projektów korzystam z najnowszych i najczęściej używanych technologii, dlatego każdy projekt jest wysokiej jakości i stosunkowo tani w produkcji oraz utrzymaniu.<br /> <span className={style.text__bigLeter}>D</span>zięki nawiązaniu współpracy z innymi programistami jestem w stanie tworzyć duże i skomplikowane projekty.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* section WHY */}
            <section className={style.why}>
                <div className={style.why__container}>
                    <div className={style.why__text}>
                        <div className={style.why__textContainer}>
                            <div className="textContainer text__white">
                                <p className="text1">O MNIE</p>
                                <p className="text2 text__white">Dlaczego ja?</p>
                            </div>
                            <p className={`${style.text__desc} ${style.text__white}`}><span className={style.text__bigLeter}>Z</span>ajmuję się tworzeniem kompleksowych projektów od A-Z. Korzystam z nowoczesnych rozwiązań takich jak <strong>React</strong> i <strong>XaaS</strong>. Strony są projektowane jako <strong>RWD</strong> (<strong>Responsive Web Design</strong>) oraz <strong>PWA</strong> (<strong>Progressive Web Apps</strong>) dzięki czemu wyglądają dobrze na komputerze i na urządzeniu mobilnym. Każdy projekt jest przygotowany pod pozycjonowanie strony zgodnie z <strong>SEO</strong>.<br /> <span className={style.text__bigLeter}>C</span>ena też jest ważna. Nie trać pieniędzy zamawiając projekt w dużej firmie z ogromnymi kosztami utrzymania. U mnie płacisz tylko za realnie spędzony czas nad projektem, a nie za utrzymanie całej infrastruktury. Zapytaj o wycenę, a się przekonasz.</p>
                        </div>
                    </div>
                    <figure className={style.figure__img}>
                        <img className={style.img} data-aos="fade-left" src={why} alt='dlaczego studio-www' />
                    </figure>
                </div>
            </section>


            {/* section APPROACH */}
            <section className={style.approach}>
                <div className={style.approach__textContainer}>
                    <div data-aos="flip-left" className={style.approach__item}>
                        <Aperance />
                        <h2 className={style.approach__h2}>Wygląd</h2>
                        <p className={style.approach__p}>Wygląd to sprawa priorytetowa. Każda zrobiona przeze mnie strona wygląda nowocześnie i jest niepowtarzalna.</p>
                    </div>
                    <div data-aos="flip-left" className={style.approach__item}>
                        <Tech />
                        <h2 className={style.approach__h2}>Technologia</h2>
                        <p className={style.approach__p}>Korzystam z najnowszych technologii i stosuję się do aktualnych trendów. Stale ulepszam jakość swoich usług.</p>
                    </div>
                    <div data-aos="flip-left" className={style.approach__item}>
                        <Quality />
                        <h2 className={style.approach__h2}>Jakość</h2>
                        <p className={style.approach__p}>Zawsze stawiam na jakość. Nigdy nie idę na kompromis. Dzięki temu moje produkty są łatwe w utrzymaniu i rozwoju. </p>
                    </div>
                    <div data-aos="flip-left" className={style.approach__item}>
                        <Responsive />
                        <h2 className={style.approach__h2}>Skalowanie</h2>
                        <p className={style.approach__p}>Wszystkie projekty robię w technologii RWD, dzięki czemu są dopasowane do rozdzielczości wszystkich urządzeń.  </p>
                    </div>
                </div>
            </section>


            {/* section STANDARDS */}
            <section className={style.standards}>
                <div className={style.standards__container}>
                    <div className="textContainer marginLeftRight">
                        <p className="text1">ROZWIĄZANIA</p>
                        <h1 className="text2">Standardy których używam:</h1>
                    </div>

                    <div className={style.standards__item}>
                        <div className={style.standards__content}>
                            <h2 data-aos="zoom-in" className={style.standards__header}><strong className={style.font}>RWD</strong></h2>
                            <h2 className={style.standards__header2}>(<strong>Responsive Web Design</strong>)</h2>
                            <p className={style.standards__text}><strong>RWD</strong> to technika projektowania widoków, dzięki której Twoja strona wygląda dobrze na każdym urządzeniu. Niezależnie czy korzystasz z dużego monitora, smartfonu lub tableta, widok automatycznie dopasuje się do danej rozdzielczości.
                                </p>
                        </div>
                        <figure className={style.standards__figure}>
                            <img data-aos="fade-up-left" className={style.img} src={rwd} alt='Responsive Web Design' />
                        </figure>
                    </div>

                    <div className={style.standards__item}>
                        <div className={style.standards__content}>
                            <h2 data-aos="zoom-in" className={style.standards__header}><strong className={style.font}>PWA</strong></h2>
                            <h2 className={style.standards__header2}>(<strong>Progressive Web Apps</strong>)</h2>
                            <p className={style.standards__text}><strong>PWA</strong> pozwala tak zaprojektować stronę internetową, aby na urządzeniu mobilnym mogła być używana jak aplikacja mobilna. Można ją zainstalować w telefonie i korzystać w trybie offline. Działa na platformie Android i iOS.
                                </p>
                        </div>
                        <figure className={style.standards__figure}>
                            <img data-aos="fade-up-left" className={style.img} src={pwa} alt='Progressive Web Apps' />
                        </figure>
                    </div>

                    <div className={style.standards__item}>
                        <div className={style.standards__content}>
                            <h2 data-aos="zoom-in" className={style.standards__header}><strong className={style.font}>TWA</strong></h2>
                            <h2 className={style.standards__header2}>(<strong>Trusted Web Activities</strong>)</h2>
                            <p className={style.standards__text}><strong>TWA</strong> daje możliwość udostępniania w sklepie Google Play aplikacji PWA. Nie ma potrzeby pisania oddzielnego kodu. Wszelkie aktualizacje są automatyczne i nie wymagają ingerencji w sklepie, dzięki czemu utrzymanie całego projektu jest o wiele tańsze.
                                </p>
                        </div>
                        <figure className={style.standards__figure}>
                            <img data-aos="fade-up-left" className={style.img} src={twa} alt='Trusted Web Activities' />
                        </figure>
                    </div>

                    <div className={style.standards__item}>
                        <div className={style.standards__content}>
                            <h2 data-aos="zoom-in" className={style.standards__header}><strong className={style.font}>SEO</strong></h2>
                            <h2 className={style.standards__header2}>(<strong>Search Engine Optimization</strong>)</h2>
                            <p className={style.standards__text}><strong>SEO</strong> to projektowanie zgodne z zasadami optymalizacji pozwalającymi na osiągnięcie wysokich wyników w wyszukiwarkach dla wybranych słów lub fraz kluczowych. Kod strony, jej treść oraz responsywność są dostosowane do aktualnych algorytmów wyszukiwarek w celu poprawienia pozycji danego serwisu na liście wynikowej.
                                </p>
                        </div>
                        <figure className={style.standards__figure}>
                            <img data-aos="fade-up-left" className={style.img} src={seo} alt='Search Engine Optimization' />
                        </figure>
                    </div>

                    <div className={style.standards__item}>
                        <div className={style.standards__content}>
                            <h2 data-aos="zoom-in" className={style.standards__header}><strong className={style.font}>Firebase</strong></h2>
                            <h2 className={style.standards__header2}>(<strong>Cloud platform</strong>)</h2>
                            <p className={style.standards__text}><strong>Firebase</strong> to usługi chmurowe pozwalająca na bardzo łatwe, szybkie i tanie projektowanie tzw. backendu. Projekty wykonane w oparciu o platformę, wspieraną przez takiego giganta jak Google, są bardzo tanie w utrzymaniu, w 100% niezawodne i dobrze zabezpieczone.
                                </p>
                        </div>
                        <figure className={style.standards__figure}>
                            <img data-aos="fade-up-left" className={style.img} src={faas} alt='Function as a Service' />
                        </figure>
                    </div>

                    <div className={style.standards__item}>
                        <div className={style.standards__content}>
                            <h2 data-aos="zoom-in" className={style.standards__header}><strong className={style.font}>React</strong></h2>
                            <h2 className={style.standards__header2}>(<strong>JavaScript Library</strong>)</h2>
                            <p className={style.standards__text}><strong>React</strong> to javascriptowa biblioteka służąca do tworzenia interfejsów użytkownika. Aktualnie jest to najczęściej używana biblioteka wykorzystywana przy tworzeniu aplikacji webowych, posiadająca ogromne wsparcie i nowoczesne rozwiązania.
                                </p>
                        </div>
                        <figure className={style.standards__figure}>
                            <img data-aos="fade-up-left" className={style.img} src={react} alt='React JavaScript Library' />
                        </figure>
                    </div>
                </div>
            </section>
        </main >
    )
}

export default About