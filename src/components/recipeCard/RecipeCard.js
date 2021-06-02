import './RecipeCard.sass'
import { ReactComponent as Liked } from '../../icons/heart-solid.svg';
import { ReactComponent as Calification } from '../../icons/star-solid.svg';


export const RecipeCard = (props) => {

    return (
        <div className='recipe-container'>
            <div className='recipe-cover'>
                <img className='recipe-img' src={process.env.PUBLIC_URL + "/img/" + props.img} alt='recipe final result'></img>
                <h1 className='recipe-title'>{props.title}</h1>
                <div className='calories'>{props.calories} Calories per serve</div>
                <div className='social-interaction'>
                    <div className='likes-element'>
                        <Liked />
                        {props.likes}
                    </div>
                    <div className='favs-element'>
                        <Calification />
                        {props.calification}
                    ({props.totalVotes})
                </div>
                </div>
            </div>
        </div >
    );
}

export default RecipeCard;