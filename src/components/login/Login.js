import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLogin } from '../../store/actions/authActionCreator';
import './Login.sass';

const Login = () => {
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const dispatch = useDispatch();
    
    const validateLogin = (event) => {
        event.preventDefault();

        const email = event.target[0].value;
        const password = event.target[1].value;

        dispatch(fetchLogin(email, password));
    }

    return (
        <div className='login-container'>
            <span className='auth-logo'>This is a logo</span>

            <div className='toggle-auth'>
                <div className='active-auth'>Log In</div>
                <div className='inactive-auth'>Sign Up</div>
            </div>

            {/* {error && <ErrorMsg /> } */}

            <form className='auth-form' onSubmit={event => validateLogin(event)}>

                <div className='input-field'>
                    <label for='login-email'>E-mail</label>
                    <input className='input-text' type="email" name="email" id='login-email'></input>
                </div>

                <div className='input-field'>
                    <label for='login-pw'>Password</label>
                    <input className='input-text' type="password" name="email" id='login-pw'></input>
                </div>

                <button className="login-btn" name="submit" type="submit" disabled={disabled}>Log In</button>

            </form>
        </div>
    );
}

export default Login;