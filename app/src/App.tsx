import { BrowserRouter, Route, Switch, Redirect, RouteProps } from 'react-router-dom'

import MainPage from "./pages/mainPage/mainPage";
import {RegisterPage} from './pages/registerPage/index';
import LoginPage from './pages/loginPage/loginPage';
import PasswordPage from './pages/passwordPage/passwordPage';
import RecoveryPage from './pages/recoveryPage';
import ProfilePage from './pages/profilePage/profilePage';
import TestePage from './pages/testPage/index';

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
        <ProtectedRoute path="/profile" exact component={ProfilePage}/>
        <Route path="/password" exact component={PasswordPage}/>
        <Route path="/recover_password/:id" exact component={RecoveryPage}/>
        <Route path="/teste" exact component={TestePage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
