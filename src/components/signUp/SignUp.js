import { useEffect, useState } from 'react';
import { fetchSignUp } from '../../services/fetchSignUp';
import { validateUsername, validateEmail, validatePassword } from '../../util/validateInput';
import { ReactComponent as Close } from '../../icons/times-solid.svg';
import { ReactComponent as Logo } from '../../logo.svg';
import ReactDom from 'react-dom';
import ErrorMsg from '../errorMsg/ErrorMsg';
import './SignUp.sass';
import { CLOSE_SIGNUP_PORTAL, OPEN_LOGIN_PORTAL } from '../../store/actions/actionTypes';
import { useDispatch } from 'react-redux';

const SignUp = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState(null);

    const checkUserName = (event) => {
        event.preventDefault();
        const input = event.target.value
        if (input === '') setError(null);
        else setError(validateUsername(input));
    }
    const checkUserEmail = (event) => {
        event.preventDefault();
        const input = event.target.value
        if (input === '') setError(null);
        else setError(validateEmail(input));
    }
    const checkUPassword = (event) => {
        event.preventDefault();
        const input = event.target.value
        if (input === '') setError(null);
        else setError(validatePassword(input));
    }
    const validateSignUp = async (event) => {
        event.preventDefault();
        try {
            const username = event.target[0].value;
            const email = event.target[1].value;
            const password = event.target[2].value;
            const passwordConfirm = event.target[3].value;

            if (!email || !password || !username) throw new Error('All fields are required');

            if (password !== passwordConfirm) throw new Error (`Passwords don't match`);

            const res = await fetchSignUp(username, email, password);
            if (res.status === 201) {
                dispatch({ type: OPEN_LOGIN_PORTAL });
                dispatch({ type: CLOSE_SIGNUP_PORTAL });
            }
            if (res.status === 409) setError(res.message);

        } catch (e) {
            setError(e.message);
        }
    }

    return ReactDom.createPortal(
        <>
            <div className='modal-overlay'></div>
            <div className='login-container'>
                <div
                    className='icon-button close-icon'
                    onClick={() => dispatch({ type: CLOSE_SIGNUP_PORTAL })}>
                    <Close /></div>
                <span className='auth-logo'>
                    <span className='small-logo'><Logo /></span>
                </span>

                <div className='toggle-auth'>
                    <div
                        className='inactive-login'
                        onClick={() => dispatch({ type: OPEN_LOGIN_PORTAL })}
                    >Log In</div>
                    <div className='active-signup'>Sign Up</div>
                    <div className='inactive-border'></div>
                </div>

                {error && <ErrorMsg>{error}</ErrorMsg>}

                <form className='auth-form' onSubmit={event => validateSignUp(event)}>

                    <div className='input-field'>
                        <label htmlFor='signup-username'>Username</label>
                        <input className='input-text' type="text" name="email" id='signup-username'
                            onInput={event => checkUserName(event)}
                        ></input>
                    </div>

                    <div className='input-field'>
                        <label htmlFor='signup-email'>E-mail</label>
                        <input className='input-text' type="email" name="email" id='signup-email'
                            onInput={event => checkUserEmail(event)}
                        ></input>
                    </div>

                    <div className='input-field'>
                        <label htmlFor='signup-pw'>Password</label>
                        <input className='input-text' type="password" name="email" id='signup-pw'
                            onInput={event => checkUPassword(event)}
                        ></input>
                    </div>

                    <div className='input-field'>
                        <label htmlFor='confirm-pw'>Confirm Password</label>
                        <input className='input-text' type="password" name="email" id='confirm-pw'></input>
                    </div>

                    <button className="login-btn" name="submit" type="submit">Sign Up</button>

                </form>
            </div>
        </>,
        document.getElementById('signup-portal')
    );
}

export default SignUp;