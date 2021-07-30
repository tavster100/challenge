import React from 'react'
import image from '../../img/Scene.png'
import logo from '../../img/logo.png'
import truck from '../../img/mobel.svg'
import './header.scss'
import Navbar from "../Navbar";

const Header = () => {

    return(
        <div className="header-container">
            <div className="main-container">
                <img className="background-img" src={image} alt="background-image"/>
                <img className="logo-img" src={logo} alt="logo"/>
                <p className="header-text">Your awesome traffic permit consultant.</p>
                <Navbar className="navbar-items"/>
            </div>
            <img className="truck-img" src={truck} alt="truck-img"/>
        </div>
    )
}
export default Header
