import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import style from './Nav.module.css'
import logo from '../../assets/logo_gif_small.gif'




const Nav = props => {

    // open & close mobile menu
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)
    let styleMobileMenuList = isOpenMobileMenu ? style.listOpen : '' //menu list close/open



    return (
        <nav className={style.background}>
            <div className={style.container}>
                <div className={style.header}>
                    <img className={style.headerImg} src={logo} alt='logo' />
                    <p className={style.headerDesc}>studio-www.com</p>
                </div>
                <ul onClick={() => setIsOpenMobileMenu(false)} className={`${style.list} ${styleMobileMenuList}`}>
                    <li className={style.listItem}><NavLink to='/home' activeClassName={style.activeLink} className={style.listItemAnchor}>STRONA GŁÓWNA</NavLink></li>
                    <li className={style.listItem}><NavLink to='/offer' activeClassName={style.activeLink} className={style.listItemAnchor}>OFERTA</NavLink></li>
                    <li className={style.listItem}><NavLink to='/login' activeClassName={style.activeLink} className={style.listItemAnchor}>STREFA KLIENTA</NavLink></li>
                    <li className={style.listItem}><NavLink to='/contact' activeClassName={style.activeLink} className={style.listItemAnchor}>KONTAKT</NavLink></li>
                </ul>
                <div onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)} className={style.burgerMenu}>
                    <div className={style.burgerBtn}></div>
                </div>

            </div>
        </nav>
    )
}

export default Nav