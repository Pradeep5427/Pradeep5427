import React, { useState,useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux';
import { addItem,getItems } from '../actions/crudActions';
import ListItem from "./ListItem";
import Header from "./header";
import { Container } from "react-bootstrap";
import { updateItem,deleteItem } from "../actions/crudActions";
import Update from "./update";
import Create from "./create";
import { v4 as uuidv4 } from 'uuid';







export default function Home(){
   const dispatch = useDispatch();
  
   const {newState} = useSelector(state =>state.newState);
   
 
   
   const [state,setState] = useState({
        id:'',
        name:'',
        email:'',
        phonenumber:'',
        password:'',
        loading : false,
      })

      const [newstate,setNewState] = useState('');
       
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
                setState({...state,loading:true});
                dispatch(addItem(obj));
              
                setTimeout(()=>{
                    if(!newState.loading){
                        setState({...state, name:"",email:"",number:"",password:"" ,loading:false});
                        alert("Added successfully")
                        console.log('list',newState);
                        setNewState(useSelector(state =>state.lists))
                        let local = JSON.stringify(newState);
                        localStorage.setItem("mainList",local);
                        console.log(local);
                     
                    }
                },1000)
            }else{
                alert("Form fields are empty")
            }
            setStatus({ ...status, add: false });
            // display();
        }

        const submitUpdateForm = e => {
            e.preventDefault();
        
            setState({ ...state, loading: true });
            dispatch(updateItem(state));
            setTimeout(() => {
              if (!newState.loading) {
                setState({ ...state, title: "", description: "", loading: false });
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

          const onDelete = (list) =>{
                    dispatch(deleteItem(list));
                    alert(`(${list.id}) deleted Successfully`);

          }

          const handleClose = () => {
            setStatus({ ...status, add: false, edit: false });
            setState({ ...state, title: "", description: "", loading: false });
          }



   
   const get = localStorage.getItem("mainList");
   console.log(get);
   


  // const display = () =>{
  //   var i,x;
  //   for(i=0;i<localStorage.length;i++){
  //     x = localStorage.mainList;
  //   }
  // }

                     


   useEffect(()=>{
       dispatch(getItems())
      },[])

  
     

   return(
       <div>
           <Header addHandle={addHandle}/>
           {state.loading && <h3>Loading....</h3>}
           <div>
               <Container>
                   <ListItem newState={newState} 
                    onHandleEdit={onHandleEdit}
                    onDelete={onDelete}
                   loading={true} />
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