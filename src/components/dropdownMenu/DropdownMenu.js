import './DropdownMenu.sass'
import { ReactComponent as Profile } from '../../icons/id-card-solid.svg';
import { ReactComponent as Food } from '../../icons/utensils-solid.svg';
import { ReactComponent as SignOut } from '../../icons/sign-out-alt-solid.svg';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
    const DropDownItem = (props) => {
        return (
            <Link href='/'className='menu-item'>
                <span className='icon-button'>{props.leftIcon}</span>
                {props.children}
                <span className='icon-right'>{props.rightIcon}</span>
            </Link>
        );
    }
    return (
        <div className='dropdown'> 
            <DropDownItem leftIcon={<Profile />}>User info</DropDownItem>
            <DropDownItem leftIcon={<Food />}>Recipes</DropDownItem>
            <DropDownItem rightIcon={<SignOut />}>SignOut</DropDownItem>
        </div>
    );
}

export default DropdownMenu; 