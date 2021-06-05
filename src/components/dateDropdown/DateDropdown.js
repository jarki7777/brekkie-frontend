import { ReactComponent as Plus } from '../../icons/plus-solid.svg';
import { ReactComponent as Minus } from '../../icons/minus-solid.svg';
import { useSelector } from 'react-redux';
import './DateDropdown.sass';

const DateDropdown = (props) => {
    const token = useSelector(state => state.loginState.token);

    return (
        <>
            <div className='category-wrap' onClick={props.toggle}>
                <span className='categroy-ingredient category-title'>{props.weekDay}
                    <span>{props.open === props.weekDay ? <Minus /> : <Plus />}</span>
                </span>
            </div>
            {props.open === props.weekDay &&
                <div>
                    GARPHS
                </div>
            }
        </>
    );
}

export default DateDropdown;
