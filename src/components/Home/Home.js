import React from 'react'
import style from './Home.module.css'


// assets
import intro from '../../assets/intro_ball.mp4'
import team from '../../assets/team.jpg'
import why from '../../assets/why.jpg'
import firstImg from '../../assets/firstImg.jpg'
import rwd from '../../assets/rwd.jpg'
import pwa from '../../assets/pwa.jpg'
import twa from '../../assets/twa.jpg'
import seo from '../../assets/seo.jpg'
import faas from '../../assets/faas.jpg'
import react from '../../assets/react.jpg'



const Home = () => {

    return (
        <div className={style.background}>
            <main className={style.container}>

                {/* img intro */}
                <div className={style.introContainer}>
                    <img className={style.introImg} src={firstImg} alt='strony internetowe' />
                    <div className={style.introBlack}></div>
                    <div className={style.introContainerText}>
                        <h1 className={`${style.introText} ${style.introText1}`}>Strony internetowe</h1>
                        <h2 className={`${style.introText} ${style.introText2}`}>Aplikacje webowe</h2>
                        <h2 className={`${style.introText} ${style.introText3}`}>Portale internetowe</h2>
                    </div>
                    <h1 className={style.headerName}>studio-www.com</h1>
                </div>


                {/* section technologies desc */}
                <section className={style.sectionTechDesc}>
                    <div data-aos="zoom-in" className={style.sectionTechDesc_item}>
                        {iconAperance}
                        <h2 className={style.sectionTechDesc_h2}>Wygląd</h2>
                        <p className={style.sectionTechDesc_p}>Wygląd to sprawa priorytetowa. Każda zrobiona przeze mnie strona wygląda nowocześnie i jest niepowtarzalna.</p>
                    </div>
                    <div data-aos="zoom-in" className={style.sectionTechDesc_item}>
                        {iconTech}
                        <h2 className={style.sectionTechDesc_h2}>Technologia</h2>
                        <p className={style.sectionTechDesc_p}>Kożystam z najnowszych technologi i stosuję się do aktualnych trendów. Stale ulepszam jakość swoich usług oraz narzędzia.</p>
                    </div>
                    <div data-aos="zoom-in" className={style.sectionTechDesc_item}>
                        {iconQuality}
                        <h2 className={style.sectionTechDesc_h2}>Jakość</h2>
                        <p className={style.sectionTechDesc_p}>Zawsze stawiam na jakość. Nigdy nie idę na kompromis. Dzięki temu moje produkty są łatwe w utrzymaniu i rozwoju. </p>
                    </div>
                    <div data-aos="zoom-in" className={style.sectionTechDesc_item}>
                        {iconResponsive}
                        <h2 className={style.sectionTechDesc_h2}>Skalowanie</h2>
                        <p className={style.sectionTechDesc_p}>Wszystkie projekty są robione w technoligii RWD dzięki temu są dopasowane do rozdzielczości monitorów oraz urządzeń przenośnych.  </p>
                    </div>
                </section>

                <hr />

                {/* section who I am */}
                <section className={style.section}>
                    <div className={style.section_container}>
                        <div className={style.section_content}>
                            <h1 className={style.section_H1}>KIM JESTEM</h1>
                            <p className={style.section_desc}>Jestem osobą z tytułem mgr inż. Od kilku lat pracuję w branży IT. Mieszkam i pracuję w <strong>Gdynii</strong>. Zajmuję się tworzeniem <strong>stron internetowych</strong>, <strong>aplikacji webowych</strong> oraz <strong>serwisów internetowych</strong>. Przy tworzeniu projektów korzystam z najnowszych i najczęsciej używanych technologii, dlatego każdy projekt jest wysokiej jakości i stosunkowo tani w produkcji oraz utrzymaniu. Dzięki nawiązaniu współpracy z innymi profesjonalnymi programistami jestem w stanie tworzyć duże i skomplikowane projekty.</p>
                        </div>
                    </div>
                    <img data-aos="fade-up" className={style.section_img} src={team} alt='wykonywanie stron internetowych i aplikacji webowych' />
                </section>

                <hr />

                {/* section why me */}
                <section className={style.section}>
                    <div className={style.section_container}>
                        <div className={style.section_content}>
                            <h1 className={style.section_H1}>DLACZEGO JA</h1>
                            <p className={style.section_desc}>Zajmuję się tworzeniem kompleksowych projektów od A-Z. Kożystam z najnowszych technologi jak <strong>React</strong>, <strong>FaaS</strong> i inne. Strony są projektowane jako <strong>RWD</strong> (<strong>Responsive Web Design</strong>) oraz <strong>PWA</strong> (<strong>Progressive Web Apps</strong>) dzięki czemu wyglądją dobrze na komputerze i na urządzeniu mobilnym. Każdy projekt jest przygotowany pod pozycjonowanie strony zgodnie z <strong>SEO</strong>.</p>
                            <p className={style.section_desc}>Cena też jest ważna. Nie trać pieniędzy zamawiając projekt w dużej firmie z ogromnymi kosztami utrzymania. U mnie płacisz tylko za realnie spędzony czas nad projektem a nie za utrzymanie całej infrastruktury. Zapytaj o wycenę a się przekonasz.</p>
                        </div>
                    </div>
                    <img data-aos="fade-up" className={style.section_img} src={why} alt='dlaczego studio-www' />
                </section>

                <hr />

                {/* movie */}
                <video className={style.video} src={intro} autoPlay muted controls alt="intro studio" />

                <hr />

                {/* section technologies */}
                <section className={style.section}>
                    <div data-aos="flip-up" className={style.section_container}>
                        <div className={style.sectionContentTech}>
                            <h1 className={style.section_H1}>Technologie</h1>
                        </div>
                    </div>
                    <div className={style.technologies}>

                        <div className={style.technologiesItem}>
                            <div className={style.technologiesItemContent}>
                                <h2 data-aos="zoom-in" className={style.technologiesItemHeader}><strong>RWD</strong></h2>
                                <h2 className={style.technologiesItemHeader2}>(<strong>Responsive Web Design</strong>)</h2>
                                <p className={style.technologiesItemText}><strong>RWD</strong> to technologia projektowania widoków dzięki której Twoja strona wygląda dobrze na każdym urządzeniu. Niezależnie czy kożystasz z dużego monitora, smartfonu lub tableta, widok automatycznie dopasuje sie do danej rodzielczości.
                                </p>
                                <a href='https://pl.wikipedia.org/wiki/Responsive_web_design' target='blank' className={style.technologiesItemAnchor}>Czytaj więcej...</a>
                            </div>
                            <figure className={style.technologiesItemFigure}>
                                <img data-aos="fade-up-left" className={style.technologiesItemImg} src={rwd} alt='Responsive Web Design' />
                            </figure>
                        </div>

                        <div className={style.technologiesItem}>
                            <div className={style.technologiesItemContent}>
                                <h2 data-aos="zoom-in" className={style.technologiesItemHeader}><strong>PWA</strong></h2>
                                <h2 className={style.technologiesItemHeader2}>(<strong>Progressive Web Apps</strong>)</h2>
                                <p className={style.technologiesItemText}><strong>PWA</strong> to technologia pozwalająca zaprojektować stronę internetową tak aby na urządzeniu mobilnym mogła być używana jak aplikacja mobilna. Można ją zainstalować w telefonie i kożystać w trybie offline. Działa na platformie Android i iOS. Dzięki tej technologi można uzyskać dostęp do fukcji telefonu takich jak aparat, gps, zdjęcia, powiadomienia i inne.
                                </p>
                                <a href='https://pl.wikipedia.org/wiki/Progressive_web_app' target='blank' className={style.technologiesItemAnchor}>Czytaj więcej...</a>
                            </div>
                            <figure className={style.technologiesItemFigure}>
                                <img data-aos="fade-up-left" className={style.technologiesItemImg} src={pwa} alt='Progressive Web Apps' />
                            </figure>
                        </div>

                        <div className={style.technologiesItem}>
                            <div className={style.technologiesItemContent}>
                                <h2 data-aos="zoom-in" className={style.technologiesItemHeader}><strong>TWA</strong></h2>
                                <h2 className={style.technologiesItemHeader2}>(<strong>Trusted Web Activities</strong>)</h2>
                                <p className={style.technologiesItemText}><strong>TWA</strong> to technologia dzięki której twoja aplikacj PWA może być udostępniona w sklepie Google Play. Nie ma potrzeby pisania oddzielnego kodu. TWA oferuje największą wydajność wśród dostępnych rozwiązań i gwarantuje wygodę korzystania z natywnej aplikacji.Wszelkie aktualizacje są automatycznie i nie wymagają ingerencji w sklepie, dzięki czemu utrzymanie całego projektu jest o wiele tańsze.
                                </p>
                                <a href='https://developers.google.com/web/android/trusted-web-activity' target='blank' className={style.technologiesItemAnchor}>Czytaj więcej...</a>
                            </div>
                            <figure className={style.technologiesItemFigure}>
                                <img data-aos="fade-up-left" className={style.technologiesItemImg} src={twa} alt='Trusted Web Activities' />
                            </figure>
                        </div>

                        <div className={style.technologiesItem}>
                            <div className={style.technologiesItemContent}>
                                <h2 data-aos="zoom-in" className={style.technologiesItemHeader}><strong>SEO</strong></h2>
                                <h2 className={style.technologiesItemHeader2}>(<strong>Search Engine Optimization</strong>)</h2>
                                <p className={style.technologiesItemText}><strong>SEO</strong> to projektowanie zgodne z zasadami optymalizacji pozwalającymi na osiągnięcie wysokich wyników w wyszukiwarkach dla wybranówch słów lub fraz kluczowych. Kod strony, jej treść oraz responsywność są dostosowane do aktualnych algorytmów wyszukiwarek w celu poprawienia pozycji danego serwisu na liście wynikowej.
                                </p>
                                <a href='https://pl.wikipedia.org/wiki/Optymalizacja_dla_wyszukiwarek_internetowych' target='blank' className={style.technologiesItemAnchor}>Czytaj więcej...</a>
                            </div>
                            <figure className={style.technologiesItemFigure}>
                                <img data-aos="fade-up-left" className={style.technologiesItemImg} src={seo} alt='Search Engine Optimization' />
                            </figure>
                        </div>

                        <div className={style.technologiesItem}>
                            <div className={style.technologiesItemContent}>
                                <h2 data-aos="zoom-in" className={style.technologiesItemHeader}><strong>FaaS</strong></h2>
                                <h2 className={style.technologiesItemHeader2}>(<strong>Function as a Service</strong>)</h2>
                                <p className={style.technologiesItemText}><strong>FaaS</strong> to usługa chmurowa pozwalająca na bardzo łatwe, sybkie i tanie projektowanie tzw. backendu. Projekty wykonane w oparciu o FaaS dostarczane przez takich gigantów jak Amazon lub Google są bardzo tanie w utrzymaniu, w 100% niezawodne i dobrze zabezpieczone.
                                </p>
                                <a href='https://en.wikipedia.org/wiki/Function_as_a_service' target='blank' className={style.technologiesItemAnchor}>Czytaj więcej...</a>
                            </div>
                            <figure className={style.technologiesItemFigure}>
                                <img data-aos="fade-up-left" className={style.technologiesItemImg} src={faas} alt='Function as a Service' />
                            </figure>
                        </div>

                        <div className={style.technologiesItem}>
                            <div className={style.technologiesItemContent}>
                                <h2 data-aos="zoom-in" className={style.technologiesItemHeader}><strong>React</strong></h2>
                                <h2 className={style.technologiesItemHeader2}>(<strong>JavaScript Library</strong>)</h2>
                                <p className={style.technologiesItemText}><strong>React</strong> to javascriptowa biblioteka służąca do tworzenia interfejsów użytkownika. Aktualnie jest to najczęściej używana biblioteka wykożystywana przy tworzeniu aplikacji webowych, posiadjąca ogromne wsparcie i nowoczesne rozwiązania.
                                </p>
                                <a href='https://pl.wikipedia.org/wiki/React.js' target='blank' className={style.technologiesItemAnchor}>Czytaj więcej...</a>
                            </div>
                            <figure className={style.technologiesItemFigure}>
                                <img data-aos="fade-up-left" className={style.technologiesItemImg} src={react} alt='React JavaScript Library' />
                            </figure>
                        </div>

                    </div>
                </section>

            </main>
        </div >
    )
}

export default Home


const iconAperance = <svg fill="#00c800" height="80px" viewBox="0 0 512 512" width="80px"><g><path d="M476,32H36A28.031,28.031,0,0,0,8,60V380a28.031,28.031,0,0,0,28,28H196.9l-10.67,32H168a8,8,0,0,0-8,8v16H104a8,8,0,0,0,0,16H376a8,8,0,0,0,0-16H352V448a8,8,0,0,0-8-8H325.77L315.1,408H476a28.031,28.031,0,0,0,28-28V60A28.031,28.031,0,0,0,476,32ZM336,456v8H176v-8ZM203.1,440l10.67-32h84.46l10.67,32ZM488,380a12.01,12.01,0,0,1-12,12H36a12.01,12.01,0,0,1-12-12V360H488Zm0-36H24V60A12.01,12.01,0,0,1,36,48H476a12.01,12.01,0,0,1,12,12Z" /><path d="M408,464h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z" /><path d="M446.07,186.79c-.86-1.01-21.6-25-55.28-49.28C345.85,105.12,299.24,88,256,88s-89.85,17.12-134.79,49.51c-33.68,24.28-54.42,48.27-55.28,49.28a8.005,8.005,0,0,0,0,10.42c.86,1.01,21.6,25,55.28,49.28C166.15,278.88,212.76,296,256,296s89.85-17.12,134.79-49.51c33.68-24.28,54.42-48.27,55.28-49.28A8.005,8.005,0,0,0,446.07,186.79ZM256,280c-50.23,0-95.76-25.16-125.11-46.26a350.113,350.113,0,0,1-48.03-41.73C101.55,172.37,172.66,104,256,104c50.23,0,95.76,25.16,125.11,46.26A348.608,348.608,0,0,1,429.14,192C410.45,211.63,339.34,280,256,280Z" /><path d="M256,120a72,72,0,1,0,72,72A72.083,72.083,0,0,0,256,120Zm0,128a56,56,0,1,1,56-56A56.062,56.062,0,0,1,256,248Z" /><path d="M256,176a24,24,0,1,0-24,24A24.027,24.027,0,0,0,256,176Zm-32,0a8,8,0,1,1,8,8A8.009,8.009,0,0,1,224,176Z" /></g></svg>

const iconTech = <svg fill="#00c800" height="80px" viewBox="0 0 512 512" width="80px"><g><path d="m356.217 265.985c5.522 0 10-4.478 10-10s-4.478-10-10-10h-35.269v-18.776h20.302c5.522 0 10-4.478 10-10s-4.478-10-10-10h-20.302v-6.186c0-5.522-4.478-10-10-10h-6.157v-20.273c0-5.522-4.478-10-10-10s-10 4.478-10 10v20.273h-18.806v-35.24c0-5.522-4.478-10-10-10s-10 4.478-10 10v35.24h-18.776v-20.273c0-5.522-4.478-10-10-10s-10 4.478-10 10v20.273h-6.186c-5.522 0-10 4.478-10 10v6.186h-20.273c-5.522 0-10 4.478-10 10s4.478 10 10 10h20.273v18.776h-35.24c-5.522 0-10 4.478-10 10s4.478 10 10 10h35.24v18.806h-20.273c-5.522 0-10 4.478-10 10s4.478 10 10 10h20.273v6.157c0 5.522 4.478 10 10 10h6.186v20.302c0 5.522 4.478 10 10 10s10-4.478 10-10v-20.302h18.776v35.269c0 5.522 4.478 10 10 10s10-4.478 10-10v-35.269h18.806v20.302c0 5.522 4.478 10 10 10s10-4.478 10-10v-20.302h6.157c5.522 0 10-4.478 10-10v-6.157h20.302c5.522 0 10-4.478 10-10s-4.478-10-10-10h-20.302v-18.806zm-145.194 34.963v-89.925h89.925v89.925z" /><path d="m478.02 222.033c-15.242 0-28.169 10.096-32.448 23.952h-39.39c-.028-.422-.051-.843-.082-1.265-.413-5.508-5.21-9.632-10.721-9.223-5.507.413-9.637 5.213-9.223 10.721 4.23 56.333-28.009 108.706-80.227 130.325-66.466 27.542-142.954-4.135-170.502-70.614-27.543-66.466 4.135-142.953 70.613-170.502 52.213-21.63 112.058-7.389 148.918 35.439 3.603 4.186 9.918 4.659 14.103 1.056 4.186-3.603 4.658-9.916 1.056-14.103-.281-.327-.569-.647-.853-.971l27.834-27.833c4.838 2.566 10.261 3.929 15.896 3.929 9.078 0 17.609-3.531 24.021-9.944 6.413-6.413 9.944-14.939 9.944-24.008s-3.531-17.596-9.945-24.008c-6.412-6.413-14.943-9.944-24.021-9.944s-17.609 3.531-24.021 9.944c-6.414 6.412-9.945 14.938-9.945 24.008 0 5.628 1.363 11.047 3.928 15.882l-27.822 27.822c-25.18-22.076-56.603-34.791-89.147-36.936v-39.331c13.872-4.28 23.981-17.219 23.981-32.477 0-18.722-15.244-33.952-33.982-33.952-18.722 0-33.952 15.23-33.952 33.952 0 15.255 10.096 28.192 23.952 32.475v39.352c-16.048 1.086-32.115 4.758-47.6 11.173-15.573 6.453-29.49 15.235-41.516 25.776l-27.854-27.854c2.565-4.835 3.928-10.253 3.928-15.882 0-9.069-3.531-17.596-9.944-24.008-6.413-6.413-14.939-9.944-24.008-9.944s-17.595 3.531-24.007 9.944c0 0 0 0-.001.001-6.413 6.412-9.944 14.938-9.944 24.007s3.531 17.595 9.944 24.007c6.412 6.414 14.938 9.945 24.008 9.945 5.628 0 11.047-1.363 15.882-3.928l27.88 27.879c-21.652 24.822-34.663 56.231-36.906 89.089h-39.42c-4.282-13.856-17.219-23.952-32.475-23.952-18.722.001-33.952 15.232-33.952 33.953 0 18.737 15.23 33.981 33.952 33.981 15.258 0 28.197-10.11 32.477-23.981h39.381c1.05 15.964 4.684 32.021 11.141 47.601 6.454 15.573 15.253 29.473 25.793 41.498l-27.87 27.871c-4.835-2.565-10.253-3.928-15.882-3.928-9.069 0-17.596 3.531-24.008 9.944-6.413 6.413-9.944 14.944-9.944 24.022 0 9.077 3.531 17.608 9.944 24.021 6.412 6.414 14.938 9.945 24.008 9.945 9.068 0 17.595-3.531 24.007-9.944 6.414-6.412 9.945-14.943 9.945-24.021 0-5.635-1.363-11.058-3.929-15.896l27.883-27.884c24.822 21.653 56.227 34.668 89.086 36.908v39.449c-13.856 4.279-23.952 17.205-23.952 32.448 0 18.737 15.23 33.98 33.952 33.98 18.737 0 33.981-15.243 33.981-33.98 0-15.245-10.11-28.174-23.981-32.45v-39.417c15.963-1.051 32.022-4.676 47.598-11.131 15.483-6.41 29.438-15.17 41.551-25.745l27.822 27.822c-2.566 4.838-3.929 10.261-3.929 15.896 0 9.078 3.531 17.609 9.944 24.021 6.413 6.413 14.944 9.944 24.022 9.944 9.077 0 17.608-3.531 24.021-9.944 0 0 0 0 .001-.001 6.413-6.412 9.944-14.943 9.944-24.021s-3.531-17.609-9.944-24.021c-6.412-6.414-14.943-9.945-24.021-9.945-5.635 0-11.058 1.363-15.896 3.929l-27.807-27.807c21.501-24.529 34.729-55.744 36.913-89.164h39.365c4.276 13.872 17.205 23.981 32.45 23.981 18.737 0 33.98-15.244 33.98-33.981.002-18.721-15.241-33.952-33.978-33.952zm-74.906-132.906c2.636-2.636 6.145-4.087 9.88-4.087s7.244 1.451 9.879 4.086c0 0 0 .001.001.001 2.635 2.635 4.086 6.139 4.086 9.865s-1.451 7.229-4.087 9.866c-2.635 2.635-6.144 4.086-9.879 4.086s-7.244-1.451-9.88-4.087-4.087-6.139-4.087-9.865 1.452-7.23 4.087-9.865zm-161.081-55.175c0-7.693 6.259-13.952 13.952-13.952 7.709 0 13.981 6.259 13.981 13.952 0 7.709-6.272 13.98-13.981 13.98-7.693.001-13.952-6.271-13.952-13.98zm-133.176 74.905c-2.636 2.636-6.139 4.087-9.865 4.087s-7.23-1.451-9.865-4.087c-2.636-2.636-4.087-6.139-4.087-9.865s1.451-7.23 4.086-9.865h.001c2.635-2.636 6.139-4.087 9.865-4.087s7.229 1.451 9.866 4.087c2.635 2.635 4.086 6.139 4.086 9.865s-1.451 7.23-4.087 9.865zm-74.905 161.11c-7.693 0-13.952-6.272-13.952-13.981 0-7.693 6.259-13.952 13.952-13.952 7.709 0 13.98 6.259 13.98 13.952.001 7.708-6.271 13.981-13.98 13.981zm74.905 152.906c-2.636 2.636-6.139 4.087-9.865 4.087s-7.23-1.451-9.865-4.086c0 0 0-.001-.001-.001-2.635-2.635-4.086-6.144-4.086-9.879s1.451-7.244 4.087-9.881c2.635-2.635 6.139-4.086 9.865-4.086s7.229 1.451 9.865 4.087 4.087 6.145 4.087 9.88-1.451 7.244-4.087 9.879zm161.11 55.147c0 7.709-6.272 13.98-13.981 13.98-7.693 0-13.952-6.271-13.952-13.98 0-7.693 6.259-13.952 13.952-13.952 7.708-.001 13.981 6.258 13.981 13.952zm133.147-74.906c2.636-2.636 6.145-4.087 9.88-4.087s7.244 1.451 9.879 4.087c2.636 2.636 4.087 6.145 4.087 9.88s-1.451 7.244-4.086 9.879c-.001 0-.001 0-.001 0-2.635 2.636-6.144 4.087-9.879 4.087s-7.244-1.451-9.881-4.087c-2.635-2.635-4.086-6.144-4.086-9.879s1.452-7.244 4.087-9.88zm74.906-133.147c-7.693 0-13.952-6.272-13.952-13.981 0-7.693 6.259-13.952 13.952-13.952 7.709 0 13.98 6.259 13.98 13.952 0 7.708-6.271 13.981-13.98 13.981z" /><path d="m381.311 193.27c-4.94 2.47-6.942 8.477-4.473 13.416l.028.057c1.749 3.498 5.262 5.508 8.918 5.508 1.509 0 3.042-.342 4.484-1.063 4.939-2.47 6.928-8.505 4.458-13.444-2.47-4.942-8.481-6.946-13.415-4.474z" /></g></svg>

const iconQuality = <svg fill="#00c800" height="80px" viewBox="0 0 512 512" width="80px"><g><g><path d="m303.029 61.578c-5.378-1.295-10.771 2.01-12.065 7.378-1.294 5.369 2.009 10.771 7.378 12.065 81.052 19.539 137.659 91.493 137.659 174.979 0 99.252-80.747 180-180 180s-180-80.748-180-180c0-83.483 56.604-155.437 137.652-174.978 5.369-1.295 8.672-6.697 7.378-12.065-1.295-5.369-6.699-8.67-12.065-7.378-42.88 10.339-81.729 35.126-109.39 69.795-28.507 35.729-43.575 78.824-43.575 124.626 0 110.28 89.72 200 200 200s200-89.719 200-200c0-45.803-15.068-88.899-43.577-124.629-27.662-34.668-66.513-59.455-109.395-69.793z" /><path d="m505.976 231.948-11.699-21.827 1.951-26.984c1.876-17.296-5.023-34.176-18.479-45.184l-19.42-15.902-7.639-23.012c-4.278-17.595-17.641-31.737-34.979-36.974l-23.971-7.242-18.358-21.22c-10.862-12.777-27.303-19.423-43.982-17.784l-24.88 2.479-24.457-12.269c-15.072-8.035-33.042-8.042-48.116-.001l-21.826 11.698-26.983-1.952c-17.303-1.876-34.177 5.024-45.184 18.479l-15.903 19.42-23.011 7.639c-17.596 4.278-31.738 17.641-36.975 34.978l-7.241 23.971-21.22 18.359c-12.776 10.862-19.426 27.3-17.785 43.982l2.479 24.88-12.269 24.457c-8.036 15.073-8.042 33.042-.002 48.117l11.699 21.826-1.952 26.984c-1.875 17.296 5.024 34.175 18.479 45.184l19.42 15.902 7.639 23.012c4.277 17.595 17.64 31.737 34.979 36.974l23.97 7.241 18.359 21.221c10.863 12.776 27.297 19.426 43.982 17.784l24.879-2.479 24.455 12.267c7.539 4.02 15.803 6.031 24.067 6.031 8.258 0 16.516-2.008 24.051-6.027l21.827-11.698 26.983 1.952c17.295 1.872 34.175-5.024 45.185-18.479l15.902-19.42 23.013-7.638c17.594-4.278 31.735-17.641 36.972-34.979l7.242-23.97 21.221-18.359c12.776-10.862 19.426-27.3 17.785-43.983l-2.48-24.878 12.268-24.457c8.036-15.074 8.044-33.044.004-48.119zm-17.695 38.786c-.044.082-.087.164-.128.246l-13.626 27.165c-.849 1.692-1.2 3.591-1.013 5.476l2.767 27.75c.998 10.147-3.053 20.157-10.902 26.831l-23.478 20.312c-1.432 1.239-2.482 2.858-3.029 4.67l-8.081 26.745c-3.221 10.664-11.972 18.863-22.837 21.396-.297.069-.591.152-.88.248l-26.174 8.687c-1.797.597-3.388 1.691-4.587 3.156l-17.74 21.666c-6.738 8.236-17.089 12.442-27.681 11.25-.132-.015-.265-.027-.396-.037l-30.062-2.174c-1.893-.136-3.777.266-5.445 1.16l-24.364 13.058c-9.188 4.9-20.162 4.88-29.357-.057-.082-.043-.164-.086-.246-.127l-27.164-13.626c-1.396-.7-2.932-1.062-4.484-1.062-.33 0-.661.016-.992.049l-27.75 2.765c-10.146 1.002-20.157-3.053-26.831-10.901l-20.312-23.478c-1.238-1.432-2.858-2.483-4.671-3.03l-26.745-8.079c-10.665-3.221-18.863-11.972-21.396-22.838-.069-.297-.152-.59-.248-.88l-8.687-26.175c-.596-1.797-1.69-3.387-3.155-4.586l-21.665-17.741c-8.236-6.738-12.442-17.086-11.25-27.68.015-.132.027-.264.037-.397l2.174-30.063c.137-1.888-.266-3.776-1.16-5.445l-13.059-24.362c-4.9-9.188-4.879-20.162.056-29.357.044-.081.086-.163.127-.245l13.626-27.165c.849-1.692 1.2-3.591 1.012-5.475l-2.765-27.752c-.998-10.147 3.053-20.157 10.902-26.831l23.478-20.312c1.432-1.239 2.482-2.858 3.03-4.67l8.08-26.746c3.221-10.664 11.972-18.862 22.838-21.396.297-.069.59-.152.88-.248l26.173-8.688c1.797-.596 3.387-1.69 4.586-3.155l17.742-21.666c6.738-8.235 17.089-12.439 27.68-11.249.132.015.264.027.396.037l30.062 2.174c1.883.134 3.776-.266 5.445-1.16l24.363-13.058c9.187-4.9 20.162-4.88 29.356.056.081.043.163.086.246.127l27.165 13.626c1.692.849 3.591 1.201 5.475 1.012l27.751-2.765c10.146-1 20.157 3.053 26.831 10.902l20.312 23.478c1.238 1.432 2.858 2.482 4.671 3.03l26.745 8.08c10.664 3.221 18.862 11.973 21.396 22.838.069.297.152.59.248.88l8.688 26.173c.597 1.797 1.69 3.387 3.155 4.586l21.666 17.741c8.236 6.738 12.441 17.085 11.249 27.68-.015.132-.027.264-.036.397l-2.174 30.063c-.137 1.888.266 3.776 1.159 5.445l13.059 24.363c4.901 9.19 4.88 20.164-.056 29.358z" /><path d="m212.602 201.516c-1.604-3.38-5.039-5.723-9.029-5.723h-52.837c-5.523 0-10 4.477-10 10v151.366c0 5.523 4.477 10 10 10h52.837c4.145 0 7.7-2.521 9.216-6.114 7.623 1.07 15.476 3.238 23.652 5.502 12.292 3.403 25.001 6.922 38.206 6.922h57.729c17.846 0 32.307-9.461 38.684-25.31 3.106-7.722 3.65-15.736 1.835-22.445 3.32-2.985 6.126-6.701 8.248-11.04 4.301-8.792 5.16-18.679 2.722-27.006 4.544-4.39 7.934-10.187 9.706-17.022 1.657-6.39 1.628-12.695.154-18.158 9.02-5.306 15.095-14.946 15.095-25.808 0-8.519-3.317-16.369-9.341-22.103-5.784-5.506-13.488-8.539-21.692-8.539l-81.371.002c-6.182-7.755-8.106-18.279-4.586-26.75 7.224-17.386 6.776-32.103-1.449-47.717-6.106-11.589-22.524-23.127-36.323-21.157-8.341 1.192-14.376 7.087-16.146 15.771-.521 2.555-.664 5.315-.829 8.511-.408 7.884-.968 18.682-7.774 31.721-4.613 8.839-6.152 17.93-7.51 25.951-1.945 11.49-2.888 17.025-9.197 19.146zm-51.866 14.277h32.837v131.366h-32.837zm80.783-30.085c1.165-6.881 2.369-13.997 5.521-20.034 8.823-16.904 9.57-31.325 10.017-39.941.119-2.295.231-4.463.453-5.553.001-.007.003-.015.005-.022 3.469.048 12.006 4.731 15.171 10.739 5.478 10.396 5.66 18.723.676 30.721-4.495 10.818-4.157 23.371.289 34.532-4.865.677-8.613 4.842-8.613 9.893 0 5.522 4.478 10 10 10l102.749-.003c3.047 0 5.854 1.074 7.902 3.024 1.429 1.359 3.131 3.785 3.131 7.617 0 5.364-4.917 10.002-10.738 10.129l-25.739.56c-5.521.12-9.9 4.693-9.78 10.215.119 5.448 4.571 9.783 9.994 9.783.073 0 .147 0 .222-.002l21.436-.466c.699 1.981 1.063 5.76-.409 10.089-1.253 3.682-4.616 9.858-13.076 9.858-5.522 0-10 4.477-10 10s4.478 10 10 10c1.516 0 3.004-.094 4.46-.279.124 2.83-.458 6.145-2.011 9.319-1.836 3.752-5.465 8.226-12.327 8.226-5.522 0-10 4.477-10 10s4.478 10 10 10c1.035 0 2.059-.046 3.07-.137-.026 1.919-.416 4.318-1.507 6.942-1.568 3.774-6.661 12.551-20.037 12.551h-57.729c-10.487 0-21.359-3.01-32.869-6.197-9.159-2.536-18.55-5.134-28.205-6.294v-119.223c22.514-4.08 25.618-22.306 27.944-36.047z" /><path d="m256.002 76.001c5.523 0 10-4.477 10-10s-4.477-10-10-10h-.007c-5.523 0-9.996 4.477-9.996 10s4.48 10 10.003 10z" /></g></g></svg>

const iconResponsive = <svg fill="#00c800" height="80px" width="80px" viewBox="0 0 512 512">
    <path d="M456,0H168c-13.255,0-24,10.745-24,24v176H40c-13.255,0-24,10.745-24,24v160H8c-4.418,0-8,3.582-8,8
       c0.026,22.08,17.92,39.974,40,40h256c22.069,0.022,39.978-17.851,40-39.92c0-0.027,0-0.053,0-0.08c0-4.418-3.582-8-8-8h-8v-88h88
       c4.418,0,8-3.582,8-8s-3.582-8-8-8h-41.968l-11.424-40H456c13.255,0,24-10.745,24-24V24C480,10.745,469.255,0,456,0z M32,224
       c0-4.418,3.582-8,8-8h256c4.418,0,8,3.582,8,8v160H192c-4.418,0-8,3.582-8,8h-32c0-4.418-3.582-8-8-8H32V224z M313.024,408.944
       c-4.519,4.51-10.64,7.047-17.024,7.056H40c-10.168-0.012-19.229-6.418-22.632-16H136c0,4.418,3.582,8,8,8h48c4.418,0,8-3.582,8-8
       h118.632C317.44,403.356,315.525,406.409,313.024,408.944z M320,280v-40h17.968l11.424,40H320z M464,216c0,4.418-3.582,8-8,8H320
       c0-13.255-10.745-24-24-24H160V24c0-4.418,3.582-8,8-8h288c4.418,0,8,3.582,8,8V216z"/>
    <path d="M440,304h-64c-13.255,0-24,10.745-24,24v128c0,13.255,10.745,24,24,24h64c13.255,0,24-10.745,24-24V328
       C464,314.745,453.255,304,440,304z M448,456c0,4.418-3.582,8-8,8h-64c-4.418,0-8-3.582-8-8V328c0-4.418,3.582-8,8-8h64
       c4.418,0,8,3.582,8,8V456z"/>
</svg>