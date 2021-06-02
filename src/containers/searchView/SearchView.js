import './SearchView.sass';
import RecipeCard from '../../components/recipeCard/RecipeCard';
import { useState, useEffect } from 'react';
import Pagination from '../../components/pagination/Pagination';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchAll } from '../../services/fetchRecipe';

const SearchView = () => {
    const token = useSelector(state => state.loginState.token);
    const history = useHistory();
    const [recipes, setRecipes] = useState(null);
    const [totalPages, setTotalPages] = useState(null);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    useEffect(() => {
        if (!token) history.push('/');
    }, [token]);

    const search = (event) => {
        event.preventDefault();
        const keyword = event.target[0].value;
        const withInventory = event.target[2].checked;

        if (!keyword || !withInventory) {
            let res = fetchAll(page, limit, token);
            setRecipes(res);
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