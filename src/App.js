import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Main from './containers/main/Main';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import RecipeView from './containers/recipeView/RecipeView';
import SearchView from './containers/searchView/SearchView';
import UserIngredients from './containers/userIngredients/UserIngredients';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' component={Main} exact />
          <Route path='/recipe' component={RecipeView} exact />
          <Route path='/search' component={SearchView} exact />
          <Route path='/user_ingredients' component={UserIngredients} exact />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;