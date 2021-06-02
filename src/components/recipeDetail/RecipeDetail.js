import './RecipeDetail.sass'
import { ReactComponent as Liked } from '../../icons/heart-solid.svg';
import { ReactComponent as Calification } from '../../icons/star-solid.svg';


export const RecipeDetail = (props) => {
    const ingredients = props.ingredients;
    const instructions = props.instructions;
    const notes = props.notes;
    return (
        <div className='recipe-container'>
            <div className='recipe-cover'>
                <img className='recipe-img' src={process.env.PUBLIC_URL + "/img/" + props.img} alt='recipe final result'></img>
                <h1 className='recipe-title'>{props.title}</h1>
                <div className='calories'>{props.calories} Calories per serve</div>
            </div>

            <div className='recipe-summary'>
                <span className='summary-element'>Serves {props.serves}</span>
                <span className='summary-element'>Prep {props.prepTime}</span>
                <span className='summary-element'>Cook {props.cookTime}</span>
                <span className='summary-element'>Total {props.totalTime}</span>
                <span className='summary-element'>{props.category}</span>
                <span className='summary-element'>{props.method}</span>
                <span className='summary-element'>{props.cuisine}</span>
            </div>

            <div className='social-interaction'>
                <div className='likes-element'>
                    <Liked />{/* call like endpoint */}
                    {props.likes}
                </div>
                <div className='favs-element'>
                    <Calification />{/* pop vote system */}
                    {props.calification}
                    ({props.totalVotes})
                </div>
            </div>

            <div className='recipe-description'>{props.description}</div>

            <div className='sub-title'>
                <span>You will need:</span>
            </div>

            <ul className='recipe-ingredients'>
                {ingredients && ingredients.map(ingredient => <li
                    className='recipe-list'
                    key={ingredients.indexOf(ingredient)}>
                    {ingredient}
                </li>)}
            </ul>

            <div className='sub-title'>
                <span>Instructions:</span>
            </div>

            <ol className='recipe-instructions'>
                {instructions && instructions.map(instruction => <li
                    className='recipe-list'
                    key={instructions.indexOf(instruction)}>
                    {instruction}
                </li>)}
            </ol>

            {notes &&
                <div className='sub-title'>
                    <span>Notes:</span>
                </div>}

            <ul className='recipe-ingredients'>
                {notes && notes.map(note => <li
                    className='recipe-list'
                    key={notes.indexOf(note)}>
                    {note}
                </li>)}
            </ul>

            <div className='nutritional-title'>
                <span>Nutritional facts per serving:</span>
            </div>

            <div className='nutritional-info'>
                <ul>
                    <li className='recipe-list'> Fat: {props.fat}</li>
                    <li className='recipe-list'>Saturated fat: {props.saturatedFat}</li>
                    <li className='recipe-list'>Sodium: {props.sodium}</li>
                    <li className='recipe-list'>Carbs: {props.carbs}</li>
                    <li className='recipe-list'>Fiber: {props.fiber}</li>
                    <li className='recipe-list'>Sugar: {props.sugar}</li>
                    <li className='recipe-list'>Protein: {props.protein}</li>
                </ul>
            </div>
        </div >
    );
}

export default RecipeDetail;