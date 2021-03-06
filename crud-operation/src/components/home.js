import React, { useState } from "react";
import { useSelector,useDispatch } from 'react-redux';
// import { getItems } from '../actions/crudActions';
import ListItem from "./ListItem";
import Header from "./header";
import { Container } from "react-bootstrap";
import { addItem,updateItem,deleteItem } from "../actions/crudActions";
import Update from "./update";
import Create from "./create";
import { v4 as uuidv4 } from 'uuid';




         


export default function Home(){
   const dispatch = useDispatch();
   const [state,setState] = useState({
       id: '',
       name:'',
       email:'',
       phonenumber:'',
       password:'',
      
       })

       const {lists} = useSelector(state =>state.lists);

      //  const load = localStorage.getItem('setitems') ?
      //         JSON.parse(localStorage.getItem('setitems')) : [];


      // const [local,setLocal] = useState([]);
  
      const [status, setStatus] = useState({
        edit: false,
        add: false
      });

      
    const handleChange = e =>{
        const {name,value} = e.target;
        setState({...state,[name]:value})
    }

        const submitCreateForm = e =>{
            const {name,email,number,password}= state;
            e.preventDefault();
            let obj = {
                id : uuidv4(),
                name,
                email,
                number,
                password
            };
                 
            if(state.name !== '' && state.email !== '' && state.number !== '' && state.password !== ''){
                setState({...state});
                dispatch(addItem(obj));
                if(!lists){
                        setState({...state, name:"",email:"",number:"",password:""});
                    }
               }
              
              // localStorage.setItem('setitems',JSON.stringify([...local,state]));
              // console.log('get',local);

              // setLocal([...local].concat(state));
              setState("");
              
              // const news =  JSON.parse(localStorage.getItem('setitems'));
              // console.log('set',news);

            setStatus({ ...status, add: false });
        }

        const submitUpdateForm = e => {
            e.preventDefault();
        
            setState({ ...state });
            dispatch(updateItem(state));
            setTimeout(() => {
              if (!lists) {
                setState({ ...state});
                alert("Successfully Updated");
              }
            }, 1000);
            setStatus({ ...status, edit: false });
          };

          const onHandleEdit = (list) =>{
              const {id,name,email,number,password} = list;
              setState({
                  id: id,
                  name :name,
                  email : email,
                  number : number,
                  password : password
              });
              setStatus({...status,edit:true})
          }

          const addHandle = () =>{
                setStatus({...state,add:true});
          }

          const onDelete = (deleted) =>{
                    dispatch(deleteItem(deleted));
                    alert('deleted Successfully');

          }

          const handleClose = () => {
            setStatus({ ...status, add: false, edit: false });
            setState({ ...state});
          }


           // window.localStorage.removeItem('setitems');
 
  //  useEffect(()=>{
  //      dispatch(getItems())
  //  },[dispatch])

   return(
       <div>
           <Header addHandle={addHandle}/>
       
           <div>
               <Container>
                   <ListItem lists={lists} 
                    onHandleEdit={onHandleEdit}
                    onDelete={onDelete}
                    />
               </Container>
           </div>
           {status.edit ?
        <Update
          status={status.edit}
          handleClose={handleClose}
          handleChange={handleChange}
          submitUpdateForm={submitUpdateForm}
          state={state}
        /> :
        <Create
          status={status.add}
          handleClose={handleClose}
          handleChange={handleChange}
          submitCreateForm={submitCreateForm}
          state={state}
        />
      }
      
       </div>
   )
}