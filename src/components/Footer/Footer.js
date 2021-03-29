import React from 'react'
import { Link } from 'react-router-dom'
import style from './Footer.module.css'
import logo from '../../assets/logo.png'



const Footer = () => {
    return (
        <div className={style.background}>
            <div className={style.container}>
                <a href='/privacy-policy' className={`${style.text} ${style.link}`}>Polityka prywatności</a>
                <p className={style.text}>Copyright © studio-www 2020</p>
                <Link to='/home' className={style.designedBy}>
                    <span className={`${style.text} ${style.textLeft}`}>Designed by</span>
                    <img className={style.logo} src={logo} alt='logo' />
                    <span className={`${style.text} ${style.textRight}`}>studio-www</span>
                </Link>
            </div>
        </div>
    )
}

export default Footer