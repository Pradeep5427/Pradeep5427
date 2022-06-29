import React,{ useState } from 'react';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {AiOutlinePlus} from 'react-icons/ai';




export default function Tables(props){
  const [show,setShow] = useState(false);
  const [name,setName] = useState('');
  const [email,setEmail] = useState ('');
  const [phonenumber,setPhoneNumber]= useState('');

  const changeName = (event) =>{
        setName(event.target.value);
  };
  const changeEmail = (event) =>{
    setEmail(event.target.value);
};
const changephnumber = (event) =>{
  setPhoneNumber(event.target.value);
};

const transferValue = (event) => {
  event.preventDefault();
  const val = {
    name,
    email,
    phonenumber,
  };
  props.func(val);
  clearState();
};

const clearState = () => {
  setName('');
  setEmail('');
  setPhoneNumber('');
}

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    

return(
    <div>
        <Container>
        { /*modal header*/ }
<Button variant = "info" onClick={handleShow}> <AiOutlinePlus className='plus' />Add</Button>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Submit Form</Modal.Title>
        </Modal.Header>

      {/* modal body */}
        <Modal.Body>
        <Form>

        <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control value={name} onChange={changeName} type="name" placeholder="Enter name" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control value={email} onChange={changeEmail} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Phonenumber</Form.Label>
    <Form.Control value={phonenumber} onChange={changephnumber} type="number" placeholder="Phone-number" />
  </Form.Group>
 

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    
  </Form.Group>
  <Button variant="primary" type="submit" onClick={transferValue}>
    Submit
  </Button>
</Form>
        </Modal.Body>

        {/* modal body end */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
</Container>
    </div>
)
}
