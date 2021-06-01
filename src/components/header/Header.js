import Navbar from "../navbar/Navbar";
import NavItem from "../navItem/NavItem";
import DropdownMenu from '../dropdownMenu/DropdownMenu';
import Login from '../login/Login';
import SignUp from '../signUp/SignUp';
import { ReactComponent as Search } from '../../icons/search-solid.svg';
import { ReactComponent as Menu } from '../../icons/bars-menu.svg';
import { useSelector } from "react-redux";
import './Header.sass';
import { useState } from "react";

const Header = () => {
    const loginState = useSelector((state) => state.loginState);
    const [openLogin, setOpenLogin] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false);

    return (
        <>
            <Navbar>
                <NavItem icon={<Search />} />
                {!loginState.login &&
                    <div className='nav-item-not-logged'>
                        <button className='nav-bar-auth-btn' onClick={() => setOpenLogin(true)}>Log In</button>
                        <button className='nav-bar-auth-btn' onClick={() => setOpenSignUp(true)}>Sign Up</button>
                    </div>
                }
                {openLogin &&

                    <Login setOpenLogin={setOpenLogin}
                        open={openLogin}
                        onClose={() => setOpenLogin(false)}
                        showSignUp={() => {
                            setOpenLogin(false);
                            setOpenSignUp(true);
                        }}
                    />
                }
                {openSignUp &&
                    <SignUp setOpenSignUp={setOpenSignUp} setOpenLogin={setOpenLogin}
                        open={openSignUp}
                        onClose={() => setOpenSignUp(false)}
                        showLogin={() => {
                            setOpenSignUp(false);
                            setOpenLogin(true);
                        }}
                    />
                }

                {loginState.login && <NavItem icon={<Menu />}>
                    <DropdownMenu />
                </NavItem>}
            </Navbar>
        </>
    );
}

export default Header