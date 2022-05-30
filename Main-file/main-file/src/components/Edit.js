import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import array from '../Pages/Array';
import Col from 'react-bootstrap/Col';

import { useHistory } from 'react-router-dom';


function Edit() {

	
	const [name, setname] = useState('');
	const [age, setage] = useState('');
	const[id,setid] = useState('');

	
	const history = useHistory();
	

	var index = array.map(function(e) { return e.id; }).indexOf(id);

	
	const handelSubmit = (e) =>{
		e.preventDefault();
		let a = array[index] 
		
		a.Name = name
		a.Age = age

		
		history.push ('/home')
	}



	useEffect(() => {
		setname(localStorage.getItem('Name'))
		setage(localStorage.getItem('Age'))
		setid(localStorage.getItem('id'))
	}, [])
	
return (
	<Col md={5} className='edit-form'>
	<div>
		
		<Form className="d-grid gap-2" style={{margin:'2rem'}}>

			
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Control value={name}
							onChange={e => setname(e.target.value)}
							type="text" placeholder="Enter Name" />
			</Form.Group>

		
			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Control value={age}
							onChange={e => setage(e.target.value)}
							type="text" placeholder="Age" />
			</Form.Group>

			
			<Button
			onClick={e => handelSubmit(e)}
			variant="primary" type="submit" size="lg">
				Update
			</Button>

			{/* Redirecting to main page after editing */}
			{/* <Link className="d-grid gap-2" to='/home'>
			<Button variant="warning" size="lg">Home</Button>
			</Link> */}
		</Form>
	</div>
	</Col>
)
}

export default Edit;
