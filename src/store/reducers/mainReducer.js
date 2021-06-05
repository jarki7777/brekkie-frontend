import { combineReducers } from 'redux';
import authReducer from './authReducer';
import recipeReducer from './recipeReducer';

const mainReducer = combineReducers({
    loginState: authReducer,
    recipeState: recipeReducer
})

export default mainReducer;