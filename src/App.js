import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Main from './containers/main/Main';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Login from './components/login/Login';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/auth' component={Login} exact />
          <Route path='/' component={Main} exact />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;