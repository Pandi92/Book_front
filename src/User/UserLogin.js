
import React, {useState} from 'react'
import UserLogin from './UserLogin.css'
// import { Link } from 'react-router-dom'

export const Login = () => {
    const [formData, setFormData] = useState({
        username : '',
        password : '',
    })
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({...formData, [name]: value })
        console.log(name, value)
    }
    const handleSubmit = (event) => {
        if (!formData.username) {
            alert('Username is required');
        }
        if (!formData.password) {
            alert('Password is required');
        }

        event.preventDefault()
        console.log(formData);
        const Register ={
            username: formData.username,
            password: formData.password
        }
        fetch(`http://localhost:8080/user/check?username=${formData.username}&password=${formData.password}`)    
         .then((response)=>{
            if(!response.ok) {
              throw new Error("Failed to fetch data");
            }
           return response.json();
          })
          .then((data) => {
            if(data == !formData.username && data == !formData.password) {
                return alert("Enter Valid Details");
            }else{
                console.log("Data",data)
                setFormData(data  )
            }
          })
          .catch((error) =>{
            console.error("Error During fetch", error);
          })
        }
  return (
  <div> 
    <form onSubmit={handleSubmit} className='text-center reg'>
        <div className=''>
    <h2 className='text-danger'>LOGIN</h2>
    <input className='rounded p-2 mt-3' type="text" name="username" value={formData.username} onChange={handleChange} placeholder='Enter Your Email'></input><br></br>
    <input className='rounded p-2 mt-3' type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Enter Your Password'></input><br></br>

    <button className='rounded p-2 mt-3'>Login</button>
    {/* <Link to ="/register">Create New Accout</Link> */}
    </div>
</form>
<div className='container'>
    {Array.isArray(formData) && formData.map((formData) =>(
        <div className='card' key={formData.id}>
            <h1>Welcome{formData.firstname}{formData.lastname}</h1>
        </div>
    ))}
</div>
</div>  
  );

}
export default Login;