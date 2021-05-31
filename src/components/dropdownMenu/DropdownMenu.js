import './DropdownMenu.sass'
import { ReactComponent as Profile } from '../../icons/user-solid.svg';
import { ReactComponent as Food } from '../../icons/utensils-solid.svg';
import { ReactComponent as SignOut } from '../../icons/sign-out-alt-solid.svg';
import { ReactComponent as Right } from '../../icons/chevron-right-solid.svg';
import { ReactComponent as Liked } from '../../icons/heart-solid.svg';
import { ReactComponent as Stats } from '../../icons/chart-bar-solid.svg';
import { ReactComponent as Inventory } from '../../icons/list-ul-solid.svg';
import { ReactComponent as ShoppingList } from '../../icons/shopping-cart-solid.svg';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useState, useRef, useEffect } from 'react';


const DropdownMenu = () => {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
      }, [])

    const calcHeight = (el) => {
        const height = el.offsetHeight;
        setMenuHeight(height);
      }

    const DropDownItem = (props) => {
        return (
            <Link href='/' className='menu-item' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className='icon-button'>{props.leftIcon}</span>
                {props.children}
                <span className='icon-right'>{props.rightIcon}</span>
            </Link>
        );
    }
    return (
        <div className='dropdown' style={{ height: menuHeight }} ref={dropdownRef}>
            <CSSTransition in={activeMenu === 'main'}
                unmountOnExit
                timeout={500}                
                classNames='menu-primary'
                onEnter={calcHeight}
            >
                <div className='menu'>
                    <DropDownItem leftIcon={<Profile />} goToMenu='userInfo'>User info</DropDownItem>
                    <DropDownItem leftIcon={<Food />}>Recipes</DropDownItem>
                    <DropDownItem rightIcon={<SignOut />}>SignOut</DropDownItem>
                </div>

            </CSSTransition>

            <CSSTransition in={activeMenu === 'userInfo'}
                unmountOnExit
                timeout={500}
                classNames='menu-secondary'
                onEnter={calcHeight}
            >
                <div className='menu'>
                    <DropDownItem leftIcon={<Liked />}>Favorites</DropDownItem>
                    <DropDownItem leftIcon={<Stats />}>Meal Tracker</DropDownItem>
                    <DropDownItem leftIcon={<Inventory />}>Pantry</DropDownItem>
                    <DropDownItem leftIcon={<ShoppingList />}>Shopping List</DropDownItem>
                    <DropDownItem rightIcon={<Right />} goToMenu='main'>Back</DropDownItem>
                </div>

            </CSSTransition>
        </div>
    );
}

export default DropdownMenu;