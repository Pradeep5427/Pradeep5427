import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';


export default class Images extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            images:[],
        }
        this.callImage();
    }

    callImage = () =>{
        fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10').then(
            (response)=>response.json())
        .then((img)=>{
            console.log(img)
            this.setState({
                images:img
            })
        })
    }

    render(){

        

    const collection = () =>{
        return this.state.images.map(collect=>{
            return(
                <tr key={collect.id}>
                  <td>{collect.id} </td>
                 <td>{collect.title}</td>
                 <td> <img src={collect.url} alt="" />   </td>
                </tr>
            )
        })
    }

        return(
            <div>
                <Container>
                <Table striped bordered hover responsive >
                <tbody>
                {collection()}
               </tbody>
                </Table>
                </Container>
            </div>
        )
    }

}