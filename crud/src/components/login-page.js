import {useState} from 'react';
import {FiFacebook} from 'react-icons/fi';
import {BsInstagram} from 'react-icons/bs';
import {AiOutlineLinkedin} from 'react-icons/ai';

export default function LoginPage(){
    const [details,setDetails] = useState({
        username: "",
        password:""
    });
    
    
 const input = (e) =>{
    setDetails((prevstate)=>{
        return{
            ...prevstate,
            [e.target.name]: e.target.value,
        };
    });
 }
 const submit = (e) => {
     e.preventDefault();
     if(details.username === ""|| details.password === ""){
         console.log(details)
         alert('username/password field is empty')
     }else if(
         details.username === "Pradeep" &&
         details.password === "12345678"
     ){
         localStorage.setItem('isAuthenticated',true);
         window.location.pathname = '/table';
         }else{
             alert('Invalid username/password')
             return;
         }
    
 };

 return (
     <div className='valid'>
         <div className='valid-form'>
             <div className='login-form vaild-form-wrapper'>
                 <div className='title'>
                     <h2 style={{textAlign:'center'}}>Sign In</h2>
                 </div>

                 <div className="form">
        <form >
          <div className="input-container">
            <label>Username </label>
            <input className='input' type="text" name="username" onChange={(e)=> input(e)} required />
            
          </div>
          <div className="input-container">
            <label>Password </label>
            <input className='input' type="password" name="password" onChange={(e)=> input(e)} required />
           
          </div>
          <div className="button-container">
           <button className='sub' type='button' onClick={submit}>Submit</button>
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