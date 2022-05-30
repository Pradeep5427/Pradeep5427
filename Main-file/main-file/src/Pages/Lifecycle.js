import React, { Component } from "react";
import axios from "axios";

class Cycling extends Component {
  constructor() {
    super();
    this.state = {
    users:[],
    };
    this.loadData = this.loadData.bind(this);
  }


  async loadData(){
    let newData = await axios.get("https://jsonplaceholder.typicode.com/todos")
    this.setState({users:newData.data});
    console.log(newData);
  }
   
  async componentDidMount() {
    
      let getData = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10");
      this.setState({users:getData.data})
      console.log("mounting");
      console.log(getData);
      }


      

     componentDidUpdate(){
      console.log("update")
      }

      
      
    

      

  render() {
    const {users} = this.state;
    return (
      <div>
        
        {users &&
          users.map(todo => {
            return (
              <table>
                <tbody>
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>
                   {todo.title}
                  </td>
                </tr>
                </tbody>
              </table>
            );
          })}
           <button type="button" onClick={this.loadData}>To full details</button>
      </div>
    );
  }
}

export default Cycling;