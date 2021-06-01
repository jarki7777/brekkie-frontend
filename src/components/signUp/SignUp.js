import { useEffect, useState } from 'react';
import { fetchSignUp } from '../../services/fetchSignUp';
import { validateUsername, validateEmail, validatePassword } from '../../util/validateInput';
import { ReactComponent as Close } from '../../icons/times-solid.svg';
import ReactDom from 'react-dom';
import ErrorMsg from '../errorMsg/ErrorMsg';
import './SignUp.sass';

const SignUp = (props) => {
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!props.open) return null;
    }, []);

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

            if (!email || !password || !username) throw new Error('All fields are required');

            const res = await fetchSignUp(username, email, password);
            if (res.status === 201) {
                props.setOpenLogin(true);
                props.setOpenSignUp(false);
            }
            if (res.status === 409) setError(res.message);

        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    return ReactDom.createPortal(
        <>
            <div className='modal-overlay'></div>
            <div className='login-container'>
                <div className='icon-button close-icon' onClick={props.onClose}><Close /></div>
                <span className='auth-logo'>This is a logo</span>

                <div className='toggle-auth'>
                    <div className='inactive-login' onClick={props.showLogin}>Log In</div>
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
                        <label htmlFor='login-email'>E-mail</label>
                        <input className='input-text' type="email" name="email" id='signup-email'
                            onInput={event => checkUserEmail(event)}
                        ></input>
                    </div>

                    <div className='input-field'>
                        <label htmlFor='login-pw'>Password</label>
                        <input className='input-text' type="password" name="email" id='signup-pw'
                            onInput={event => checkUPassword(event)}
                        ></input>
                    </div>

                    <button className="login-btn" name="submit" type="submit">Sign Up</button>

                </form>
            </div>
        </>,
        document.getElementById('signup-portal')
    );
}

export default SignUp;