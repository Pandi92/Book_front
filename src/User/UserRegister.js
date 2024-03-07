import React, { useState } from 'react';
import axios from 'axios';
import UserRegister from './UserRegister.css'

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const Register ={
            username: formData.username,
            password: formData.password
        }
        fetch(`http://localhost:8080/user/register`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST',
            body: JSON.stringify(Register)
         })
         .then((response)=>{
            console.log("Data Received" + response);
          })
        
    };

    return (

        <div className='container  text-center reg'>
            <h2 className='text-primary'>SIGN-UP</h2>
            <form onSubmit={handleSubmit} className=''>
                <div className='mb-4'>
                    <input type="text" className='rounded p-2' name="username" value={formData.username} onChange={handleChange} placeholder='Enter Your Email' />
                    {errors.username && <div className="error">{errors.username}</div>}
                </div>
                <div className='mb-4'>
                    <input type="password" className='rounded p-2' name="password" value={formData.password} onChange={handleChange} placeholder='Enter Your Password' />
                    {errors.password && <div className="error">{errors.password}</div>}
                </div>
                <div className='mb-4'>
                    <button className='btn btn-outline-dark' type="submit"><i>Signup</i></button>
                </div>

            </form>
        </div>
    );
};

export default Register;
