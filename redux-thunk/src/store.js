import { createStore,applyMiddleware } from "redux";
//import { createLogger } from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import modules,{rootSaga} from './modules';

//const logger = createLogger();
const saga = createSagaMiddleware();

 export const store = createStore(modules,applyMiddleware(saga));
saga.run(rootSaga);

