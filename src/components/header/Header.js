import { useState } from 'react';
import './Header.sass';

const Header = () => {
    const [userRole, setUserRole] = useState(true);

    return (
        <div className='header'>
            <div className='logo'>This is a logo</div>
            {userRole && <div><i className="fas fa-bars"></i></div>}
        </div>
    );
}

export default Header;