import React from 'react';
import { UPDATE_ITEM } from '../actions/types';
import { Modal,Button,Form, ModalHeader, ModalTitle, ModalBody } from 'react-bootstrap';

export default function  Update({status,handleClose,handleChange,submitUpdateForm,state}){
    const {name,email,password,number} = state;

    return(
        <Modal show={status} onHide={handleClose} animation={true} centered>
            <ModalHeader closeButton className='modal-content-update'>
                <ModalTitle>{UPDATE_ITEM}</ModalTitle>
            </ModalHeader>

            <ModalBody>
                <form onSubmit ={submitUpdateForm}>
                <Form.Group controlId="formBasicTitle">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter Name"
                            name="name"
                            value={name || ''}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicTitle">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter Email"
                            name="email"
                            value={email || ''}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicTitle">
                        <Form.Label>phonenumber</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter Number"
                            name="number"
                            value={number || ''}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicTitle">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            value={password || ''}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </form>
            </ModalBody>

            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Close
          </Button>

          <Button variant="success" onClick={submitUpdateForm}>
            Save Changes
          </Button>
                
            </Modal.Footer>

        </Modal>
    )
}