import './SearchView.sass';
import RecipeCard from '../../components/recipeCard/RecipeCard';
import { useState, useEffect } from 'react';
import Pagination from '../../components/pagination/Pagination';
import ErrorMsg from '../../components/errorMsg/ErrorMsg';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchAll, fetchByInventory, fetchByKeyword } from '../../services/fetchRecipe';

const SearchView = () => {
    const token = useSelector(state => state.loginState.token);
    const history = useHistory();
    const [error, setError] = useState(null);
    const [recipes, setRecipes] = useState(null);
    const [totalPages, setTotalPages] = useState(1);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [prevPage, setPrevPage] = useState(false);
    const [nextPage, setNextPage] = useState(false);
    const [searchTerm, setSearchTerm] = useState(null);
    const [searchWithInventory, setSearchWithInventory] = useState(null);

    useEffect(() => {
        if (!token) history.push('/');
    }, [token, history]);

    const search = async (event) => {
        event.preventDefault();
        const keyword = event.target[0].value;
        const withInventory = event.target[2].checked;
        setSearchTerm(keyword);
        setSearchWithInventory(withInventory);
        setTotalPages(null);
        setPage(1);

        try {

            if (!keyword || !withInventory) {
                const res = await fetchAll(page, limit, token);
                setTotalPages(res.totalPages);
                setPrevPage(res.hasPrevPage);
                setNextPage(res.hasNextPage);
                setRecipes(res.docs);
            }

            if (keyword && !withInventory) {
                const res = await fetchByKeyword(keyword, page, limit, token);
                setTotalPages(res.totalPages);
                setPrevPage(res.hasPrevPage);
                setNextPage(res.hasNextPage);
                setRecipes(res.docs);
            }

            if (withInventory) {
                const res = await fetchByInventory(page, limit, token);
                setTotalPages(res.totalPages);
                setPrevPage(res.hasPrevPage);
                setNextPage(res.hasNextPage);
                setRecipes(res.docs);
            }

        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    const goPrevious = async () => {
        if (prevPage) {
            const newPage = page - 1;
            try {

                if (!searchTerm || !searchWithInventory) {
                    const res = await fetchAll(newPage, limit, token);
                    setTotalPages(res.totalPages);
                    setPrevPage(res.hasPrevPage);
                    setNextPage(res.hasNextPage);
                    setPage(res.page);
                    setRecipes(res.docs);
                }

                if (searchTerm && !searchWithInventory) {
                    const res = await fetchByKeyword(searchTerm, page, limit, token);
                    setTotalPages(res.totalPages);
                    setPrevPage(res.hasPrevPage);
                    setNextPage(res.hasNextPage);
                    setPage(res.page);
                    setRecipes(res.docs);
                }

                if (searchWithInventory) {
                    const res = await fetchByInventory(page, limit, token);
                    setTotalPages(res.totalPages);
                    setPrevPage(res.hasPrevPage);
                    setNextPage(res.hasNextPage);
                    setPage(res.page);
                    setRecipes(res.docs);
                }

            } catch (e) {
                setError('Service is currently unavailable, please try again later');
            }
        }
    }

    const goNext = async () => {
        if (nextPage) {
            const newPage = page + 1;
            try {

                if (!searchTerm || !searchWithInventory) {
                    const res = await fetchAll(newPage, limit, token);
                    setTotalPages(res.totalPages);
                    setPrevPage(res.hasPrevPage);
                    setNextPage(res.hasNextPage);
                    setPage(res.page);
                    setRecipes(res.docs);
                }

                if (searchTerm && !searchWithInventory) {
                    const res = await fetchByKeyword(searchTerm, page, limit, token);
                    setTotalPages(res.totalPages);
                    setPrevPage(res.hasPrevPage);
                    setNextPage(res.hasNextPage);
                    setPage(res.page);
                    setRecipes(res.docs);
                }

                if (searchWithInventory) {
                    const res = await fetchByInventory(page, limit, token);
                    setTotalPages(res.totalPages);
                    setPrevPage(res.hasPrevPage);
                    setNextPage(res.hasNextPage);
                    setPage(res.page);
                    setRecipes(res.docs);
                }

            } catch (e) {
                setError('Service is currently unavailable, please try again later');
            }
        }
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