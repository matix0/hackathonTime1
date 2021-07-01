import { BrowserRouter, Route, Switch } from 'react-router-dom'

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
