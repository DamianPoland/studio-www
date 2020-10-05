import React from 'react'
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

    // log out button
    const handlerLogOut = () => {
        auth.signOut() // sign out
        props.history.replace('/home') // go to home
    }

    return (
        JSON.parse(localStorage.getItem(IS_AUTH))

            // user log in
            ? <div className={style.background}>
                <div className={style.loginContent}>
                    <h1 className={style.loginHeader}>Zostałeś poprawnie zalogowany.</h1>
                    <p className={style.loginDesc}>Aktualnie trwają prace związane z pobieraniem treści. </p>
                    <p className={style.loginDesc}>Przepraszamy za utrudnienia. </p>
                    <figure className={style.figure}>
                        <img className={style.img} src={waiting} alt='waiting' />
                    </figure>
                    <button className={style.btn} onClick={handlerLogOut}>Wyloguj</button>
                </div>
            </div>

            // user log out
            : <LoginRegisterFirebaseUI />
    )
}

export default Login
