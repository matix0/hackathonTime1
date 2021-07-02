import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainPage from "./pages/mainPage/mainPage";

import {RegisterPage} from './pages/registerPage/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={RegisterPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
