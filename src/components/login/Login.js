import { useState } from 'react';
import './Login.sass';

const Login = () => {
    const [error, setError] = useState(true)

    const validateLoginFields = (event) => {

    }

    return (
        <div className='login-container'>
            <span className='auth-logo'>This is a logo</span>

            <div className='toggle-auth'>
                <div className='active-auth'>Login</div>
                <div className='inactive-auth'>Signup</div>
            </div>

            {error && <span className='error-msg'>error</span>}

            <form className='auth-form' onSubmit={e => validateLoginFields(e)}>

                <div className='input-field'>
                    <label for='login-email'>email</label>
                    <input className='input-text' type="email" name="email" id='login-email'></input>
                </div>

                <div className='input-field'>
                    <label for='login-pw'>password</label>
                    <input className='input-text' type="email" name="email" id='login-pw'></input>
                </div>

                <button className="login-btn" name="submit" type="submit">Submit</button>

            </form>
        </div>
    );
}

export default Login;