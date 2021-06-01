import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin } from '../../services/fetchLogin';
import { setLogin } from '../../store/actions/authActionCreator';
import './Login.sass';

const Login = () => {
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [message, setMessage] = useState(null);
    const dispatch = useDispatch();
    const loginState = useSelector((state) => state.loginState.login);

    console.log(message);

    const validateLogin = async (event) => {
        event.preventDefault();

        const email = event.target[0].value;
        const password = event.target[1].value;
        const res = await fetchLogin(email, password);
        
        if (res.status === 200) dispatch(setLogin(res));
        if (res.status === 404) setMessage('Please verify that the email and password are correct');
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
                    <label htmlFor='login-email'>E-mail</label>
                    <input className='input-text' type="email" name="email" id='login-email'></input>
                </div>

                <div className='input-field'>
                    <label htmlFor='login-pw'>Password</label>
                    <input className='input-text' type="password" name="email" id='login-pw'></input>
                </div>

                <button className="login-btn" name="submit" type="submit">Log In</button>

            </form>
        </div>
    );
}

export default Login;