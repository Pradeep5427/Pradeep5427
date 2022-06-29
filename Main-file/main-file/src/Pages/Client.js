import React from 'react';
import Images from '../api/img-api';
 // import { Counter } from '../Redux/counter';
import MainContainer from '../containers/MainContainer';


class Clients extends React.Component {
  render(rows,columns){
      return(
          <div>
              <h1 style= {{textAlign:'center'}}>Clients Page</h1>
             <Images />
             {/* <Pagination /> */}
             {/* { <Counter />}  */}
             <MainContainer />
          </div>
      )
  }
    }


    export default Clients;





    