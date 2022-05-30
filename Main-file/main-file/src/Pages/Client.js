import React from 'react';
import Images from '../API/img-api';



class Clients extends React.Component {
  render(rows,columns){
      return(
          <div>
              <h1 style= {{textAlign:'center'}}>Clients Page</h1>
             <Images />
             {/* <Pagination /> */}
          </div>
      )
  }
    }


    export default Clients;





    