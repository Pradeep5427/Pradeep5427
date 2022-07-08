import {useState} from 'react';

export default function LoginPage(){
    const [details,setDetails] = useState({
        username: "",
        password:""
    });
    
    console.log(details);
    
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
         window.location.pathname = '/home';
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
                     <h1>Sign In</h1>
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

      


             </div>
         </div>
     </div>
 )




}