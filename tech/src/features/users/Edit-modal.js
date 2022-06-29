import React,{useState} from 'react';
import { Modal,Button } from 'react-bootstrap';
import EditUser from './edit-user';
import { BiEditAlt } from 'react-icons/bi';

export default function EditModal () {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
         <BiEditAlt/>
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Page</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                    <EditUser />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  