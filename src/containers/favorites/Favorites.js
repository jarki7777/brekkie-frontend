import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import ErrorMsg from '../../components/errorMsg/ErrorMsg';
import RecipeCard from '../../components/recipeCard/RecipeCard';
import { fetchUserFavorites } from '../../services/fetchFavorites';
import { SET_RECIPE_ID } from '../../store/actions/actionTypes';
import './Favorites'

const Favorites = () => {
    const token = useSelector(state => state.loginState.token);
    const history = useHistory();
    const dispatch = useDispatch();
    const [error, setError] = useState(null)
    const [favorites, setFavorites] = useState(null);

    useEffect(() => {
        if (!token) history.push('/');
    }, [token, history]);

    useEffect(() => {
        getFavorites();
    }, []);

    const getFavorites = async () => {
        try {
            const res = await fetchUserFavorites(token);
            setFavorites(res);
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    const goToRecipe = (id) => {
        dispatch(
            {
                type: SET_RECIPE_ID,
                payload: id
            }
        );
    }

    return (
        <div className='favorites,container'>
            {error && <ErrorMsg>{error}</ErrorMsg>}
            {favorites && favorites.map(recipe => <Link className='recipe-card-link' to='/recipe' key={favorites.indexOf(recipe)}>
                <RecipeCard
                    goToRecipe={() => goToRecipe(recipe._id)}
                    img={recipe.img}
                    title={recipe.title}
                    calories={recipe.caloriesPerServe}
                    likes={recipe.timesFavorite}
                    calification={recipe.calification}
                    totalVotes={recipe.totalVotes}
                /></Link>)}
        </div>
    )
}

export default Favorites;