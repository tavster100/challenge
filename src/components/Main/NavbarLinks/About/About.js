import React from 'react';
import aboutUsImage from '../../../../img/man.png';
import rectangle from '../../../../img/Rectangle 18.png';
import './about.scss';

const About = () => {
    return (
        <div className="about-section" id="about">
            <div className="about-section-text">
                <div className="title">ABOUT US</div>
                <div className="primary-section-text">The occupational traffic permit is one of the most important
                    things in the company when carrying
                    out freight transport. In fact, it is a prerequisite for doing business traffic at all.
                </div>
                <div className="secondary-section">
                    <img src={rectangle} className="rectangle" alt="tertiary-text-icon"/>
                    <div className="secondary-section-text">How do you do when you need to obtain
                        a commercial traffic permit for freight transport to your business?
                    </div>
                </div>
            </div>
            <div className="about-section-image">
                <img src={aboutUsImage} alt="about-us" className="about-us-image"/>
            </div>
        </div>
    )
}
export default About
