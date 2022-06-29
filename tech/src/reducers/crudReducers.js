const LIST_ITEM = 'LIST_ITEM';

let  initialState = {
    lists:[],
    item:{}
}


export default function rootReducer(state=initialState,action){
    switch (action.type){
        case LIST_ITEM : 
        return {
            ...state,
            lists : action.payload
        };
        default  :
        return state;
    }
}