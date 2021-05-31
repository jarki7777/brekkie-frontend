import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavItem.sass';

const NavItem = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <li className='nav-item'>
            <Link className='icon-button' onClick={() => setOpen(!open)}>
                {props.icon}
            </Link>

            {open && props.children}
        </li>
    );
}

export default NavItem;