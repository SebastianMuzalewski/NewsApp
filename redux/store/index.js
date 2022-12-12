/*

Our store is now exported and can be used in our application.


*/
import rootReducer from '../reducer';
import { configureStore , combineReducers} from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
