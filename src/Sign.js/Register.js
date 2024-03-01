import React, {useState} from 'react'
import '../Sign.js/login.css';

export const Register = () => {
    const [formData, setFormData] = useState({
        firstName : '',
        lastName : '',
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
            firstName: formData.firstName,
            lastName: formData.lastName,
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
<div className='login-page'>
    <div className='form'>
      <div className='login'>
        <div className='login-header'>
          <h3>Register</h3>
          {/* <p>Please enter your credentials to login</p> */}
        </div>
      </div>
     <form className='' onSubmit={handleSubmit}>
     <div className=''>
    <label className=''>Firstname</label>
    <input className='form-control form-control-sm' type="text" name="firstName" value={formData.firstName} onChange={handleChange}></input>
    </div>  
    <div className=''>
    <label className=''>Lastname</label>
    <input className='' type="text" name="lastName" value={formData.lastName} onChange={handleChange}></input>
    </div> 
    <div className=''>
    <label className=''>Username</label>
    <input className='' type="text" name="username" value={formData.username} onChange={handleChange}></input>
    </div>
    <div className=''>
    <label className=''>password</label>
    <input className='' type="password" name="password" value={formData.marks} onChange={handleChange}></input>
    </div>
    <button className='message'>Submit</button>
</form>
</div>
</div>

              

  );

}

