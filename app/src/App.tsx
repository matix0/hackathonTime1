import { BrowserRouter, Route, Switch } from 'react-router-dom'

import MainPage from "./pages/mainPage/mainPage";
import {RegisterPage} from './pages/registerPage/index';
import loginPage from './pages/loginPage/loginPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" exact component={RegisterPage}/>
        <Route path="/" exact component={MainPage}/>
        <Route path="/login" exact component={loginPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
