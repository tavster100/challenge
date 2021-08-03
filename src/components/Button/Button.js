import React from 'react';
import './button.scss';
import arrowImg from "../../img/Union.png";

const Button = ({className}) => (
    <div className="get-started">
        <button className="get-started-button">GET STARTED
            <img src={arrowImg} className="get-started-img" alt="arrow"/>
        </button>
    </div>
)
export default Button
