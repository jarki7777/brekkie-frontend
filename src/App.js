import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Main from './containers/main/Main';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import RecipeView from './containers/recipeView/RecipeView';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' component={Main} exact />
          <Route path='/recipe' component={RecipeView} exact />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;