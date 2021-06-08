import { SET_LOGIN_STATE, LOG_OUT, OPEN_LOGIN_PORTAL, CLOSE_LOGIN_PORTAL, OPEN_SIGNUP_PORTAL, CLOSE_SIGNUP_PORTAL } from '../actions/actionTypes';

const authInitialState = {
    login: false,
    role: 'client',
    token: null,
    loginPortal: false,
    signUpPortal: false
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
        case OPEN_LOGIN_PORTAL:
            return (
                {
                    ...authState,
                    loginPortal: true,
                    signUpPortal: false
                }
            );
        case CLOSE_LOGIN_PORTAL:
            return (
                {
                    ...authState,
                    loginPortal: false
                }
            );
        case OPEN_SIGNUP_PORTAL:
            return (
                {
                    ...authState,
                    signUpPortal: true,
                    loginPortal: false
                }
            );
        case CLOSE_SIGNUP_PORTAL:
            return (
                {
                    ...authState,
                    signUpPortal: false,
                }
            );
        default:
            return authState
    }
}

export default authReducer;