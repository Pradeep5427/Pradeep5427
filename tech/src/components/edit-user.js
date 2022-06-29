import { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { userUpdated } from "../features/users/userSlice";
import { Container,Row,Col,Button } from "react-bootstrap";


export default function EditUser(){
    const {pathname} = useLocation();
    const userId = pathname.replace("/edit-user/","");

    const user = useSelector((state)=>
        state.users.find ((user)=>user.id === userId));

        const dispatch = useDispatch();
        const navigate = useNavigate();

        const [name,setName] =useState('');
        const [email,setEmail] =useState('');
        const [number,setNumber] =useState('');
        const [error,setError] =useState(null);

        const handlename = (e) => setName(e.target.value);
        const handleemail = (e) => setEmail(e.target.value);
        const handlenumber = (e) => setNumber(e.target.value);

        const handleClick = (e) =>{
            if (name && email && number){
                dispatch(
                    userUpdated({
                        id : userId,
                        name,
                        email,
                        number,
                    })
                );
                setError(null)
                navigate('/user')
            }else{
                setError("Fill in all fields")
            }
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
                    <label for="mailInput">Email</label>
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
    
                        {error &&error}
                    <Button onClick={handleClick} className="btn-primary">Add User</Button>
                    </Col>
                </Row>
            </Container>
        )
    
}