import { combineReducers } from 'redux';
import authReducer from './authReducer';

const mainReducer = combineReducers({
    loginState: authReducer
})

export default mainReducer;