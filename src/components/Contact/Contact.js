import React, { useState, useEffect } from 'react'
import style from './Contact.module.css'
import axios from 'axios'

// components
import Alert from '../../UI/Alert/Alert'
import Spinner from '../../UI/Spinner/Spinner'

// images
import BackgroundImg from '../../assets/contact.jpg'


const Contact = () => {

    // scroll to top when componene render
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // is loading background image - only first time
    const [isLoading, setIsLoading] = useState(true) // input value

    // input Name
    const [inputName, setInputName] = useState('') // input value
    const [inputNameIsInvalid, setInputNameIsInvalid] = useState(false) // only for set isValid/inInvalid before send

    // input Email
    const [inputEmail, setInputEmail] = useState('') // input value
    const [inputEmailIsInvalid, setInputEmailIsInvalid] = useState(false) // only for set isValid/inInvalid before send

    // input Message
    const [inputMessage, setInputMessage] = useState('') // input value
    const [inputMessageIsInvalid, setInputMessageIsInvalid] = useState(false) // only for set isValid/inInvalid before send

    // Alert
    const [isAlertShow, setIsAlertShow] = useState(false)

    // Spinner
    const [isSpinnerShow, setIsSpinnerShow] = useState(false)

    // form animation
    const [isFormAnimation, setIsFormAnimation] = useState(false)

    // click Send
    const sendMessage = event => {
        event.preventDefault()
        // validation 
        let isInvalid = false

        // name validation if is min 3 chars
        if (inputName.trim().length < 3) {
            setInputNameIsInvalid("Niepoprawne imię.")
            isInvalid = true
        } else {
            setInputNameIsInvalid(false)
        }

        //email validation
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(inputEmail).toLowerCase())) {
            setInputEmailIsInvalid("Niepoprawny adres e-mail.")
            isInvalid = true
        } else {
            setInputEmailIsInvalid(false)
        }

        // message validation if is min 10 chars
        if (inputMessage.trim().length <= 10) {
            setInputMessageIsInvalid("Wiadomość powinna zawierać minimum 10 znaków")
            isInvalid = true
        } else {
            setInputMessageIsInvalid(false)
        }

        //check if all inputs are valid
        if (isInvalid) {
            return
        }

        //show spinner
        setIsSpinnerShow(true)

        //sent email
        axios.put(process.env.REACT_APP_TO_SEND_EMAIL_PATH, { name: inputName, email: inputEmail, message: inputMessage })
            .then(resp => {

                // turn off spinner
                setIsSpinnerShow(false)

                // turn on animation sent
                setIsFormAnimation(true)
                const okId = document.querySelector('#okId')
                okId.classList.add(style.svgOkIdAnim)

                // clear inputs after 1s when during animation
                setTimeout(() => {
                    setInputName('') // clear input
                    setInputEmail('') // clear input
                    setInputMessage('') // clear input
                }, 1000)

                // clear animation classes after 4s when animations stop
                setTimeout(() => {
                    setIsFormAnimation(false)
                    okId.classList.remove(style.svgOkIdAnim)
                }, 4000)

            })
            .catch(err => {
                setIsSpinnerShow(false) // turn off spinner
                setIsAlertShow(true) // show error alert
            })
        // .finally(() => setIsSpinnerShow(false))
    }

    return (
        <section className={style.background}>
            < img className={style.backgroundImg} src={BackgroundImg} alt="background contact" onLoad={() => setIsLoading(false)} />
            {isLoading
                ? <Spinner />
                : <div className={style.section}>
                    <div className={style.head}>
                        <h1 className={style.header}>Skontaktuj się</h1>
                        <p className={style.line}></p>
                    </div>
                    <div className={style.contact}>

                        {/* contact links  */}
                        <div className={style.content}>
                            <a className={style.contentItem} href='https://goo.gl/maps/sg7GDACAWaiDKWjL6' target='blank' >
                                <p className={style.contentIcon}>{location}</p>
                                <p className={style.contentDesc}>Poland, Gdynia, Kaliska 22</p>
                            </a>
                            <a className={style.contentItem} href='tel:+48795631039'>
                                <p className={style.contentIcon}>{phone}</p>
                                <p className={style.contentDesc}>+48 795-631-039</p>
                            </a>
                            <a className={style.contentItem} href='mailto:info@studio-www.com?subject=Zapytanie'>
                                <p className={style.contentIcon}>{email}</p>
                                <p className={style.contentDesc}>info@studio-www.com</p>
                            </a>
                            <a className={style.contentItem} href='https://www.fb.me/StudioWWWGdynia' target='blank' >
                                <p className={style.contentIcon}>{facebbok}</p>
                                <p className={style.contentDesc}>@StudioWWWGdynia</p>
                            </a>
                            <a className={style.contentItem} href='/'>
                                <p className={style.contentIcon}>{clock}</p>
                                <p className={style.contentDesc}>Pn - Pt 8.00-16.00</p>
                            </a>
                        </div>

                        {/* form */}
                        <div className={style.formContainer}>
                            <form className={`${style.form} ${isFormAnimation && style.formAnim}`} onSubmit={sendMessage} noValidate>
                                {isAlertShow && <Alert click={() => setIsAlertShow(false)} alertName='Przepraszamy' alertDetails='Wiadomości nie udało się wysłać. Proszę skorzystać z innej formy kontaktu' />}
                                {isSpinnerShow && <Spinner />}
                                <div className={style.inputContainer}>
                                    <input onChange={event => setInputName(event.target.value)} value={inputName} onFocus={() => setInputNameIsInvalid(false)} className={`${style.input} ${inputNameIsInvalid && style.inputIsInvalid}`} type='text' required />
                                    <label className={style.label}>Twoje imię</label>
                                    {inputNameIsInvalid && <p className={style.isValid}>{inputNameIsInvalid}</p>}
                                </div>
                                <div className={style.inputContainer}>
                                    <input onChange={event => setInputEmail(event.target.value)} value={inputEmail} onFocus={() => setInputEmailIsInvalid(false)} className={`${style.input} ${inputEmailIsInvalid && style.inputIsInvalid}`} type='text' required />
                                    <label className={style.label}>Twój e-mail</label>
                                    {inputEmailIsInvalid && <p className={style.isValid}>{inputEmailIsInvalid}</p>}
                                </div>
                                <div className={style.inputContainer}>
                                    <textarea onChange={event => setInputMessage(event.target.value)} value={inputMessage} onFocus={() => setInputMessageIsInvalid(false)} className={`${style.input} ${inputMessageIsInvalid && style.inputIsInvalid}`} type='textarea' rows='5' required />
                                    <label className={style.label}>Wiadomość</label>
                                    {inputMessageIsInvalid && <p className={style.isValid}>{inputMessageIsInvalid}</p>}
                                </div>
                                <input className={style.btn} type="submit" value="Wyślij" />
                            </form>
                            <div className={`${style.envelope} ${isFormAnimation && style.envelopeAnim}`}>
                                {envelope}
                            </div>
                        </div>

                    </div>
                </div>
            }
        </section>
    )
}

export default Contact


const location = <svg className={style.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
    <path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
</svg>

const phone = <svg className={style.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M0 0h24v24H0z" fill="none" />
    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
</svg>

const email = <svg className={style.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
    <path d="M0 0h24v24H0z" fill="none" /><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
</svg>

const clock = <svg className={style.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
    <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M16.2,16.2L11,13V7h1.5v5.2l4.5,2.7L16.2,16.2z" />
</svg>

const facebbok = <svg className={style.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.124 96.123" fill="white">
    <path d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803 c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654 c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246 c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z" />
</svg>

const envelope = <svg width="570" height="512" viewBox="0 0 570 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="envelopeTopId">
        <path id="Vector" d="M564.999 195.675C564.795 195.675 564.596 195.612 564.428 195.496L287.87 2.89208C287.028 2.30868 286.028 1.9969 285.004 1.99865C283.98 2.0004 282.981 2.31558 282.141 2.90185L7.57436 195.494C7.35718 195.646 7.08841 195.706 6.82713 195.66C6.56586 195.614 6.33349 195.466 6.18117 195.249C6.02884 195.032 5.96902 194.763 6.01488 194.502C6.06073 194.241 6.2085 194.008 6.42567 193.856L280.993 1.26415C282.168 0.443505 283.567 0.00236562 285.001 9.48758e-06C286.434 -0.00234665 287.834 0.434189 289.013 1.25097L565.571 193.854C565.746 193.976 565.878 194.15 565.946 194.352C566.015 194.553 566.018 194.771 565.954 194.974C565.89 195.178 565.763 195.355 565.591 195.481C565.42 195.607 565.212 195.675 564.999 195.675L564.999 195.675Z" fill="#3F3D56" />
        <path id="Polygon 1" d="M285 0L563.86 196.5L285 348L6.13983 196.5L285 0Z" fill="#DFDFDF" />
    </g>
    <g id="letterId">
        <g id="Vector_2" filter="url(#filter0_d)">
            <path d="M289.46 311C288.476 311.001 287.502 310.81 286.591 310.437L125 243.267V33.0127C125.002 31.1535 125.74 29.371 127.053 28.0564C128.365 26.7417 130.144 26.0022 132 26H442C443.856 26.0022 445.635 26.7417 446.947 28.0564C448.26 29.371 448.998 31.1535 449 33.0127V243.413L448.696 243.544L292.416 310.404C291.48 310.798 290.475 311.001 289.46 311Z" fill="white" />
            <path d="M289.46 310.5H289.459C288.541 310.501 287.631 310.322 286.78 309.974L125.5 242.933V33.013C125.502 31.286 126.188 29.6305 127.406 28.4096C128.625 27.1887 130.277 26.5021 132 26.5H442C443.723 26.5021 445.375 27.1887 446.594 28.4096C447.812 29.6306 448.498 31.2862 448.5 33.0133V243.084L448.5 243.084L448.499 243.084L292.222 309.943C291.348 310.311 290.409 310.501 289.46 310.5Z" stroke="black" />
        </g>
        <g id="Vector_3" filter="url(#filter1_d)">
            <path d="M288.96 311.159C287.911 311.16 286.872 310.957 285.901 310.56L124 243.383V33.1746C124.002 31.1862 124.793 29.2798 126.199 27.8738C127.605 26.4678 129.512 25.6769 131.5 25.6746H441.5C443.489 25.6769 445.395 26.4678 446.801 27.8738C448.207 29.2798 448.998 31.1862 449 33.1746V243.525L292.112 310.524C291.115 310.944 290.043 311.16 288.96 311.159V311.159ZM126 242.047L286.663 308.711C288.162 309.319 289.84 309.309 291.331 308.683L447 242.205V33.1746C446.999 31.7165 446.419 30.3185 445.387 29.2874C444.356 28.2564 442.958 27.6763 441.5 27.6746H131.5C130.042 27.6763 128.644 28.2564 127.613 29.2874C126.582 30.3185 126.002 31.7165 126 33.1746L126 242.047Z" fill="#3F3D56" />
            <path d="M124.5 243.049L286.09 310.097C286.09 310.098 286.09 310.098 286.09 310.098C287.001 310.469 287.976 310.66 288.96 310.659L124.5 243.049ZM124.5 243.049V33.1749C124.502 31.319 125.241 29.5397 126.553 28.2274C127.865 26.915 129.645 26.1768 131.5 26.1746H441.5C443.356 26.1768 445.135 26.915 446.447 28.2274C447.76 29.5398 448.498 31.3192 448.5 33.1752V243.195L291.919 310.063C291.918 310.063 291.918 310.064 291.918 310.064L124.5 243.049ZM125.5 242.047L125.5 242.381L125.809 242.509L286.472 309.173L286.475 309.175C288.096 309.832 289.912 309.821 291.525 309.144L291.528 309.143L447.197 242.665L447.5 242.535V242.205V33.1746V33.174C447.498 31.5835 446.866 30.0586 445.741 28.9339C444.616 27.8092 443.091 27.1765 441.501 27.1746H441.5L131.5 27.1746L131.5 27.1746C129.909 27.1765 128.384 27.8092 127.26 28.9339C126.135 30.0586 125.502 31.5835 125.5 33.174V33.1746L125.5 242.047Z" stroke="black" />
        </g>
    </g>
    <g id="envelopeId">
        <path id="Vector_4" d="M563 193.675H562.8L448 242.695L290.93 309.765C290.316 310.023 289.658 310.158 288.992 310.161C288.326 310.165 287.666 310.037 287.05 309.785L125 242.555L7.37988 193.755L7.2002 193.675H7C5.14412 193.677 3.36483 194.415 2.05252 195.727C0.740212 197.04 0.00205925 198.819 0 200.675V504.675C0.00206189 506.531 0.740213 508.31 2.05252 509.622C3.36483 510.935 5.14412 511.673 7 511.675H563C564.856 511.673 566.635 510.935 567.947 509.622C569.26 508.31 569.998 506.531 570 504.675V200.675C569.998 198.819 569.26 197.04 567.947 195.727C566.635 194.415 564.856 193.677 563 193.675ZM568 504.675C567.999 506.001 567.473 507.272 566.535 508.21C565.597 509.147 564.326 509.674 563 509.675H7C5.67408 509.674 4.40262 509.147 3.46506 508.21C2.52749 507.272 2.00053 506.001 2 504.675V200.675C2.00181 199.382 2.50336 198.14 3.39978 197.208C4.2962 196.276 5.5181 195.727 6.81006 195.675L125 244.715L286.28 311.635C288.026 312.345 289.982 312.334 291.72 311.605L448 244.865L563.2 195.675C564.49 195.731 565.708 196.281 566.602 197.213C567.496 198.144 567.997 199.384 568 200.675V504.675Z" fill="#551020" />
        <path id="Rectangle 1" d="M2 195L285 314L568 195V510H2V355V195Z" fill="#D1D1D1" />
    </g>
    <g id="okId" className={style.svgOkId}>
        <path id="Vector_5" d="M174.256 456.541H44.8152C44.0204 456.542 43.2332 456.386 42.4986 456.083C41.764 455.78 41.0964 455.334 40.5341 454.773C39.9717 454.211 39.5256 453.544 39.2212 452.81C38.9168 452.076 38.7601 451.289 38.7601 450.494C38.7601 449.699 38.9168 448.912 39.2212 448.178C39.5256 447.443 39.9717 446.777 40.5341 446.215C41.0964 445.653 41.764 445.208 42.4986 444.904C43.2332 444.601 44.0204 444.445 44.8152 444.446H174.256C175.05 444.445 175.838 444.601 176.572 444.904C177.307 445.208 177.974 445.653 178.537 446.215C179.099 446.777 179.545 447.443 179.85 448.178C180.154 448.912 180.311 449.699 180.311 450.494C180.311 451.289 180.154 452.076 179.85 452.81C179.545 453.544 179.099 454.211 178.537 454.773C177.974 455.334 177.307 455.78 176.572 456.083C175.838 456.386 175.05 456.542 174.256 456.541V456.541Z" fill="#00C800" />
        <path id="Vector_6" d="M91.2555 430.541H44.8152C44.0204 430.542 43.2332 430.386 42.4986 430.083C41.764 429.78 41.0964 429.334 40.5341 428.773C39.9717 428.211 39.5256 427.544 39.2212 426.81C38.9168 426.076 38.7601 425.289 38.7601 424.494C38.7601 423.699 38.9168 422.912 39.2212 422.178C39.5256 421.443 39.9717 420.777 40.5341 420.215C41.0964 419.653 41.764 419.208 42.4986 418.904C43.2332 418.601 44.0204 418.445 44.8152 418.446H91.2555C92.0503 418.445 92.8375 418.601 93.5721 418.904C94.3067 419.208 94.9743 419.653 95.5367 420.215C96.0991 420.777 96.5452 421.443 96.8496 422.178C97.154 422.912 97.3107 423.699 97.3107 424.494C97.3107 425.289 97.154 426.076 96.8496 426.81C96.5452 427.544 96.0991 428.211 95.5367 428.773C94.9743 429.334 94.3067 429.78 93.5721 430.083C92.8375 430.386 92.0503 430.542 91.2555 430.541Z" fill="#00C800" />
        <path id="Vector_7" d="M287.345 251.147C281.38 251.158 275.572 249.229 270.799 245.651L270.503 245.429L208.192 197.721C205.306 195.51 202.884 192.752 201.065 189.605C199.245 186.458 198.062 182.983 197.585 179.379C197.108 175.775 197.346 172.113 198.284 168.601C199.223 165.088 200.844 161.795 203.055 158.91C205.266 156.024 208.024 153.602 211.171 151.782C214.318 149.962 217.792 148.78 221.396 148.303C225 147.826 228.663 148.063 232.175 149.001C235.688 149.94 238.981 151.561 241.866 153.772L282.227 184.72L377.605 60.333C379.817 57.448 382.575 55.027 385.723 53.2081C388.871 51.3892 392.346 50.2082 395.95 49.7324C399.554 49.2567 403.217 49.4955 406.729 50.4352C410.241 51.375 413.533 52.9973 416.418 55.2095L415.825 56.0147L416.433 55.2212C422.253 59.6938 426.06 66.2921 427.021 73.5685C427.981 80.845 426.016 88.2053 421.557 94.0347L309.369 240.343C306.775 243.715 303.438 246.443 299.619 248.317C295.799 250.19 291.599 251.159 287.345 251.147V251.147Z" fill="#00C800" />
    </g>
    <defs>
        <filter id="filter0_d" x="121" y="26" width="332" height="293" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter id="filter1_d" x="120" y="25.6746" width="333" height="293.484" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <clipPath id="clip0">
            <rect width="570" height="511.675" fill="white" />
        </clipPath>
    </defs>
</svg>
