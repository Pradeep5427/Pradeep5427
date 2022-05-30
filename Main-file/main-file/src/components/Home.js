import React from 'react'
import  Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import array from '../Pages/Array';
import Col from 'react-bootstrap/Col'
import { Link, useHistory } from 'react-router-dom';

function Home() {

const history = useHistory()

// You may skip this part if you're
// using react-context api or redux
function setID(id,name,age){
	localStorage.setItem('id', id);
	localStorage.setItem('Name', name);
	localStorage.setItem('Age', age);
}


function deleted(id){
	
	var index = array.map(function(e) { return e.id; }).indexOf(id);

	
	array.splice(index,1)

	
	history.push ('/home')
}

return (
	<Col className='edit-table' md={9}>
	<div  >
		<Table striped bordered hover size="sm" responsive>
<thead>
	<tr>
	<th>Name</th>
	<th>Age</th>
	</tr>
</thead>
<tbody>

	
	{array.map((item) => {
return(
<tr>
	<td>{item.Name}</td>
	<td>{item.Age}</td>
		
	
	<td><Link to={`/edit`}><Button onClick={(e) =>
	setID(item.id,item.Name,item.Age)} variant="info">
		Update</Button></Link></td>

	
	<td><Button onClick={e => deleted(item.id)}
	variant="danger">Delete</Button></td>
	</tr>
)})}
</tbody>
</Table>


<Link className="d-grid gap-2" to='/create'>
<Button variant="primary" size="l">Home</Button>
</Link>
	</div>
	</Col>
)
}

export default Home
