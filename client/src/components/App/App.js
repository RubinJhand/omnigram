import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../Login/Login';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route exact path='/login'>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
