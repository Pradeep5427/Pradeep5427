import { combineReducers } from 'redux';
import counter, { CounterSaga } from './counter';
import post, { postSaga } from './post';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([CounterSaga(), postSaga()]);
}

export default combineReducers({
  counter,
  post
});
