import React from 'react';
import Wrapper from '../components/HOC';
import ReactMemo from './react-memo';

 function Contact(props){
    const {CountIncrement, count} = props; 
    return(
        <div  className='component'>
            <h1 className='contact-header'> Contact Details</h1>
        
      
      <button className='count' onClick={CountIncrement}>Count :{count} </button>
      <ReactMemo />
        </div>
    )
}
export default Wrapper(Contact);