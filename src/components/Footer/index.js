import React from 'react';
import footerTruck from '../../img/footer-truck.png';
import footerBackground from '../../img/Footer.png';
import logo from '../../img/logo.png';
import facebook from '../../img/f.png';
import instagram from '../../img/i.png';
import twitter from '../../img/t.png';
import './footer.scss'
import Form from "../Form/Form";

const Footer = () => {

    return (
        <div className="footer-container">
            <img className="background-img" src={footerTruck} alt="background-image"/>
            <div className="main-container">
                <div className="form-container">
                    <div className="text-container">
                        <img src={footerBackground}/>
                        <span>Text</span>
                    </div>
                    <Form/>
                </div>
                <div className="bottom-navigation">
                    <img src={logo}/>
                    <span>ABOUT</span>
                    <span>HOW TO</span>
                    <span>FAQS</span>
                </div>
                <div className="social-container">
                    <span className="copyright-text">Copyright 2019</span>
                    <div className="social-links">
                        <img src={facebook}/>
                        <img src={instagram}/>
                        <img src={twitter}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer
