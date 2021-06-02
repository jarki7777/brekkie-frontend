import './SearchView.sass';
import RecipeCard from '../../components/recipeCard/RecipeCard';
import { useState } from 'react';
import Pagination from '../../components/pagination/Pagination';

const SearchView = () => {
    const [recipes, setRecipes] = useState(null);
    const [page, setPage] = useState(null);
    const [totalPages, setTotalPages] = useState(null);

    const search = (event) => {

    }

    const goPrevious = () => {
        console.log('prev');
    }

    const goNext = () => {
        console.log('next');
    }

    return (
        <div className='search-view-container'>

            <form className='search-form' onSubmit={(event) => search(event)}>
                <div className='search-bar'>
                    <input className='input-text' type='search' name='search' placeholder='Search by keyword'></input>
                    <button className='login-btn' name='submit' type='submit'>Find recipes</button>
                </div>
                <label htmlFor='search-inventory'>Use my inventory ingredients</label>
                <input className='input-check' type="checkbox" name='search by inventory' id='search-inventory'></input>
            </form>

            <RecipeCard
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
                goPrevious={goPrevious}
                goNext={goNext}
            />

        </div>
    );
}

export default SearchView;