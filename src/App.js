import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './containers/main/Main';
import Footer from './components/footer/Footer';

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
      <Footer />
    </>
  );
}

export default App;