import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { OPEN_LOGIN_PORTAL } from '../../store/actions/actionTypes';
import './MainPageCard.sass'

const MainPageCard = (props) => {
    const login = useSelector(state => state.loginState.login);
    const dispatch = useDispatch();

    const openPortal = () => {
        dispatch(
            {
                type: OPEN_LOGIN_PORTAL
            }
        );
    }

    return (
        <div className='main-page-card'>
            <img className='card-image' src={process.env.PUBLIC_URL + "/img/" + props.image} alt='card'></img>
            <div className='card-opaque'>
                <div className='card-text'>
                    <span className='main-card-title'>{props.title}</span>
                    <span className='main-card-description'>{props.description}</span>
                    {login && <Link className='main-card-button' to={props.link}>{props.buttonName}</Link>}
                    {!login &&
                        <div
                            className='main-card-button'
                            onClick={() => openPortal()}>
                            {props.buttonName}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default MainPageCard;