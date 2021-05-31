import { SET_LOGIN_STATE, SET_ROLE_STATE } from '../actions/actionTypes';

const authInitialState = {
    login: false,
    role: 'client'
}

const authReducer = (authState = authInitialState, action) => {
    switch (action.type) {
        case SET_LOGIN_STATE:
            return (
                {
                    ...authState,
                    login: action.payload
                }
            );
        case SET_ROLE_STATE:
            return (
                {
                    ...authState,
                    role: action.payload
                }
            );
        default:
            return authState
    }
}

export default authReducer;