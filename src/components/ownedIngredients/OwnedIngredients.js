import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as Minus } from '../../icons/minus-solid.svg';
import { fetchRemoveFromInventory } from '../../services/fetchInventory';

const OwnedIngredients = (props) => {
    const token = useSelector(state => state.loginState.token);
    const [ingredient, setIngredient] = useState(true);

    const removeIngredient = async () => {
        try {
            await fetchRemoveFromInventory(token, props.title)
            setIngredient(false);
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            {ingredient && <div onClick={() => removeIngredient()}>
                <span className='categroy-ingredient'>
                    {props.title}
                    <span><Minus /></span>
                </span>
            </div>}
        </>
    )
}

export default OwnedIngredients
