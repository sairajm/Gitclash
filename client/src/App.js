import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import LoginView from './views/LoginView'
import Dashboard from './views/Dashboard'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
 
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <LoginView/>}/>
          <Route exact path="/dashboard" render={() => <Dashboard/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
