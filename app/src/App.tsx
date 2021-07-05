import { BrowserRouter, Route, Switch, Redirect, RouteProps } from 'react-router-dom'

import MainPage from "./pages/mainPage/mainPage";
import {RegisterPage} from './pages/registerPage/index';
import LoginPage from './pages/loginPage/loginPage';

function App() {
  const ProtectedRoute = ({...routesProps}: RouteProps) => {
      if(localStorage.getItem('token')){
          return <Route {...routesProps}/>;
      }
      else {
          return <Redirect to={{pathname: '/login'}} />
      }
  };
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" exact component={RegisterPage}/>
        <Route path="/login" exact component={LoginPage}/>
        <ProtectedRoute path="/" exact component={MainPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
