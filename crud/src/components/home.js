import React, { useState,useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux';
import { getItems } from '../actions/crudActions';
import ListItem from "./ListItem";
import Header from "./header";
import { Container } from "react-bootstrap";
import { addItem,updateItem,deleteItem } from "../actions/crudActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./update";
import Create from "./create";
import { v4 as uuidv4 } from 'uuid';







export default function Home(){
   const dispatch = useDispatch();
   const [state,setState] = useState({
       id:'',
       name:'',
       email:'',
       phonenumber:'',
       password:'',
       loading : false,
       })

        console.log(state);
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
                    if(!lists.loading){
                        setState({...state, name:"",email:"",number:"",password:"" ,loading:false});
                        toast.success("Added Succesfully")
                    }
                },1000)
            }else{
                toast.warning("Form fields are empty")
            }
            setStatus({ ...status, add: false });
        }

        const submitUpdateForm = e => {
            e.preventDefault();
        
            setState({ ...state, loading: true });
            dispatch(updateItem(state));
            setTimeout(() => {
              if (!lists.loading) {
                setState({ ...state, title: "", description: "", loading: false });
                toast.success("Successfully Updated");
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
                    toast.success(`(${list.id}) deleted Successfully`);

          }

          const handleClose = () => {
            setStatus({ ...status, add: false, edit: false });
            setState({ ...state, title: "", description: "", loading: false });
          }

   const {lists} = useSelector(state =>state.lists);

   useEffect(()=>{
       dispatch(getItems())
   },[dispatch])

   return(
       <div>
           <Header addHandle={addHandle}/>
           {state.loading && <h3>Loading....</h3>}
           <div>
               <Container>
                   <ListItem lists={lists} 
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