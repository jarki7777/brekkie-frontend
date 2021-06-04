import './Navbar.sass';
import { ReactComponent as Logo } from '../../logo.svg';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    return (
        <nav className='navbar'>
            <Link to='/'><span className='main-logo'><Logo /></span></Link>
            <ul className='navbar-nav'>{props.children}</ul>
        </nav>
    );
}

export default Navbar;