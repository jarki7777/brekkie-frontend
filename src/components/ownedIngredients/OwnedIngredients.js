import { useSelector } from 'react-redux';
import { ReactComponent as Minus } from '../../icons/minus-solid.svg';
import { fetchRemoveFromInventory } from '../../services/fetchInventory';

const OwnedIngredients = (props) => {
    const token = useSelector(state => state.loginState.token);

    const removeIngredient = async () => {
        try {
            let res = await fetchRemoveFromInventory(token, props.title)
            console.log(res);
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            <div onClick={() => removeIngredient()}>
                <span className='categroy-ingredient'>
                    {props.title}
                    <span><Minus /></span>
                </span>
            </div>
        </>
    )
}

export default OwnedIngredients
