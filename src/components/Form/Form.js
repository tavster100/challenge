import React from 'react';
import { useForm } from "react-hook-form";

const Form = () => {

    const {register, handleSubmit} = useForm();
    const onSubmit = (data) =>{
        console.log(data);
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Your name" name="name" {...register('name', { required: true })}/>
            <input type="text" placeholder="Your email address" name="email" {...register('email', { required: true })}/>
            <input type="submit"/>
        </form>
    )
}
export default Form
