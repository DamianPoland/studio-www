import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import style from './Nav.module.css'
import logo from '../../assets/nav/logo192.png'





const Nav = props => {

    // open & close mobile menu
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)
    let styleMobileMenu = isOpenMobileMenu ? style.listOpen : '' //menu list close/open
    let styleMobileButtonBurger = isOpenMobileMenu ? style.burgerOpen : '' //button burger close/open



    return (
        <header className={style.background}>
            <nav className={style.container}>
                <Link to='/home' className={style.header}>
                    <img className={style.headerImg} src={logo} alt='logo' />
                    <p className={style.headerDesc}><span className={style.textWhite}>studio-</span>www</p>
                </Link>
                <ul onClick={() => setIsOpenMobileMenu(false)} className={`${style.list} ${styleMobileMenu}`}>
                    <li className={style.listItem}><NavLink to='/home' activeClassName={style.activeLink} className={style.listItemAnchor}>Strona główna</NavLink></li>
                    <li className={style.listItem}><NavLink to='/about' activeClassName={style.activeLink} className={style.listItemAnchor}>O nas</NavLink></li>
                    <li className={style.listItem}><NavLink to='/offer' activeClassName={style.activeLink} className={style.listItemAnchor}>Oferta</NavLink></li>
                    <li className={style.listItem}><NavLink to='/cennik' activeClassName={style.activeLink} className={style.listItemAnchor}>Cennik</NavLink></li>
                    {/* <li className={style.listItem}><NavLink to='/realizations' activeClassName={style.activeLink} className={style.listItemAnchor}>Realizacje</NavLink></li> */}
                    <li className={style.listItem}><NavLink to='/contact' activeClassName={style.activeLink} className={style.listItemAnchor}>Kontakt</NavLink></li>
                </ul>
                <div onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)} className={`${style.burgerMenu} ${styleMobileButtonBurger}`}>
                    <div className={style.burgerBtn}></div>
                </div>
                {isOpenMobileMenu && <div className={style.navBackgroundMobile} onClick={() => setIsOpenMobileMenu(false)}></div>}
            </nav>
        </header>
    )
}

export default Nav