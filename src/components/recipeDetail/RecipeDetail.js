import './RecipeDetail.sass'
import { ReactComponent as Liked } from '../../icons/heart-solid.svg';
import { ReactComponent as NotLiked } from '../../icons/heart-regular.svg';
import { ReactComponent as Calification } from '../../icons/star-solid.svg';
import { ReactComponent as AddToCart } from '../../icons/cart-plus-solid.svg';
import { ReactComponent as Check } from '../../icons/check-solid.svg';
import NutritionalInfo from '../nutritionalInfo/NutritionalInfo';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchUserFavorites } from '../../services/fetchFavorites';
import { fetchAddFavorite, fetchRemoveFavorite } from '../../services/fetchFavorites';
import { fetchAddToShoppingList, fetchShoppingList } from '../../services/fetchShoppingList';
import ErrorMsg from '../errorMsg/ErrorMsg';
import { fetchById } from '../../services/fetchRecipe';
import VoteModal from '../voteModal.js/VoteModal';
import { fetchAddRecipeToFoodLog, fetchFoodLogAddServing } from '../../services/fetchFoodLog';
import { dateFormatter } from '../../util/dateFormatter';
import { useHistory } from 'react-router';

export const RecipeDetail = (props) => {
    const ingredients = props.ingredients;
    const instructions = props.instructions;
    const notes = props.notes;
    const token = useSelector(state => state.loginState.token);
    const history = useHistory();
    const [error, setError] = useState(null);
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(props.likes);
    const [calificationCount, setVotesCount] = useState(props.calification);
    const [totalVotesCount, setTotalVotes] = useState(props.totalVotes);
    const [openVotes, setOpenVotes] = useState(false);
    const [shoppingList, setShoppingList] = useState([]);

    useEffect(() => {
        checkIfFavorite();
        checkCounters();
        getShoppingList();
    }, []);

    const checkCounters = async () => {
        try {
            let res = await fetchById(props.id, token);
            setLikesCount(res.timesFavorite);
            setVotesCount(res.totalVotes);
            setTotalVotes(res.calification);
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    const checkIfFavorite = async () => {
        try {
            const res = await fetchUserFavorites(token);
            let recipesId = [];
            for (const recipe of res) {
                recipesId.push(recipe._id);
            }
            if (recipesId.includes(props.id)) setLiked(true);
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    const switchLike = async () => {
        if (liked) {
            await unlikeRecipe();
            setLiked(false);
        }

        if (!liked) {
            await likeRecipe();
            setLiked(true);
        }
    }

    const likeRecipe = async () => {
        try {
            await fetchAddFavorite(token, props.id);
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    const unlikeRecipe = async () => {
        try {
            await fetchRemoveFavorite(token, props.id);
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    const addServing = async () => {
        try {
            const date = dateFormatter(Date.now());
            await fetchFoodLogAddServing(props.id, date, token);
            await fetchAddRecipeToFoodLog(props.id, token);
            history.push('/tracker');
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    const AddToShoppingList = async (ingredient) => {
        try {
            await fetchAddToShoppingList(token, ingredient);
            getShoppingList();
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
        return false
    }

    const getShoppingList = async () => {
        try {
            const res = await fetchShoppingList(token);
            setShoppingList(res);
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    return (
        <div className='recipe-container'>
            {error && <ErrorMsg>{error}</ErrorMsg>}

            <div className='recipe-cover'>
                <img className='recipe-img' src={process.env.PUBLIC_URL + "/img/" + props.img} alt='recipe final result'></img>
                <h1 className='recipe-title'>{props.title}</h1>
                <div className='calories'>{props.calories} Calories per serve</div>
            </div>

            <div className='add-serving-btn add-serving-recipe-detail' onClick={() => addServing()}>Add a serving to the day</div>

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
                    {liked && <Liked />}
                    {!liked && <NotLiked onClick={() => switchLike()} />}
                    {likesCount}
                </div>
                <div className='favs-element'>
                    <Calification onClick={() => setOpenVotes(true)} />
                    {calificationCount}
                    ({totalVotesCount})
                </div>
            </div>

            {openVotes &&
                <VoteModal setOpenVotes={setOpenVotes}
                    open={openVotes}
                    onClose={() => setOpenVotes(false)}
                    id={props.id}
                />
            }

            <div className='recipe-description'>{props.description}</div>

            <div className='sub-title'>
                <span>You will need:</span>
            </div>

            <ul className='recipe-ingredients'>
                {ingredients && ingredients.map(ingredient =>
                    <li
                        className='recipe-list'
                        key={ingredients.indexOf(ingredient)}>
                        {shoppingList.includes(ingredient) ?
                            <Check /> : <AddToCart onClick={() => AddToShoppingList(ingredient)} />
                        }
                        {ingredient}
                    </li>)
                }
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

            {notes.length > 0 &&
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

            <NutritionalInfo
                fat={props.fat}
                saturatedFat={props.saturatedFat}
                sodium={props.sodium}
                carbs={props.carbs}
                fiber={props.fiber}
                sugar={props.sugar}
                protein={props.protein}
            />

        </div >
    );
}

export default RecipeDetail;