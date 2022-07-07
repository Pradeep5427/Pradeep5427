import React from 'react';
import { Button,Container } from 'react-bootstrap';

export default function Header({addHandle}){

     const Logout = () =>{
         localStorage.removeItem('isAuthenticated');
         window.location.pathname = '/login';
     }

    return(
        <Container>
         <div className="my-3 two-button">
            <Button onClick={()=>addHandle()}>Add</Button>
            <Button onClick={()=>Logout()} >Logout</Button>
         </div>
        </Container>
    )
}