import React, { useState, useEffect } from 'react'
import style from './Contact.module.css'
import axios from 'axios'

// components
import Alert from '../../UI/Alert/Alert'
import Spinner from '../../UI/Spinner/Spinner'

// images
import BackgroundImg from '../../assets/background_contact.jpg'

//svg
import { ReactComponent as Phone } from '../../assets/icons/phone.svg'
import { ReactComponent as Location } from '../../assets/icons/location.svg'
import { ReactComponent as Email } from '../../assets/icons/email.svg'
import { ReactComponent as Facebbok } from '../../assets/icons/facebook.svg'
import { ReactComponent as Clock } from '../../assets/icons/clock.svg'
import { ReactComponent as Envelope } from '../../assets/icons/envelope.svg'


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
                            <div className={style.contentItem}>
                                <a href={`http://maps.google.com/?q=studio-www, Gdynia ul. Kaliska 22`} target='blank' className={style.svg}><Location /></a>
                                <p className={style.contentDesc}>Poland, Gdynia, Kaliska 22</p>
                            </div>
                            <div className={style.contentItem}>
                                <a href='tel:+48795631039' className={style.svg}><Phone /></a>
                                <p className={style.contentDesc}>+48 795-631-039</p>
                            </div>
                            <div className={style.contentItem}>
                                <a href='mailto:info@studio-www.com?subject=Zapytanie' className={style.svg}><Email /></a>
                                <p className={style.contentDesc}>info@studio-www.com</p>
                            </div>
                            <div className={style.contentItem}  >
                                <a href='https://www.fb.me/StudioWWWGdynia' target='blank' className={style.svg}><Facebbok /></a>
                                <p className={style.contentDesc}>@StudioWWWGdynia</p>
                            </div>
                            <div className={style.contentItem} >
                                <a href='/' className={style.svg}><Clock /></a>
                                <p className={style.contentDesc}>Pn - Pt 8.00-16.00</p>
                            </div>
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
                                <Envelope />
                            </div>
                        </div>

                    </div>
                </div>
            }
        </section>
    )
}

export default Contact

