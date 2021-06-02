import { SET_LOGIN_STATE, LOG_OUT } from '../actions/actionTypes';

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
                    login: action.payload.login,
                    role: action.payload.role,
                    token: action.payload.token
                }
            );
        case LOG_OUT:
            return (
                {
                    ...authState,
                    login: false,
                    role: 'client',
                    token: null
                }
            );
        default:
            return authState
    }
}

export default authReducer;