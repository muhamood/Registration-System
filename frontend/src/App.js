import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './views/login';
import { SignUp } from './views/signup';
import { Dashboard } from './views/dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path = '/' component={Login}/>
          <Route exact path = '/signup' component={SignUp}/>
          <Route exact path = '/dashboard' component={Dashboard}/>
        </Switch>    
      </div>
    </Router> 
  );
}

export default App;
