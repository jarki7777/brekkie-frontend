import Navbar from "../navbar/Navbar";
import NavItem from "../navItem/NavItem";
import DropdownMenu from '../dropdownMenu/DropdownMenu'
import { ReactComponent as Search } from '../../icons/search-solid.svg';
import { ReactComponent as User } from '../../icons/user-solid.svg';

const Header = () => {
    return (
        <>
            <Navbar>
                <NavItem icon={<Search />} />
                <NavItem icon={<User />}> 
                    <DropdownMenu />
                </NavItem>
            </Navbar>
        </>
    );
}

export default Header