import React from 'react';
import Wrapper from '../components/HOC';
import Cycling from './Lifecycle';



function Service(props) {
     const {CountIncrement, count,rows,columns} = props; 
    return (
         <div  className='login'>
              <h1 style={{textAlign:'center',padding:'10px'}}>Service Page</h1>
              
              <div className='hoc'>
            <button className='count' onClick={CountIncrement}>Count :{count} </button>
            </div>
            <Cycling />
           
         </div>
    );
  }

export default Wrapper(Service);