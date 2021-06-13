import { SET_RECIPE_ID, SET_SEARCH_RESULTS, SET_SEARCH_TERM } from '../actions/actionTypes';

const recipeInitialState = {
    id: null,
    searchResults: [],
    totalPages: 1,
    prevPage: false,
    nextPage: false,
    page: 1,
    searchTerm: null
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
                    searchResults: action.payload.searchResults,
                    totalPages: action.payload.totalPages,
                    prevPage: action.payload.prevPage,
                    nextPage: action.payload.nextPage,
                    page: action.payload.page
                }
            );
        case SET_SEARCH_TERM:
            return (
                {
                    ...recipeState,
                    searchTerm: action.payload
                }
            );
        default:
            return recipeState
    }
}

export default recipeReducer;