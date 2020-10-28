import React, { useState, useEffect } from 'react'
import style from './Login.module.css'

//components
import LoginRegisterFirebaseUI from './LoginRegisterFirebaseUI/LoginRegisterFirebaseUI'

//firebase
import { auth } from '../../shared/fire'

// img
import waiting from '../../assets/waiting.jpg'

// constans
import { IS_AUTH } from '../../shared/constans'


const Login = props => {

    const [data, setData] = useState('')

    // scroll to top when componene render
    useEffect(() => {
        window.scrollTo(0, 0)

        const dataFromDB = {
            name: '-',
            purchaser: '-',
            start: '-',
            time: '-',
            stop: '-',
            price: '-',
            url: '-',
            domain: '-',
            decription: '-',
            progress: '-',
            comments: '-',
        }
        setData(dataFromDB)

    }, [])

    // log out button
    const handlerLogOut = () => {
        auth.signOut() // sign out
        props.history.replace('/home') // go to home
    }

    return (
        JSON.parse(localStorage.getItem(IS_AUTH))

            // user log in
            ? <div className={style.background}>
                <div className={style.projectContainer}>
                    <h1 className={style.projectHeader}>Poniżej znajdziesz wszelkie informację dotyczące Twojego projeku</h1>
                    <div className={style.projectCoontent}>

                        <div className={style.projectCoontentItem}>
                            <p className={style.projectDesc}>Nazwa projektu: </p>
                            <p className={style.projectText}>{data.name}</p>
                        </div>

                        <div className={style.projectCoontentItem}>
                            <p className={style.projectDesc}>Nazwa zamawiającego: </p>
                            <p className={style.projectText}>{data.purchaser}</p>
                        </div>

                        <div className={style.projectCoontentItem}>
                            <p className={style.projectDesc}>Data rozpoczecia: </p>
                            <p className={style.projectText}>{data.start}</p>
                        </div>

                        <div className={style.projectCoontentItem}>
                            <p className={style.projectDesc}>Przewidywany czas wykonania: </p>
                            <p className={style.projectText}>{data.time}</p>
                        </div>

                        <div className={style.projectCoontentItem}>
                            <p className={style.projectDesc}>Data zakończenia: </p>
                            <p className={style.projectText}>{data.stop}</p>
                        </div>

                        <div className={style.projectCoontentItem}>
                            <p className={style.projectDesc}>Cena: </p>
                            <p className={style.projectText}>{`${data.price} zł`}</p>
                        </div>

                        <div className={style.projectCoontentItem}>
                            <p className={style.projectDesc}>Adres URL roboczy: </p>
                            <p className={style.projectText}>{data.url}</p>
                        </div>

                        <div className={style.projectCoontentItem}>
                            <p className={style.projectDesc}>Docelowa domena: </p>
                            <p className={style.projectText}>{data.domain}</p>
                        </div>

                        <div className={style.projectCoontentItem}>
                            <p className={style.projectDesc}>Krótki opis: </p>
                            <p className={style.projectText}>{data.decription}</p>
                        </div>

                        <div className={style.projectCoontentItem}>
                            <p className={style.projectDesc}>Postęp prac: </p>
                            <p className={style.projectText}>{`${data.progress} %`}</p>
                        </div>

                        <div className={style.projectCoontentItem}>
                            <p className={style.projectDesc}>Uwagi: </p>
                            <p className={style.projectText}>{data.comments}</p>
                        </div>


                    </div>

                    <button className={style.btn} onClick={handlerLogOut}>Wyloguj</button>
                </div>
            </div>

            // user log out
            : <LoginRegisterFirebaseUI />
    )
}

export default Login
