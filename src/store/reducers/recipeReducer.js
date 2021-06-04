import { SET_RECIPE_ID, UNSET_RECIPE } from '../actions/actionTypes';

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
        case UNSET_RECIPE:
            return (
                {
                    ...recipeState,
                    id: null
                }
            );
        default:
            return recipeState
    }
}

export default recipeReducer;