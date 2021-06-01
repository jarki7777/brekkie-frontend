import { useState } from 'react';
import { fetchSignUp } from '../../services/fetchSignUp';
import { validateUsername, validateEmail, validatePassword } from '../../util/validateInput';
import ErrorMsg from '../errorMsg/ErrorMsg';
import './SignUp.sass';

const SignUp = () => {
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

            if (!email || !password || !username) throw new Error('All fields are required');

            const res = await fetchSignUp(username, email, password);
            if (res.status === 201) return/*redirect*/
            if (res.status === 409) return/*used username or email*/
            if (res.status === 400) return/*check pw*/

        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <div className='login-container'>
            <span className='auth-logo'>This is a logo</span>

            <div className='toggle-auth'>
                <div className='inactive-login'>Log In</div>
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
    );
}

export default SignUp;