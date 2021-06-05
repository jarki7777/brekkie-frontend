import { SET_RECIPE_ID, SET_SEARCH_RESULTS } from '../actions/actionTypes';

const recipeInitialState = {
    id: null,
    searchResults: []
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
        case SET_SEARCH_RESULTS:
            return (
                {
                    ...recipeState,
                    searchResults: action.payload 
                }
            );
        default:
            return recipeState
    }
}

export default recipeReducer;