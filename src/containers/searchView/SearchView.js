import './SearchView.sass';
import RecipeCard from '../../components/recipeCard/RecipeCard';
import { useState } from 'react';

const SearchView = () => {
    const [recipes, setRecipes] = useState(null);

    const search = (event) => {

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


        </div>
    );
}

export default SearchView;