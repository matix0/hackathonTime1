import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainPage from "./pages/mainPage/mainPage";

import {RegisterPage} from './pages/registerPage/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" exact component={RegisterPage}/>
        <Route path="/" exact component={MainPage}/>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
