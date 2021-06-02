import './SearchView.sass';
import RecipeCard from '../../components/recipeCard/RecipeCard';

const SearchView = () => {
    return (
        <RecipeCard 
        img='IMG_2443-700x933.jpg'
        title='3 Ingredient Pomegranate Balsamic Chicken'
        calories='221'
        likes='0'
        totalVotes='0'
        />
    );
}

export default SearchView;