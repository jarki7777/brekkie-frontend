import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ErrorMsg from '../../components/errorMsg/ErrorMsg';
import RecipeDetail from '../../components/recipeDetail/RecipeDetail';
import { fetchUserFavorites } from '../../services/fetchFavorites';
import { fetchById } from '../../services/fetchRecipe';
import { UNSET_RECIPE } from '../../store/actions/actionTypes';
import './RecipeView.sass';

const RecipeView = () => {
    const recipeId = useSelector(state => state.recipeState.id);
    const token = useSelector(state => state.loginState.token);
    const history = useHistory();
    const dispatch = useDispatch();
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);
    const [switchFav, setSwitchFav] = useState(false);
    
    useEffect(() => {
        if (!token || !recipeId) history.push('/');
        getRecipe(recipeId, token);
        getUserFavorites(token);
    }, [history, recipeId, token]);

    useEffect(() => {
        if (favorites.includes(recipeId)) setIsFavorite(true);
    }, [favorites, recipeId]);

    useEffect(() => {
        return dispatch({ type: UNSET_RECIPE });
    }, [dispatch]);

    const getRecipe = async (id, token) => {
        try {
            let res = await fetchById(id, token);
            setRecipe(res);
        } catch (e) {
            setError(e.message)
        }
    }

    const getUserFavorites = async (token) => {
        try {
            const res = await fetchUserFavorites(token);
            let recipesId = [];
            for (const recipe of res) {
                recipesId.push(recipe._id);
            }
            setFavorites(recipesId);
        } catch (e) {
            
        }
    }

    const fav = () => {

    }

    return (
        <>
            <div className='recipe-view'>
                {error && <ErrorMsg>{error}</ErrorMsg>}
                {recipe && <RecipeDetail
                    title={recipe.title}
                    img={recipe.img}
                    prepTime={recipe.prepTime}
                    cookTime={recipe.cookTime}
                    totalTime={recipe.totalTime}
                    category={recipe.category}
                    method={recipe.method}
                    cuisine={recipe.cuisine}
                    description={recipe.description}
                    ingredients={recipe.ingredients}
                    instructions={recipe.instructions}
                    notes={recipe.notes}
                    serves={recipe.serves}
                    calories={recipe.caloriesPerServe}
                    fat={recipe.nutritionalInfo.fat}
                    saturatedFat={recipe.nutritionalInfo.saturatedFat}
                    sodium={recipe.nutritionalInfo.sodium}
                    carbs={recipe.nutritionalInfo.carbs}
                    fiber={recipe.nutritionalInfo.fiber}
                    sugar={recipe.nutritionalInfo.sugar}
                    protein={recipe.nutritionalInfo.protein}
                    likes={recipe.timesFavorite}
                    calification={recipe.calification}
                    totalVotes={recipe.totalVotes}
                    isFavorite={isFavorite}
                    // switchFav={setSwitchFav()}
                />
                }
            </div>
        </>
    );
}

export default RecipeView;