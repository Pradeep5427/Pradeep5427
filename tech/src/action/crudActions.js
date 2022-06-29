const LIST_ITEM = 'LIST_ITEM';
import { listArray } from "../components/data";

export const getItems = () =>{
    return{
        type : LIST_ITEM,
        payload:listArray
    }
};