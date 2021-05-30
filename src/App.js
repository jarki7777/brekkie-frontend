import './App.sass';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './containers/main/Main';

const App = () => {
  return (
    <>
      <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Main} exact />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;