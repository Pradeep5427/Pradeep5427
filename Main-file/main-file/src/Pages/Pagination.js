import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';
import '../sass.scss';


export default function Pagination() {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [toggle,setToggle]  = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [totalTodos, setTotalTodos] = useState(0);
  const todosPerPage = 25;

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => {
        setTodos(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  
  

  const pageNumbers = [];
   for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i);
    
  }

     
  const toggler = () => {
    setToggle((prevState) => ({
      toggle: !prevState.toggle
    }))
  }

  const todosData = useMemo(() => {
    let computedTodos = todos;

    if (searchTerm) {
        computedTodos = computedTodos.filter(
            todo =>
            todo.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

   
     
    setTotalTodos(computedTodos.length);

    //Current Page slice
    
    return computedTodos.slice(
        (currentPage - 1) * todosPerPage,
        (currentPage - 1) * todosPerPage + todosPerPage,
        
    );
}, [todos, currentPage, searchTerm]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

 
  

  return (
    <div className="container">
        <input
          type="text"
          className="form-control"
          id="search"
          placeholder="Search Title"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />


<Table striped bordered hover variant="dark">
                <thead>
                  <tr >
                    <td>ID</td>
                    <td>Title</td>
                   <td>Status</td>
                  </tr>
                </thead>
                {todosData.map((todo)=>{
                  return (
                    <tbody>
                      <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.title}</td>
                       
                        <td><button onClick={toggler}  className="toggle">
                          <div className={todo.completed ? 'switch active' : 'switch'} />
                          </button></td>
                      </tr>
                    </tbody>
                  )
                })}
                {todosData.length <=0  &&
              <div><h1 style={{color:'black'}}>No Data Found</h1></div>
            }
              </Table>
            
            
              

      
      
  
      
   
   
<nav>  
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <button onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>

    </div>
  );
}
