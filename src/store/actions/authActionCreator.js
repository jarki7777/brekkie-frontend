import { SET_LOGIN_STATE } from './actionTypes';

export const setLogin = (res) => {
    return async (dispatch) => {
        try {
            const { role, token } = res;
            if (res.token) {
                dispatch(
                    {
                        type: SET_LOGIN_STATE,
                        payload: {
                            login: true,
                            role: role,
                            token: token
                        }
                    }
                );
                return res;
            }
        } catch (e) {
            console.log(e);
        }
    }
}