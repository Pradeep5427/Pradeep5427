import React from 'react';
import Wrapper from '../components/HOC';
import Pagination from './Pagination';


function Service(props) {
     const {CountIncrement, count} = props; 
    return (
         <div  className='login'>
              <h1 style={{textAlign:'center',padding:'10px'}}>Service Page</h1>
              
              <div className='hoc'>
            <button className='count' onClick={CountIncrement}>Count :{count} </button>
            </div>
           <Pagination />
           
         </div>
    );
  }

export default Wrapper(Service);