import './SearchView.sass';
import RecipeCard from '../../components/recipeCard/RecipeCard';
import { useState, useEffect } from 'react';
import Pagination from '../../components/pagination/Pagination';
import ErrorMsg from '../../components/errorMsg/ErrorMsg';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchAll, fetchByKeyword } from '../../services/fetchRecipe';
import { fetchInventory } from '../../services/fecthUserData';

const SearchView = () => {
    const token = useSelector(state => state.loginState.token);
    const history = useHistory();
    const [error, setError] = useState(null);
    const [recipes, setRecipes] = useState(null);
    const [totalPages, setTotalPages] = useState(null);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [inventory, setInventory] = useState(null);

    useEffect(() => {
        if (!token) history.push('/');
        getUserInventory();
    }, [token]);

    const getUserInventory = async () => {
        try {
            const res = await fetchInventory(token)
            setInventory(res);
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    const search = async (event) => {
        event.preventDefault();
        try {
            const keyword = event.target[0].value;
            const withInventory = event.target[2].checked;

            if (!keyword || !withInventory) {
                const res = await fetchAll(page, limit, token);
                setTotalPages(res.totalPages);
                setRecipes(res.docs);
            }

            if (keyword && !withInventory) {
                const res = await fetchByKeyword(keyword, page, limit, token);
                setTotalPages(res.totalPages);
                setRecipes(res.docs);
            }

        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    const goPrevious = () => {
        console.log('prev');
    }

    const goNext = () => {
        console.log('next');
    }

    const goToRecipe = () => {
        /*dispatch recipe id and redirect to recipeView*/
    }

    return (
        <div className='search-view-container'>

            {error && <ErrorMsg>{error}</ErrorMsg>}

            <form className='search-form' onSubmit={(event) => search(event)}>
                <div className='search-bar'>
                    <input className='input-text search-input' type='search' name='search' placeholder='Search by keyword'></input>
                    <button className='login-btn search-btn' name='submit' type='submit'>Find recipes</button>
                </div>
                <div>
                    <label className='input-check' htmlFor='search-inventory'>Use my inventory ingredients</label>
                    <input className='input-check' type="checkbox" name='search by inventory' id='search-inventory'></input>
                </div>

            </form>

            <RecipeCard
                goToRecipe={goToRecipe}
                img='IMG_2443-700x933.jpg'
                title='3 Ingredient Pomegranate Balsamic Chicken'
                calories='221'
                likes='1325'
                calification='4.3'
                totalVotes='3135'
            />

            <Pagination
                actualPage={page}
                totalPages={totalPages}
                goPrevious={() => goPrevious()}
                goNext={() => goNext()}
            />

        </div>
    );
}

export default SearchView;