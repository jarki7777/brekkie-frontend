import { SET_LOGIN_STATE, SET_ROLE_STATE } from './actionTypes';

export const fetchLogin = (email, password) => {
    console.log(process.env.REACT_APP_LOGIN_URL)
    return async (dispatch) => {
        try {
            let res = await fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_LOGIN_URL}`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });
            res = await res.json();
            const role = res.role;            
            console.log(res);
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
        } catch (e) {
            console.log(e);
        }
    }
}