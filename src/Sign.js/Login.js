import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../Sign.js/login.css'

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
        event.preventDefault()
        console.log(formData);
        const Register ={
            username: formData.username,
            password: formData.password
        }
        fetch(`http://localhost:8080/register/check?username=${formData.username}&password=${formData.password}`)    
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
      <div className='container'>
    {Array.isArray(formData) && formData.map((formData) =>(
        <div className='card' key={formData.id}>
            <h1 className='welcome'>Welcome{formData.firstName}{formData.lastName}</h1>
        </div>
    ))}
</div>
  <div className='login-page'>
    <div className='form'>
      <div className='login'>
        <div className='login-header'>
          <h3>LOGIN</h3>
          <p>Please enter your credentials to login</p>
        </div>
      </div>
 <form  className='login-form' onSubmit={handleSubmit}>
    <label>Username</label>
    <input type="text" name="username" value={formData.username} onChange={handleChange}></input><br></br>
    <label>password</label>
    <input type="password" name="password" value={formData.password} onChange={handleChange}></input><br></br>

    <button>Login</button>
  <p className='message'><Link to ="/register">Create New Accout</Link></p>
</form>
    </div>
   

</div>  
</div>
  );

}


