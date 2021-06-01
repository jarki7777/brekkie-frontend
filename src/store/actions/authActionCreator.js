import { SET_LOGIN_STATE, SET_ROLE_STATE, SET_TOKEN } from './actionTypes';

export const setLogin = (res) => {
    return async (dispatch) => {
        try {
            const { role, token } = res;
            if (res.token) {
                dispatch(
                    {
                        type: SET_LOGIN_STATE,
                        payload: true
                    }
                );
                dispatch(
                    {
                        type: SET_ROLE_STATE,
                        payload: role
                    }
                )
                dispatch(
                    {
                        type: SET_TOKEN,
                        payload: token
                    }
                )
                return res;
            }
        } catch (e) {
            console.log(e);
        }
    }
}