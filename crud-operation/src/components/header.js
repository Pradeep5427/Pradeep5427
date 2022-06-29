import React from 'react';
import { Button } from 'react-bootstrap';

export default function Header({addHandle}){
    return(
        <div>
            <Button onClick={()=>addHandle()}>Add</Button>
        </div>
    )
}