import React from 'react';
import {Link} from 'react-scroll';
import './index.scss';

const Navbar = () => {
    return(
        <div className="navbar-container">
            <Link className="navbar-item" activeClass="active" to="about" spy={true} smooth={true} offset={-80} duration={1000}>ABOUT</Link>
            <Link className="navbar-item" activeClass="active" to="howto" spy={true} smooth={true} offset={-50} duration={1000}>HOW TO</Link>
            <Link className="navbar-item" activeClass="active" to="faqs" spy={true} smooth={true} offset={-70} duration={1000}>FAQS</Link>
            <Link className="navbar-item-button" activeClass="active" to="contactus" spy={true} smooth={true} offset={-70} duration={1000}>CONTACT US</Link>
        </div>
    )
}
export default Navbar
