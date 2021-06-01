import { SET_LOGIN_STATE, SET_ROLE_STATE, SET_TOKEN } from '../actions/actionTypes';

const authInitialState = {
    login: false,
    role: 'client',
    token: null
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
        case SET_TOKEN:
            return (
                {
                    ...authState,
                    token: action.payload
                }
            );
        default:
            return authState
    }
}

export default authReducer;