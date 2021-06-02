import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ErrorMsg from '../../components/errorMsg/ErrorMsg';
import RecipeDetail from '../../components/recipeDetail/RecipeDetail';
import { fetchById } from '../../services/fetchRecipe';
import './RecipeView.sass';

const RecipeView = () => {
    const token = useSelector(state => state.loginState.token);
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState(null);

    /*the id will come from a global state dispatched from the other containers */
    useEffect(() => {
        getRecipe('60b224dfbb62861c678a6f71', token);
    }, []);

    const getRecipe = async (id, token) => {
        try {
            let res = await fetchById(id, token);
            setRecipe(res);
        } catch (e) {
            setError(e.message)
        }
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
                />
                }
            </div>
        </>
    );
}

export default RecipeView;