import React from 'react';
import {useForm} from "react-hook-form";
import './form.scss';
import Button from "../Button/Button";
const Form = () => {

    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-input-container">
                    <p className="form-label">Name</p>
                    <input className="form-input" type="text" placeholder="Your name" name="name" {...register('name', {required: true})}/>
                </div>
                <div className="form-input-container">
                    <p className="form-label">Email address</p>
                    <input className="form-input" type="text" placeholder="Your email address"
                           name="email" {...register('email', {required: true})}/>
                </div>
                <Button className="form-submit-button"/>
            </form>
        </div>
    )
}
export default Form
