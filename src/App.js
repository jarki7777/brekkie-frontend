import './App.sass';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/Header';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Header} exact />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;