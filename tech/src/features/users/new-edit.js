import React , {useEffect,useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { userUpdated } from './userSlice';

const initialState = {
    id : '',
    name : '',
    email : '',
    password : '',
    number : '',
}


const updateData = () =>{
    const datas = useSelector(state => state.userUpdated.data)
}

const [update,setUpdate] = useState(datas);
const [input,setInput] = useState(initialState);
const [edit,setEdit] = useState(false);

useEffect(()=>{
    console.log(input)
    setUpdate(datas)
},[datas])

const dispatch = useDispatch();

const handleChange = (e) => {
    const {name,email,number,password} = e.target;
    setInput({...input,[name]:value})
}

const onSubmit = () =>{
    
}








