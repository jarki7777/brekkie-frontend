import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Main from './containers/main/Main';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import RecipeView from './containers/recipeView/RecipeView';
import SearchView from './containers/searchView/SearchView';
import Inventory from './containers/inventory/Inventory';
import ShoppingList from './containers/shoppingList/ShoppingList';
import Favorites from './containers/favorites/Favorites';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' component={Main} exact />
          <Route path='/recipe' component={RecipeView} exact />
          <Route path='/search' component={SearchView} exact />
          <Route path='/inventory' component={Inventory} exact />
          <Route path='/shopping' component={ShoppingList} exact />
          <Route path='/favorites' component={Favorites} exact />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;