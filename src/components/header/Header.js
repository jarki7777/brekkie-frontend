import Navbar from "../navbar/Navbar";
import NavItem from "../navItem/NavItem";
import DropdownMenu from '../dropdownMenu/DropdownMenu'
import { ReactComponent as Search } from '../../icons/search-solid.svg';
import { ReactComponent as Menu } from '../../icons/bars-menu.svg';

const Header = () => {
    return (
        <>
            <Navbar>
                <NavItem icon={<Search />} />
                <NavItem icon={<Menu />}> 
                    <DropdownMenu />
                </NavItem>
            </Navbar>
        </>
    );
}

export default Header