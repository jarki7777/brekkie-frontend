import { ReactComponent as Plus } from '../../icons/plus-solid.svg';
import { ReactComponent as Minus } from '../../icons/minus-solid.svg';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchFoodLog } from '../../services/fetchFoodLog';
import './DateDropdown.sass';

const DateDropdown = (props) => {
    const token = useSelector(state => state.loginState.token);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [foodLog, setFoodLog] = useState(null);

    useEffect(() => {
        getFoodLog();
    }, []);

    const getFoodLog = async () => {
        try {
            const res = await fetchFoodLog(token, page, limit);
            setFoodLog(res);
        } catch (e) {
            console.log(e);
        }
    }

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
