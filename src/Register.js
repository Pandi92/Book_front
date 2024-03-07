import React, {useState} from 'react'

export const Register = () => {
    const [formData, setFormData] = useState({
        firstname : '',
        lastname : '',
        username : '',
        password : '',
        
    })
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({...formData, [name]: value })
        console.log(name, value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData);
        const Register ={
            firstname: formData.firstname,
            lastname: formData.lastname,
            username: formData.username,
            password: formData.password
        }
        fetch(`http://localhost:8080/register/add`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST',
            body: JSON.stringify(Register)
         })
         .then((response)=>{
            console.log("Data Received" + response);
          })
        }
  return (
    <form onSubmit={handleSubmit}>
    <label>Firstname</label>
    <input type="text" name="firstname" value={formData.firstname} onChange={handleChange}></input><br></br>
    <label>Lastname</label>
    <input type="text" name="lastname" value={formData.lastname} onChange={handleChange}></input><br></br>
    <label>Username</label>
    <input type="text" name="username" value={formData.username} onChange={handleChange}></input><br></br>
    <label>password</label>
    <input type="password" name="password" value={formData.marks} onChange={handleChange}></input><br></br>

    <button>Submit</button>
</form>
  );

}
export default Register;