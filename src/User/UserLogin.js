
import React, { useState } from 'react'
import UserLogin from './UserLogin.css'
import UserNavbar from './UserNavbar'
import { Navigate, useNavigate } from 'react-router'
import axios from 'axios'
// import { Link } from 'react-router-dom'

export const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })
    const Navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
        console.log(name, value)

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData);
        axios.get(`http://localhost:8080/user/check?username=${formData.username}&password=${formData.password}`)
            .then((res) => {
                console.log("Login Details", res);
                if (res.data == !formData.username && res.data == !formData.password) {
                    alert("Enter Valid Username Password");
                }
                else {
                    console.log("Data", res.data);
                    alert("welcome", formData.username)
                    Navigate("/Booking")
                }


            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
            })

        // if (!formData.username) {
        //     alert('Username is required');
        // }
        // if (!formData.password) {
        //     alert('Password is required');
        // }



         if (formData.username == 'Admin' && formData.password == 'admin') { //Admin Page Valid
             Navigate("/createlot");
             alert("WELCOME ADMIN");
         }
        console.log(formData);


    }
    return (
        <div>
            <UserNavbar />
            <form onSubmit={handleSubmit} className='text-center reg'>
                <div className=''>
                    <h2 className='text-danger'>LOGIN</h2>
                    <input className='rounded p-2 mt-2' type="text" name="username" value={formData.username} onChange={handleChange} placeholder='Enter Your Email'></input><br></br>
                    <input className='rounded p-2 mt-3' type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Enter Your Password'></input><br></br>

                    <button className='rounded p-2 mt-3'>Login</button>
                    <h3 className='text-light h6 mt-2'>New User ? <a href='http://localhost:3000/register'>Register Here</a></h3>

                </div>
            </form>

        </div>
    );

}
export default Login;