import React from "react"
import s from "./Header.module.css"
import {NavLink} from "react-router-dom"
import logo from "../../img/logo.png"

const Header = (props: any) => {
    return (
        <header className={s.header}>
            <img alt="header_image" src={logo}></img>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div> {props.login} </div>
                    : <NavLink to={"/login"}> Login </NavLink>}
            </div>
        </header>
    )
}

export default Header
