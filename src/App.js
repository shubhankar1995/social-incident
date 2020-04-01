import React from 'react';
import{
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import RegistrationForm from './pages/RegistrationForm';
import WelcomePage from './pages/WelcomePage';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/registration" component={RegistrationForm}/>
        <Route path="/login" component={LoginForm} />
        <Route path="/welcome" component={WelcomePage} />
        <Route path="/" component={LoginForm} />
      </Switch>
    </Router>
  );
}

export default App;
