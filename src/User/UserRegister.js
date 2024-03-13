import React, { useState } from 'react';
import axios from 'axios';
import UserRegister from './UserRegister.css'
import { useHistory } from 'react-router-dom';
import UserNavbar from './UserNavbar';

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
        if (!formData.username) {
            alert('Username is required');
        }
        if (!formData.password) {
            alert('Password is required');
        }

        e.preventDefault();
        console.log(formData);
        const Register = {
            username: formData.username,
            password: formData.password
        }
        fetch(`http://localhost:8080/check-username=${formData.username}`)
            .then((response) => {
                if (!response.ok) {
                    // throw new Error("Failed to fetch data");
                    console.log("Failed to fetch data");
                }
                return response.json();
            })
            .then((data) => {
                if (data == true) {
                    return alert("username alredy exit");
                } else {
                    console.log("Data", data)
                    setFormData(data)
                }
            })
            .catch((error) => {
                console.error("Error During fetch", error);
            })


        // Register user if username is available
        try {
            const response = await axios.post('http://localhost:8080/user/register', formData);
            console.log(response.data);
            alert(`successfully registerd`);
            // Handle successful registration
        } catch (error) {
            if (error.response && error.response.data) {
                setErrors(error.response.data);
            }
        }



    };

    return (
        <>
            <UserNavbar />
            <div className='text-center reg'>
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
                        <button className='btn btn-outline-light' type="submit"><i>Signup</i></button>
                    </div>

                </form>
            </div>
        </>
    );
};

export default Register;
