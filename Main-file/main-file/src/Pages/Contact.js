import React from 'react';
import Wrapper from '../components/HOC';
import Filter_table  from './filter-table';

 function Contact(props){
    const {CountIncrement, count} = props; 
    return(
        <div  className='component'>
            <h1 className='contact-header'> Contact Details</h1>
        
      
      <button className='count' onClick={CountIncrement}>Count :{count} </button>
      <Filter_table />
        </div>
    )
}
export default Wrapper(Contact);