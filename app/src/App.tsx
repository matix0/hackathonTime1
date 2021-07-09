import { BrowserRouter, Route, Switch, Redirect, RouteProps } from 'react-router-dom'

import MainPage from "./pages/mainPage/mainPage";
import {RegisterPage} from './pages/registerPage/index';
import LoginPage from './pages/loginPage/loginPage';
import PasswordPage from './pages/passwordPage/passwordPage';
import RecoveryPage from './pages/recoveryPage';

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
        <Route path="/password" exact component={PasswordPage}/>
        <Route path="/recover_password/:id" exact component={RecoveryPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
