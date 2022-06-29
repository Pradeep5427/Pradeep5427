import React,{useState} from 'react';
import {FiFacebook} from 'react-icons/fi';
import {BsInstagram} from 'react-icons/bs';
import {AiOutlineLinkedin} from 'react-icons/ai';


export default function Login(){
  const [userData,setUserData]= useState({
    username:"",
    password:""
  });
 
  
  const handleInputChange = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
        
      };
    });
    
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.username === "" || userData.password === "") {
    console.log(userData)
    alert('username/password fields is empty')

    } else if (
      userData.username === "Pradeep" &&
      userData.password === "veervig"
    ) {
     
      localStorage.setItem('isAuthenticated', true);
      window.location.pathname = '/main';

    } else {
      alert('Invalid username/password')
      
      return;
    }
  
  };

  return(
    <div className='valid-bg'>
      <div className='valid-form'>
        <div className="login-form valid-form-wrapper">
        <div className="title">Sign In</div>
        
        <div className="form">
        <form >
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="username" onChange={(e)=> handleInputChange(e)} required />
            
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="password" onChange={(e)=> handleInputChange(e)} required />
           
          </div>
          <div className="button-container">
           <button className='sub' type='button' onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>


        <div className='icon'>
       <a href="www.facebook.com"> <FiFacebook className='face' /> </a>
       <a href="www.facebook.com">   <AiOutlineLinkedin  className='face'/></a>
       <a href="www.facebook.com">  <BsInstagram  className='face' /></a>
      </div>

      </div>
      </div>
    </div>
  )
}