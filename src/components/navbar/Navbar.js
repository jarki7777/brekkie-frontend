import './Navbar.sass';
import { ReactComponent as Logo } from '../../logo.svg';

const Navbar = (props) => {

    return (
        <nav className='navbar'>
            <span className='main-logo'><Logo /></span>
            <ul className='navbar-nav'>{props.children}</ul>
        </nav>
    );
}

export default Navbar;