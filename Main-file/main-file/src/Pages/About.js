import React from 'react';
import Create from '../components/Create';
import Wrapper from '../components/HOC';




const About = (props) => {
       const {CountIncrement, count} = props; 
      return (
          <div>
              <h1 style={{textAlign:'center'}}>About Page</h1>
              <Create />
              <div className='hoc'>
            <button className='count' onClick={CountIncrement}>Count :{count} </button>
            </div>
         </div>
        )
}


export default Wrapper(About);