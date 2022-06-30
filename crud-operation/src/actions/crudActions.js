// import  {listArray} from '../utils/data';
import { ADD_ITEM,UPDATE_ITEM,DELETE_ITEM,LIST_ITEMS, STORE_DATA } from './types';



// export const getItems = () => {
//   return { 
//     type: LIST_ITEMS,
//     payload: listArray
//   }
// };

export const addItem = item =>{
    return{
        type:ADD_ITEM,
        payload :item
    };
};

export const updateItem = item =>{
    return{
        type:UPDATE_ITEM,
        payload :item
    };
};

export const deleteItem = item =>{
    return{
        type:DELETE_ITEM,
        payload :item
    };
};

// export const stored = item =>{
//     return{
//         type : STORE_DATA,
//         payload : item
//     }
// }