import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import ErrorMsg from '../../components/errorMsg/ErrorMsg';
import RecipeCard from '../../components/recipeCard/RecipeCard';
import { fetchUserFavorites } from '../../services/fetchFavorites';
import { SET_RECIPE_ID } from '../../store/actions/actionTypes';
import Pagination from '../../components/pagination/Pagination';
import { ReactComponent as Search } from '../../icons/search-solid.svg';
import './Favorites.sass';

const Favorites = () => {
    const token = useSelector(state => state.loginState.token);
    const history = useHistory();
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const [favorites, setFavorites] = useState(null);
    const [showFavorites, setShowFavorites] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        if (!token) history.push('/');
    }, [token, history]);

    useEffect(() => {
        const getFavorites = async () => {
            try {
                const res = await fetchUserFavorites(token);
                if (res.length !== 0) {
                    setTotalPages(Math.ceil(res.length / limit));
                    setFavorites(res);
                }
                if (res.length === 0) setError(`Your favorites are empty`);
                setShowFavorites(res.slice(0, limit));
    
            } catch (e) {
                setError('Service is currently unavailable, please try again later');
            }
        }
        getFavorites();
    }, [limit, token]);


    const goToRecipe = (id) => {
        dispatch(
            {
                type: SET_RECIPE_ID,
                payload: id
            }
        );
    }

    const goPrevious = () => {
        if (page > 1) {
            if (page === totalPages) setShowFavorites(favorites.slice((favorites.length - showFavorites.length) - 10, (showFavorites.length) * (-1)));
            else setShowFavorites(favorites.slice(limit - 20, limit - 10));
            setPage(page - 1);
            setLimit(limit - 10);
            window.scrollTo(0, 0);
        }
    }

    const goNext = () => {
        if (page !== totalPages) {
            if (page === totalPages - 1) setShowFavorites(favorites.slice(limit, favorites.length));
            else setShowFavorites(favorites.slice(limit, limit + 10));
            setPage(page + 1);
            setLimit(limit + 10);
            window.scrollTo(0, 0);
        }
    }

    return (
        <div className='favorites-container'>
            {error && <ErrorMsg>{error}</ErrorMsg>}
            {showFavorites.length !== 0 && showFavorites.map(recipe => <Link className='recipe-card-link' to='/recipe' key={showFavorites.indexOf(recipe)}>
                <RecipeCard
                    goToRecipe={() => goToRecipe(recipe._id)}
                    img={recipe.img}
                    title={recipe.title}
                    calories={recipe.caloriesPerServe}
                    likes={recipe.timesFavorite}
                    calification={recipe.calification}
                    totalVotes={recipe.totalVotes}
                /></Link>)}

            {!favorites &&
                <div className='favorites-empty-message'>
                    Go to the search page and find your nex favorite recipe
                    <Link to='/search'><Search /></Link>
                </div>
            }

            <Pagination
                actualPage={page}
                totalPages={totalPages}
                goPrevious={() => goPrevious()}
                goNext={() => goNext()}
                document={'Page'}
            />
        </div>
    )
}

export default Favorites;