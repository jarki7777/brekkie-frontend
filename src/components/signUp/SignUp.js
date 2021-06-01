import './SignUp.sass';

const SignUp = () => {

    const validateSignUp = (event) => {

    }

    return (
        <div className='login-container'>
            <span className='auth-logo'>This is a logo</span>

            <div className='toggle-auth'>
                <div className='inactive-login'>Log In</div>
                <div className='active-signup'>Sign Up</div>
                <div className='inactive-border'></div>
            </div>

            {/* {error && <ErrorMsg>{error}</ErrorMsg>} */}

            <form className='auth-form' onSubmit={event => validateSignUp(event)}>

                <div className='input-field'>
                    <label htmlFor='signup-username'>Username</label>
                    <input className='input-text' type="email" name="email" id='login-email'></input>
                </div>

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

export default SignUp;