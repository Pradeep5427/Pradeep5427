import { useState } from "react";
import { userAdded } from "./userSlice";
import { useNavigate } from "react-router-dom";
import { Container,Row,Col,Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";




export default function AddUser(props){

    const dispatch = useDispatch();
    const location = useNavigate();
    console.log(location)

    const [name,setName] =useState('');
    const [email,setEmail] =useState('');
    const [number,setNumber] =useState('');
    const [password,setPassword] =useState('');
    const [error,setError] =useState(null);

    const handlename = (e) => setName(e.target.value);
    const handleemail = (e) => setEmail(e.target.value);
    const handlenumber = (e) => setNumber(e.target.value);
    const handlepassword = (e) => setPassword(e.target.value);


    const userAmount  = useSelector((state)=>state.users.length);

    const handleClick = () => {
        if (name && email && number && password){
            dispatch(userAdded({
                id: userAmount + 1 ,
                name,
                email,
                number,
                password
            }));
            setError(null);
           location('/user')
        }else{
            setError("fill the fields")
        }
        setName('');
        setEmail('');
        setNumber('');
        setPassword('');
    }


    return(
        <Container>
            <Row>
                <h1>Add User</h1>
                <Col className="fields">
                {/* Name */}
                <label for="nameInput">Name</label>
                <input className="full-width"
                type="text"
                placeholder="Name"
                value={name}
                onChange = {handlename}
                id = "nameInput"
                />
                {/* email */}
                <label for="mailInput" >Email</label>
                <input className="full-width"
                type="text"
                placeholder="Email"
                value={email}
                onChange = {handleemail}
                id = "mailInput"
                />
                {/* phonenumber */}
                <label for="numberInput">Phonenumber</label>
                <input className="full-width"
                type="number"
                placeholder="Phone-Number"
                value={number}
                onChange = {handlenumber}
                id = "numberInput"
                />

                {/* PASSWORD */}

                <label for="passwordInput">Password</label>
                <input className="full-width"
                type="password"
                placeholder="password"
                value={password}
                onChange ={handlepassword}
                id = "passwordInput"
                />

                    {error &&error}
                <Button onClick={handleClick} className="btn-primary">Add User</Button>
                </Col>
            </Row>
        </Container>
    )
}
