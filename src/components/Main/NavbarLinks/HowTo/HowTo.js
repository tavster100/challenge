import React from 'react';
import howToImage from "../../../../img/illustrations.png";
import './howto.scss'
const HowTo = () => {
    return(
        <div className="howto-section" id="howto">
            <div className="howto-section-text">
                <div className="title">HOW TO APPLY</div>
                <div className="primary-section-text">The occupational traffic permit is one of the most important things in the company when carrying
                    out freight transport. In fact, it is a prerequisite for doing business traffic at all.
                </div>
            </div>
            <div className="howto-section-image">
                <img src={howToImage} alt="how-to" className="howto-image"/>
            </div>
        </div>
    )
}
export default HowTo
