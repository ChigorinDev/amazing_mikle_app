import authReducer from './authReducer';
import projectReducer from './projectReducer';

//importin function which will combine all reducers
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer
})

export default rootReducer; 