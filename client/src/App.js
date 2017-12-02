import React, { Component } from 'react';
import LoginPage from './views/LoginPage'
import {Switch, Route} from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path="/" render={() => <LoginPage/>}/>
        <Route exact path="/" render={() => <Category/>}/>
      </Switch>
      </div>
    );
  }
}

export default App;
