import { ReactComponent as AddBox } from '../../icons/box-open-solid.svg';
import { ReactComponent as Plus } from '../../icons/plus-solid.svg';
import { ReactComponent as Minus } from '../../icons/minus-solid.svg';
import { ReactComponent as Check } from '../../icons/check-solid.svg';
import { fetchAddToInventory } from '../../services/fetchInventory';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './AccordionDropDown.sass';

const AccordionDropDown = (props) => {
    const token = useSelector(state => state.loginState.token);
    const [added, setAdded] = useState(false);

    const addToInventory = async (ingredient) => {
        try {
            await fetchAddToInventory(token, ingredient);
            setAdded(ingredient);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <div className='category-wrap' onClick={props.toggle}>
                <span className='categroy-ingredient category-title'>{props.title}
                    <span>{props.open === props.title ? <Minus /> : <Plus />}</span>
                </span>
            </div>
            {props.open === props.title && props.ingredients.map(ingredient =>
                <div>
                    <div className='ingredient-category-drowdown' key={props.ingredients.indexOf(ingredient)}>
                        <div className='categroy-ingredient' onClick={() => addToInventory(ingredient)}>
                            <div className='ingredient-row'>
                            <span>{ingredient}</span>
                            {added === ingredient && <Check className='added-indicator' />}
                            </div>
                            <AddBox className='add-box-svg'/>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default AccordionDropDown;
