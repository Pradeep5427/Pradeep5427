import { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {userUpdated} from './userSlice';
import { Container,Row,Col,Button } from "react-bootstrap";


export default function EditUser(){
    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userId = pathname.replace("/edit-user/","");

    const user = useSelector((state)=>
        state.users.find((user)=>user.id === userId));
        

        
        const [name,setName] =useState(user.name);
        const [email,setEmail] =useState(user.email);
        const [number,setNumber] =useState(user.number);
        const [password,setPassword] =useState(user.password);
        const [error,setError] =useState(null);

        const handlename = (e) => setName(e.target.value);
        const handleemail = (e) => setEmail(e.target.value);
        const handlenumber = (e) => setNumber(e.target.value);
        const handlepassword = (e) => setPassword(e.target.value);


        const handleClick = () =>{
            if (name && email && number && password){
                dispatch(userUpdated({   
                    id : userId,
                    name,
                    email,
                    number,
                    password,
                }));
                setError(null);
                navigate('/user')
               
            } else {
                setError("Fill in all fields");
              }

              setName('');
              setEmail('');
              setNumber('');
              setPassword('');
              
        }

       
         return(
             <Container>
                 <Row>
                     <h1>Edit-User</h1>
                </Row>

                <Row>
                    <Col className="fields">
                        {/* name */}
                    <label for="nameInput">Name</label>
                <input className="full-width"
                type="text"
                placeholder="Name"
                value={name}
                onChange = {handlename}
                id = "nameInput"
                />
                    {/* email */}

                    <label for="nameInput">Email</label>
                <input className="full-width"
                type="text"
                placeholder="Email"
                value={email}
                onChange = {handleemail}
                id = "emailInput"
                />

                {/* phonenumber */}
                <label for="numberInput">Number</label>
                <input className="full-width"
                type="number"
                placeholder="Phonenumber"
                value={number}
                onChange = {handlenumber}
                id = "numberInput"
                />

                  {/* PASSWORD */}

                  <label for="passwordInput">Password</label>
                <input className="full-width"
                type="text"
                placeholder="password"
               value={password}
                onChange = {handlepassword}
                id = "passwordInput"
                />

                {error &&error}
                <Button onClick={handleClick} className="btn-primary">Save User</Button>

                    </Col>
                </Row>

             </Container>
         )
    

   
       
    
}