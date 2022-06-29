import React,{useState} from 'react';
import Tables from './table-add';
import jsonData from './dummy.json'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import {MdDelete} from  'react-icons/md';
import {BiEditAlt} from 'react-icons/bi';
import {Link} from 'react-router-dom';



export default function Forms(){
    const [cellData,setCellData] = useState(jsonData);

    const handleDelete = (index,e) => {
      setCellData(cellData.filter((v, i) => i !== index));
  }
    
 

  
   
    const TableRows = cellData.map((info,index)=>{
        return(
            <tr key={info.id}>
                <td>{info.id}</td>
                <td>{info.name}</td>
                <td>{info.email}</td>
                <td>{info.phonenumber}</td>

                <td>
                  <Link to ="/user">
                <button className='edit'><BiEditAlt/></button>  </Link>
                <button onClick={e => handleDelete(index,e)} className='delete'><MdDelete style={{color:'red'}}  /></button>
                </td>
                
            </tr>
        );
    });

    

    const addRows = (data) => {
        const totalData = cellData.length;
        data.id = totalData + 1;
        const updatedcellData = [...cellData];
        updatedcellData.push(data);
        setCellData(updatedcellData);
      };


    return(
        <div>
            <Container>
            <Table striped bordered hover>
  <thead>
    <tr >
      <th>Id</th>
      <th> Name</th>
      <th>Email</th>
      <th>Phonenumber</th>
      <th>Edit</th>
    </tr>
  </thead>
  <tbody>
   {TableRows}
  </tbody>
</Table>
<Tables func={addRows} />
</Container>
        </div>
    )
}
