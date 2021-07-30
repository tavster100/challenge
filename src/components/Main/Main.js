import React from 'react';
import About from "./NavbarLinks/About/About";
import ContactUs from "./NavbarLinks/ContactUs/ContactUs";
import FaQS from "./NavbarLinks/FaQS/FaQS";
import HowTo from "./NavbarLinks/HowTo/HowTo";

const Main = () => {
    return(
        <div>
            <About />
            <HowTo/>
            <FaQS/>
            <ContactUs/>
        </div>
    )
}
export default Main
