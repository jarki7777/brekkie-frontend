import { SET_LOGIN_STATE, SET_ROLE_STATE } from './actionTypes';

export const setLogin = (res) => {
    return async (dispatch) => {
        try {
            const role = res.role;
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
                return res;
            }
        } catch (e) {
            console.log(e);
        }
    }
}