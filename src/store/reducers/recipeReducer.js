import { SET_RECIPE_ID } from '../actions/actionTypes';

const recipeInitialState = {
    id: null
}

const recipeReducer = (recipeState = recipeInitialState, action) => {
    switch (action.type) {
        case SET_RECIPE_ID:
            return (
                {
                    ...recipeState,
                    id: action.payload 
                }
            );
        default:
            return recipeState
    }
}

export default recipeReducer;