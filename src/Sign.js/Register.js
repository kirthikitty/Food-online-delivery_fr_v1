import React, {useState} from 'react'
import '../Sign.js/login.css';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.js';

export const Register = () => {
  const {price} = useParams()
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
    <>
      <div style={{ 
      backgroundImage: "url('https://img.freepik.com/premium-photo/food-cooking-background-stone-texture-with-sea-salt-pepper-garlic-parsley-light-grey-abstract-food-background-empty-space-text-can-be-used-food-posters-design-menu-top-view_253362-16400.jpg?w=2000')",
      backgroundPosition: 'center',
      backgroundSize: 'cover', // This ensures the image covers the entire background
      backgroundRepeat: 'no-repeat' // This ensures the image is not repeated
    }}>  </div>
    <Navbar />
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
    <Link to='/login'><button className='message'>Submit</button></Link>
    <Link to ={`/login/${price}`}>Already have an Accout?</Link>
</form>
</div>
</div>

</>          

  );

}

