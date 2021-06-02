import './RecipeCard.sass'
import { ReactComponent as Liked } from '../../icons/heart-solid.svg';
import { ReactComponent as Calification } from '../../icons/star-solid.svg';


export const RecipeCard = (props) => {

    return (
        <div className='recipe-card-container'>
            <img className='recipe-card-img' src={process.env.PUBLIC_URL + "/img/" + props.img} alt='recipe final result'></img>
            <div className='recipe-card-cover'>
                <span className='card-recipe-title'>{props.title}</span>
                <div className='card-social-interaction'>
                    <div className='card-likes-element'>
                        <Liked />
                        {props.likes}
                    </div>
                    <div className='card-favs-element'>
                        <Calification />
                        {props.calification}
                    ({props.totalVotes})
                    </div>
                </div>
            </div>
            <div className='card-calories'>{props.calories} Calories per serve</div>
        </div >
    );
}

export default RecipeCard;