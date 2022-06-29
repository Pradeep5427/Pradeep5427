import React,{useState,useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row,Modal } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { useDispatch , useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userDeleted, userUpdated } from './userSlice';
import {BiEditAlt} from 'react-icons/bi';
import {MdDelete} from 'react-icons/md'
import AddUser from './Adduser';



export default function UserList(){
    const dispatch = useDispatch();
    const users = useSelector((state)=>state.users);

    const initialState = {
        id :'',
        name :'',
        email :'',
        number :'',
        password :'',

    }

        

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [update,setUpdate]  = useState(users);
    const [input,setInput]  = useState(initialState);
    const [edit,setEdit]  = useState(false);

    useEffect(()=>{
        console.log(input);
        setInput(users);
        },[users])

        const onSubmit = () =>{
            dispatch(userUpdated(input))
        }

    const handleDelete=  (id) =>{
        dispatch(userDeleted({id}));
    };

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setInput({...input , [name]:value})
    }
    
    const handleUpdate = (items) =>{
        setEdit(true)
        setInput(items)
    }
   

    return(
        <Container>
            {/* title */}
            <Row>
                <h1>CRUD Operation</h1>
            </Row>
{/* button */}
            <Row >
                <Col>
                
                    <Button   onClick={handleShow}className='button-primary'>ADD USERS</Button>
               
                </Col>
              

                
            </Row>
{/* table */}

                <Row>
                    <Table responsive >
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phonenumber</td>
                                <td>Password</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            { users.map(({id,name,email,number,password},i)=>(
                                <tr key ={i}>
                                   <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{number}</td>
                                    <td>{password}</td>
                                    <td>
                                      <Link to={`/edit-user/${id}`}>
                                       <button   className='edit'><BiEditAlt/></button> </Link>
                                      <button style={{color:'red'}} className='delete' onClick={()=>handleDelete(id)}><MdDelete/></button>

                                    </td>

                                </tr>
                            ))}
                            
                            
                        </tbody>
                    </Table>
                </Row>

                                    {/* Modal */}

                <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Submit Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddUser/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
                                
        </Container>
        )
}