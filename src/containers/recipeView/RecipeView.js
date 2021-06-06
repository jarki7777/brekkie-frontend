import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Comments from '../../components/comments/Comments';
import ErrorMsg from '../../components/errorMsg/ErrorMsg';
import RecipeDetail from '../../components/recipeDetail/RecipeDetail';
import { fetchById } from '../../services/fetchRecipe';
import './RecipeView.sass';

const RecipeView = () => {
    const recipeId = useSelector(state => state.recipeState.id);
    const token = useSelector(state => state.loginState.token);
    const history = useHistory();
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!token || !recipeId) history.push('/');
        getRecipe(recipeId, token);
    }, [history, recipeId, token]);

    const getRecipe = async (id, token) => {
        try {
            let res = await fetchById(id, token);
            setRecipe(res);
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    return (
        <div className='recipe-view'>
            {error && <ErrorMsg>{error}</ErrorMsg>}
            {recipe && <RecipeDetail
                id={recipe._id}
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
            />}
            <Comments />
        </div>
    );
}

export default RecipeView;