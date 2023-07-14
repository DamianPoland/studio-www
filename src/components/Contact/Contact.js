import React, { useState, useEffect } from 'react'
import style from './Contact.module.css'
import './Contact.css'
import axios from 'axios'

// components
import Alert from '../../UI/Alert/Alert'
import Spinner from '../../UI/Spinner/Spinner'

//svg
import { ReactComponent as Phone } from '../../assets/icons/phone.svg'
import { ReactComponent as Location } from '../../assets/icons/location.svg'
import { ReactComponent as Email } from '../../assets/icons/email.svg'
import { ReactComponent as Facebbok } from '../../assets/icons/facebook.svg'
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedIn.svg'
import { ReactComponent as GitHub } from '../../assets/icons/gitHub.svg'
import { ReactComponent as Clock } from '../../assets/icons/clock.svg'
import { ReactComponent as Envelope } from '../../assets/icons/envelope.svg'
import { ReactComponent as ContactIcon } from '../../assets/icons/contact_us.svg'




const Contact = () => {


    useEffect(() => { window.scrollTo(0, 0) }, [])


    const [inputName, setInputName] = useState('') // input value
    const [inputNameIsInvalid, setInputNameIsInvalid] = useState(false) // only for set isValid/inInvalid before send
    const [inputEmail, setInputEmail] = useState('') // input value
    const [inputEmailIsInvalid, setInputEmailIsInvalid] = useState(false) // only for set isValid/inInvalid before send
    const [inputMessage, setInputMessage] = useState('') // input value
    const [inputMessageIsInvalid, setInputMessageIsInvalid] = useState(false) // only for set isValid/inInvalid before send
    const [isAlertShow, setIsAlertShow] = useState(false)
    const [isSpinnerShow, setIsSpinnerShow] = useState(false)
    const [isFormAnimation, setIsFormAnimation] = useState(false)


    const sendMessage = event => {
        event.preventDefault()

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

        if (isInvalid) return

        setIsSpinnerShow(true)

        //sent email
        axios.put(process.env.REACT_APP_TO_SEND_EMAIL_PATH, { name: inputName, email: inputEmail, message: inputMessage })
            .then(resp => {

                setIsSpinnerShow(false)

                setIsFormAnimation(true)
                const okId = document.querySelector('#okId')
                okId.classList.add(style.svgOkIdAnim)

                setTimeout(() => {
                    setInputName('')
                    setInputEmail('')
                    setInputMessage('')
                }, 1000)

                setTimeout(() => {
                    setIsFormAnimation(false)
                    okId.classList.remove(style.svgOkIdAnim)
                }, 4000)

            })
            .catch(err => {
                setIsSpinnerShow(false)
                setIsAlertShow(true)
            })
    }

    return (
        <section className={style.section}>

            <div className={style.start__svg} data-aos="zoom-in">
                <ContactIcon />
            </div>

            <div className={style.section__container}>

                {/* contact links  */}
                <div className={style.contacts}>
                    <div className={style.contacts__container}>
                        <div className={style.contacts__item}>
                            <a href={`http://maps.google.com/?q=studio-www, Bydgoszcz ul. Filtrowa 17`} target='_blank' rel="noopener noreferrer" className={style.svg}><Location /></a>
                            <p className={style.contacts__desc}>Poland, Bydgoszcz, Filtrowa 27</p>
                        </div>
                        <div className={style.contacts__item}>
                            <a href='tel:+48887638907' className={style.svg}><Phone /></a>
                            <p className={style.contacts__desc}>+48 887-638-907</p>
                        </div>
                        <div className={style.contacts__item}>
                            <a href='mailto:info@studio-www.com?subject=Zapytanie' className={style.svg}><Email /></a>
                            <p className={style.contacts__desc}>info@studio-www.com</p>
                        </div>
                        <div className={style.contacts__item}  >
                            <a href='https://www.fb.me/AplikacjeIStronyInternetowe' target='_blank' rel="noopener noreferrer" className={style.svg}><Facebbok /></a>
                            <p className={style.contacts__desc}>@AplikacjeIStronyInternetowe</p>
                        </div>
                        {/* <div className={style.contacts__item}  >
                            <a href='https://www.linkedin.com/in/damian-wilczy%C5%84ski-9b1124195/' target='_blank' rel="noopener noreferrer" className={style.svg}><LinkedIn /></a>
                            <p className={style.contacts__desc}>LinkedIn</p>
                        </div> */}
                        {/* <div className={style.contacts__item}  >
                            <a href='https://github.com/DamianPoland' target='_blank' rel="noopener noreferrer" className={style.svg}><GitHub /></a>
                            <p className={style.contacts__desc}>GitHub</p>
                        </div> */}
                        <div className={style.contacts__item} >
                            <a href='/' className={style.svg}><Clock /></a>
                            <p className={style.contacts__desc}>Pn - Pt 8.00-16.00</p>
                        </div>
                    </div>
                </div>

                {/* form */}
                <div className={style.form}>
                    <div className={style.form__container}>
                        {isAlertShow && <Alert click={() => setIsAlertShow(false)} alertName='Przepraszamy' alertDetails='Wiadomości nie udało się wysłać. Proszę skorzystać z innej formy kontaktu' />}
                        <form className={`${style.form__content} ${isFormAnimation && style.form__anim}`} onSubmit={sendMessage} noValidate>
                            {isSpinnerShow && <Spinner />}
                            <div className={style.input__container}>
                                <input onChange={event => setInputName(event.target.value)} value={inputName} onFocus={() => setInputNameIsInvalid(false)} className={`${style.input} ${inputNameIsInvalid && style.input__isInvalid}`} type='text' required />
                                <label className={style.label}>Twoje imię</label>
                                {inputNameIsInvalid && <p className={style.isValid}>{inputNameIsInvalid}</p>}
                            </div>
                            <div className={style.input__container}>
                                <input onChange={event => setInputEmail(event.target.value)} value={inputEmail} onFocus={() => setInputEmailIsInvalid(false)} className={`${style.input} ${inputEmailIsInvalid && style.input__isInvalid}`} type='text' required />
                                <label className={style.label}>Twój e-mail</label>
                                {inputEmailIsInvalid && <p className={style.isValid}>{inputEmailIsInvalid}</p>}
                            </div>
                            <div className={style.input__container}>
                                <textarea onChange={event => setInputMessage(event.target.value)} value={inputMessage} onFocus={() => setInputMessageIsInvalid(false)} className={`${style.input} ${inputMessageIsInvalid && style.input__isInvalid}`} type='textarea' rows='5' required />
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
        </section>
    )
}

export default Contact

