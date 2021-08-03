import React from 'react';
import coverImg from '../../../../img/Rectangle 9.png';
import faqsImg from '../../../../img/Faq.png';
import './faqs.scss';
import Container from "../../../API/Container";
import items from "../../../../fakeapi";
const FaQS = () => {

    return(
        <div className="faqs-container" id="faqs">
            <div className="faqs-title-text">
                <div className="faqs-title">
                    FAQ
                </div>
                <div className="faqs-text">
                    Questions and Answers on Professional Traffic Permits:
                </div>
            </div>
            <div className="faqs-section">
                <img className="faqs-background" src={coverImg} alt="cover-img"/>
                <img className="faqs-image" src={faqsImg} alt="faq-img"/>
            </div>
            <Container items={items} />
        </div>
    )
}
export default FaQS
