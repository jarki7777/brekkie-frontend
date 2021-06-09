import './SearchView.sass';
import RecipeCard from '../../components/recipeCard/RecipeCard';
import { useState, useEffect, useRef } from 'react';
import Pagination from '../../components/pagination/Pagination';
import ErrorMsg from '../../components/errorMsg/ErrorMsg';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as Square } from '../../icons/square-regular.svg';
import { ReactComponent as SquareCheck } from '../../icons/check-square-regular.svg';
import { useHistory, Link } from 'react-router-dom';
import { fetchAll, fetchByInventory, fetchByKeyword } from '../../services/fetchRecipe';
import { SET_RECIPE_ID, SET_SEARCH_RESULTS } from '../../store/actions/actionTypes';

const SearchView = () => {
    const searchInput = useRef();
    const token = useSelector(state => state.loginState.token);
    const searchResults = useSelector(state => state.recipeState.searchResults);
    const totalPages = useSelector(state => state.recipeState.totalPages);
    const prevPage = useSelector(state => state.recipeState.prevPage);
    const nextPage = useSelector(state => state.recipeState.nextPage);
    const page = useSelector(state => state.recipeState.page);
    const limit = 10;
    const history = useHistory();
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState(null);
    const [searchWithInventory, setSearchWithInventory] = useState(null);
    const [check, setCheck] = useState(false);

    useEffect(() => {
        if (!token) history.push('/');
        searchInput.current.focus();
    }, [token, history]);

    const search = async (event) => {
        event.preventDefault();
        const keyword = event.target[0].value;
        const withInventory = event.target[2].checked;
        setSearchTerm(keyword);
        setSearchWithInventory(withInventory);
        setError(null);

        try {
            let res = null

            if (!keyword && !withInventory) {
                res = await fetchAll(page, limit, token);
            }

            if (keyword && !withInventory) {
                res = await fetchByKeyword(keyword, page, limit, token);
            }

            if (withInventory) {
                res = await fetchByInventory(page, limit, token);
            }
            dispatch(
                {
                    type: SET_SEARCH_RESULTS,
                    payload: {
                        searchResults: res.docs,
                        totalPages: res.totalPages,
                        prevPage: res.hasPrevPage,
                        nextPage: res.hasNextPage,
                        page: res.page
                    }
                }
            );
            if (res.docs.length === 0) setError('Sorry, no recipes were found');

        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    const goPrevious = async () => {
        if (prevPage) {
            const newPage = page - 1;
            let res

            try {

                if (!searchTerm && !searchWithInventory) {
                    res = await fetchAll(newPage, limit, token);
                }

                if (searchTerm && !searchWithInventory) {
                    res = await fetchByKeyword(searchTerm, page, limit, token);
                }

                if (searchWithInventory) {
                    res = await fetchByInventory(page, limit, token);
                }

                dispatch(
                    {
                        type: SET_SEARCH_RESULTS,
                        payload: {
                            searchResults: res.docs,
                            totalPages: res.totalPages,
                            prevPage: res.hasPrevPage,
                            nextPage: res.hasNextPage,
                            page: res.page
                        }
                    }
                );
                window.scrollTo(0, 0);
            } catch (e) {
                setError('Service is currently unavailable, please try again later');
            }
        }
    }

    const goNext = async () => {
        if (nextPage) {
            const newPage = page + 1;
            try {

                let res = null;

                if (!searchTerm && !searchWithInventory) {
                    res = await fetchAll(newPage, limit, token);
                }

                if (searchTerm && !searchWithInventory) {
                    res = await fetchByKeyword(searchTerm, newPage, limit, token);
                }

                if (searchWithInventory) {
                    res = await fetchByInventory(newPage, limit, token);
                }

                dispatch(
                    {
                        type: SET_SEARCH_RESULTS,
                        payload: {
                            searchResults: res.docs,
                            totalPages: res.totalPages,
                            prevPage: res.hasPrevPage,
                            nextPage: res.hasNextPage,
                            page: res.page
                        }
                    }
                );
                window.scrollTo(0, 0);
            } catch (e) {
                setError('Service is currently unavailable, please try again later');
            }
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

    const switchCheck = () => {
        if (!check) setCheck(true)
        if (check) setCheck(false)
    }

    return (
        <div className='search-view-container'>

            <div className='tracker-instructions'>
                <span>Use the search bar to explore all the recipe sin the catalog</span>
                <span>If u want a more customized experience, check the bow below
                    to find recipes that fit your inventory
                </span>
            </div>

            {error && <ErrorMsg>{error}</ErrorMsg>}

            <form className='search-form' onSubmit={(event) => search(event)}>
                <div className='search-bar'>
                    <input className='input-text search-input' type='search' name='search' placeholder='Search by keyword' ref={searchInput}></input>
                    <button className='login-btn search-btn' name='submit' type='submit'>Find recipes</button>
                </div>
                <div className='search-with-inventory'>
                    {check ? <SquareCheck className='check-with-inventory' /> :
                        <Square className='check-with-inventory' />}
                    <label className='input-check' htmlFor='search-inventory'
                        onClick={() => switchCheck()}
                    >Check this to find recipes only with what you have</label>
                    <input className='input-check' type="checkbox" name='search by inventory' id='search-inventory'></input>
                </div>
            </form>
            <div className='results-container'>
                {searchResults && searchResults.length === 0 && !error && <span>Use the search tools above to find your next favorite recipe!</span>}
                {searchResults && searchResults.length !== 0 && searchResults.map(recipe => <Link className='recipe-card-link' to='/recipe' key={searchResults.indexOf(recipe)}>
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

            <Pagination
                actualPage={page}
                totalPages={totalPages}
                goPrevious={() => goPrevious()}
                goNext={() => goNext()}
                document={'Page'}
            />

        </div>
    );
}

export default SearchView;