import Navbar from "../navbar/Navbar";
import NavItem from "../navItem/NavItem";
import DropdownMenu from '../dropdownMenu/DropdownMenu';
import Login from '../login/Login';
import SignUp from '../signUp/SignUp';
import { ReactComponent as Search } from '../../icons/search-solid.svg';
import { ReactComponent as Menu } from '../../icons/bars-menu.svg';
import { ReactComponent as Admin } from '../../icons/user-cog-solid.svg';
import { useDispatch, useSelector } from "react-redux";
import './Header.sass';
import { Link } from "react-router-dom";
import { OPEN_SIGNUP_PORTAL, OPEN_LOGIN_PORTAL } from "../../store/actions/actionTypes";

const Header = () => {
    const loginState = useSelector(state => state.loginState);
    const isLoginPortalOpen = useSelector(state => state.loginState.loginPortal);
    const isSignUpPortal = useSelector(state => state.loginState.signUpPortal);
    const dispatch = useDispatch();

    return (
        <>
            <Navbar>
                {loginState.login && <NavItem icon={<Link to='/search'><Search /></Link>} />}
                {loginState.role === 'mod' && <NavItem icon={<Link to='/admin'><Admin /></Link>} />}
                {loginState.role === 'admin' && <NavItem icon={<Link to='/admin'><Admin /></Link>} />}
                {!loginState.login &&
                    <div className='nav-item-not-logged'>
                        <button
                            className='nav-bar-auth-btn'
                            onClick={() => dispatch({ type: OPEN_LOGIN_PORTAL })}
                        >Log In</button>
                        <button
                            className='nav-bar-auth-btn'
                            onClick={() => dispatch({ type: OPEN_SIGNUP_PORTAL })}
                        >Sign Up</button>
                    </div>
                }
                {isLoginPortalOpen && <Login />}
                
                {isSignUpPortal && <SignUp />}

                {loginState.login && <NavItem icon={<Menu />}>
                    <DropdownMenu />
                </NavItem>}
            </Navbar>
        </>
    );
}

export default Header