import { combineReducers } from "redux";
import crudReducer from './crudReducers';

const rootReducer =  combineReducers({
    lists:crudReducer,
})

export default rootReducer;