import React, { useState }  from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {v4 as uuid} from 'uuid';
import array from '../Pages/Array';
import Col from 'react-bootstrap/Col';
import { Link, useHistory } from 'react-router-dom';

export default function Create(){
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  
  const history  = useHistory();

  
  const handelSubmit = (e) =>{
      e.preventDefault();  
      const ids = uuid() 
      let uni = ids.slice(0,8)

      let a = name, b=age
      array.push({id:uni,Name:a,Age:b})

      history.push ('/home')
       
  }


    return(
        <div className='start'>
            <Col className='form-column' md={5}>
              <h2 style={{textAlign:'center'}}>React CRUD Operation</h2>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
    <Form.Control onChange={e => setName(e.target.value)} 
                  type="text"
                  placeholder="Enter Name" required/> 
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicAge">
  <Form.Label>Age</Form.Label>
    <Form.Control onChange={e => setAge(e.target.value)} 
                  type="text"
                  placeholder="Age" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button className='primary'
  onClick={e => handelSubmit(e)}
    variant="primary" type="submit">
    Submit
  </Button>

  <Link className="data d-grid gap-2 mt-2" to='/home'>
    <Button variant='success' size="md">
      Created Lists
    </Button>
  </Link>

</Form>
</Col>
        </div>
    )
}