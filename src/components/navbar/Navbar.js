import { useState } from 'react';
import './Navbar.sass';

const Navbar = (props) => {
    const [userRole, setUserRole] = useState(true);

    return (
        <nav className='navbar'>
            <span className='logo'>This is a logo</span>
            <ul className='navbar-nav'>{props.children}</ul>
        </nav>
    );
}

export default Navbar;