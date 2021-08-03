import React from 'react';

const Form = () => {
    return(
        <form>
            <input type="text" placeholder="Your name" name="name"/>
            <input type="text" placeholder="Your email address" name="email"/>
            <input type="submit"/>
        </form>
    )
}
export default Form
