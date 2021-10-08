import { combineReducers, createStore } from 'redux';
import pageReducer from './reducers/page-reducer';

const reducers = combineReducers({
  page: pageReducer,
});

const store = createStore(reducers);

export default store;
