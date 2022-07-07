import { ADD_ITEM,UPDATE_ITEM,DELETE_ITEM,LIST_ITEMS, } from '../actions/types';


let  initialState = {
    lists:[],
    
}



export default function Reducer(state=initialState,action){

    switch (action.type){
        case LIST_ITEMS : 
        return {
            ...state,
            lists : action.payload
        };
        case ADD_ITEM :
            return{
                ...state,
                lists: [...state.lists,action.payload],
                
            };
            case UPDATE_ITEM :
                let update = state.lists.map(list=>
                    list.id === action.payload.id ? action.payload : list
                    );
                    return {
                        ...state,
                        lists :update,
                        
                    };
              case DELETE_ITEM :
                  let filtered = state.lists.filter(({id,...rest})=> id!== action.payload.id);
                  return{
                      ...state,
                      lists : filtered,
                     
                  }
            //   case STORE_DATA : 
            //   localStorage.setItem('newDatas',...state.lists);
            //   return{
            //         ...state,
            //         lists : localStorage.getItem('newDatas'),
            //   }
                
                  default:
                        return state;

    };

}