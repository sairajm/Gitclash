import React, { Component } from 'react';
import LoginView from './views/LoginView'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginView/>
      </div>
    );
  }
}

export default App;
