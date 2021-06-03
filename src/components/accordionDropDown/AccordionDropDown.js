import { useState } from 'react';
import { ReactComponent as AddBox } from '../../icons/box-open-solid.svg';
import { ReactComponent as Plus } from '../../icons/plus-solid.svg';
import { ReactComponent as Minus } from '../../icons/minus-solid.svg';

const AccordionDropDown = (props) => {
    // const [ingredients, setIngredients] = useState(props.ingredients);

    return (
        <>
            <div className='category-wrap' onClick={props.toggle}>
                <span className='categroy-ingredient category-title'>{props.title}
                <span>{props.deploy ? <Minus /> : <Plus />}</span>
                </span>
            </div>
            {props.ingredients.map((ingredient) =>
                <>
                    {props.deploy ? (
                        <div className='ingredient-category-drowdown' key={props.ingredients.indexOf(ingredient)}>
                            <div className='categroy-ingredient'>
                                <span>{ingredient}</span>
                                <AddBox />
                            </div>
                        </div>
                    ) : null}

                </>
            )}
        </>
    )
}

export default AccordionDropDown;
