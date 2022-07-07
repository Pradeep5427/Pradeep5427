// import  {listArray} from '../utils/data';
import { ADD_ITEM,UPDATE_ITEM,DELETE_ITEM} from './types';



// export const getItems = () => {
//   return { 
//     type: LIST_ITEMS,
//     payload: listArray
//   }
// };

export const addItem = payload =>{
    return{
        type:ADD_ITEM,
        payload 
    };
};

export const updateItem = payload =>{
    return{
        type:UPDATE_ITEM,
        payload 
    };
};

export const deleteItem = payload =>{
    return{
        type:DELETE_ITEM,
        payload 
    };
};

// export const stored = item =>{
//     return{
//         type : STORE_DATA,
//         payload : item
//     }
// }