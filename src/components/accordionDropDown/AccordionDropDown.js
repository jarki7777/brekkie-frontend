import { ReactComponent as AddBox } from '../../icons/box-open-solid.svg';
import { ReactComponent as Plus } from '../../icons/plus-solid.svg';
import { ReactComponent as Minus } from '../../icons/minus-solid.svg';

const AccordionDropDown = (props) => {
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
                        <div className='categroy-ingredient'>
                            <span>{ingredient}</span>
                            <AddBox />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AccordionDropDown;
