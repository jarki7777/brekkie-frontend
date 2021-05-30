import './App.sass';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import MainPageCard from './components/mainPageCard/MainPageCard';

const App = () => {
  return (
    <>
      <Header />
      <MainPageCard image='inventory-card.webp' title='Inventory'description='Fill your inventory and find recipes with what you have' buttonName='Add Items'/>
        <BrowserRouter>
          <Switch>
            {/* <Route path="/" component={Main} exact /> */}
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;