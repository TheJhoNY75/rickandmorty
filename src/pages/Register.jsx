import React from 'react';
import {Link} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Button } from 'antd';

import './Register.scss';


export default function Register(){
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        var element = document.getElementById("itemSow");
        element.classList.add("show");
    }
    return(
        <div className="Register">
            <div className="form-register">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {errors.name && errors.name.type === "required" && <span style={{color:'red'}}>Name is required</span>}
                    <input name="name" type='text' ref={register({required: true})} className='ant-input' placeholder='Name'/>
                    {errors.email && errors.email.type === "required" && <span style={{color:'red'}}>Email is required</span>}
                    {errors.email && errors.email.type === "maxLength" && <span style={{color:'red'}}>Max length exceeded</span> }
                    {errors.email && errors.email.type === "pattern" && <span style={{color:'red'}}>Email incorrect</span> }
                    <input name="email" type='text' ref={register({ required: true, maxLength: 50, pattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i })} className='ant-input' placeholder='Email'/>
                    {errors.password && errors.password.type === "required" && <span style={{color:'red'}}>Password is required</span>}
                    <input name="password" type='password' ref={register({required: true})} className='ant-input' placeholder='Password'/>
                    <button className='ant-btn ant-btn-primary' type="primary"><span>Send</span></button>
                </form>
            </div>
            <div className="noti">
                <div className="noti-text" id='itemSow'>
                    <h1>Welcome to Earth C-137</h1>
                </div>
            </div>
        </div>
    )
}
