import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

export default class Tables extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        users: [],
       
        isLoading: false,
        isError: false
      }
     
     
  }

    
   
  

  async componentDidMount() {
    this.setState({ isLoading: true })
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (response.ok) {
      const users = await response.json()
      this.setState({ users, isLoading: false })
    } else {
      this.setState({ isError: true, isLoading: false })
    }
    
  }

  render() {
    
    const { users, isLoading, isError } = this.state
 
    if (isLoading) {
      return <div>Loading...</div>
    }
 
    if (isError) {
      return <div>Error</div>
    }

    const renderTableHeader = () => {
      return Object.keys(this.state.users[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
    }

    // const filter = (e) =>{
    //   const keyword = e.target.value;
    //   if(keyword !== ''){
    //     const results = users.filter((user)=>{
    //       return user.name.toLowercase.startsWith(keyword.toLowercase())
    //     });
    //       this.setState({results})
    //   }else{
    //     this.setState({users:this.state.users})
    //   }
        
    // }

    const renderTableRows = () => {
      return this.state.users.map(user => {
        console.log(users)
        return (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{`${user.address.street}, ${user.address.city}`}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td>{user.company.name}</td>
          </tr>
        )
        
      })
    }
 
    return users.length > 0
      ? (
       <Container>
          <input type='search'    placeholder="Filter" />
        <Table  striped bordered hover responsive >
          <thead>
            <tr>
              {renderTableHeader()}
            </tr>
          </thead>
          <tbody>
            {renderTableRows()}
          </tbody>
          
        </Table>
        </Container>
      ) 
      : (
        <div>
          No users.
      </div>
    
      )
     
  }


}
  