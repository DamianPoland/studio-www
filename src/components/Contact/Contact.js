import React, { useState } from 'react'
import style from './Contact.module.css'
import axios from 'axios'

// components
import Alert from '../../UI/Alert/Alert'
import Spinner from '../../UI/Spinner/Spinner'

const Contact = () => {

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

    // click Send
    const sendMessage = event => {
        event.preventDefault()
        // validation 
        let isInvalid = false

        // name validation if is min 3 chars
        if (inputName.trim().length < 3) {
            setInputNameIsInvalid(true)
            isInvalid = true
        } else {
            setInputNameIsInvalid(false)
        }

        //email validation
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(inputEmail).toLowerCase())) {
            setInputEmailIsInvalid(true)
            isInvalid = true
        } else {
            setInputEmailIsInvalid(false)
        }

        // message validation if is min 10 chars
        if (inputMessage.trim().length <= 10) {
            setInputMessageIsInvalid(true)
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
                setInputName('') // clear input
                setInputEmail('') // clear input
                setInputMessage('') // clear input
                setIsAlertShow(true) // show alert
            })
            .catch(err => console.log('sendEmail error.message', err.message))
            .finally(() => setIsSpinnerShow(false))
    }

    return (
        <section className={style.background}>
            <div className={style.section}>
                <div className={style.head}>
                    <h1 className={style.header}>Skontaktuj się</h1>
                    <p className={style.line}></p>
                </div>
                <div className={style.contact}>
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

                    <form className={style.form}>

                        {isAlertShow && <Alert click={() => setIsAlertShow(false)} alertIcon='info' alertColor='#00c800' alertInfo='Informacja' alertName='Wiadomość' alertDetails='Dziękuję za kontakt. Odezwę się w najbliższym czasie. Pozdrawiam' />}

                        {isSpinnerShow && <Spinner />}

                        <div className={style.inputContainer}>
                            <input onChange={event => setInputName(event.target.value)} value={inputName} onFocus={() => setInputNameIsInvalid(false)} className={`${style.input} ${inputNameIsInvalid && style.inputIsInvalid}`} type='text' required />
                            <label className={style.label}>Twoje imię</label>
                        </div>

                        <div className={style.inputContainer}>
                            <input onChange={event => setInputEmail(event.target.value)} value={inputEmail} onFocus={() => setInputEmailIsInvalid(false)} className={`${style.input} ${inputEmailIsInvalid && style.inputIsInvalid}`} type='text' required />
                            <label className={style.label}>Twój e-mail</label>
                        </div>

                        <div className={style.inputContainer}>
                            <textarea onChange={event => setInputMessage(event.target.value)} value={inputMessage} onFocus={() => setInputMessageIsInvalid(false)} className={`${style.input} ${inputMessageIsInvalid && style.inputIsInvalid}`} type='textarea' rows='5' required />
                            <label className={style.label}>Wiadomość</label>
                        </div>


                        <button onClick={sendMessage} className={style.btn}>Wyślij</button>
                    </form>
                </div>
            </div>
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
