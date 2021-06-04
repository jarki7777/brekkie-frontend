import { ReactComponent as Minus } from '../../icons/minus-solid.svg';

const OwnedIngredients = (props) => {
    return (
        <>
            <div onClick={props.remove}>
                <span className='categroy-ingredient'>
                    {props.title}
                    <span><Minus /></span>
                </span>
            </div>
        </>
    )
}

export default OwnedIngredients
