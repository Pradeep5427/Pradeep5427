import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

    function SaveLocalStorage(lists){
        try{
            const serializedState = JSON.stringify(lists);
            localStorage.setItem('setData',serializedState)
        }catch(e){
                console.warn(e)
        }
    }

    function LoadStorage(){
        try{
            const serializedState = localStorage.getItem('setData');
            if(serializedState === null ) return undefined;
            return JSON.parse(serializedState)
        }catch(e){
            console.warn(e)
            return undefined;
        }
    }




const store = createStore(rootReducer,LoadStorage());

store.subscribe(() => SaveLocalStorage(store.getState()));

export default store;
