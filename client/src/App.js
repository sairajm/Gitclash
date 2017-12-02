import React, { Component } from 'react';
import LoginPage from './views/LoginPage'
import {Switch, Route} from 'react-router-dom';
import {Tabs, Tab} from 'react-bootstrap';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  getTabs() {
    return (
      <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
        <Tab eventKey={1} title="Home">Home</Tab>
        <Tab eventKey={2} title="Place Bets">Place Bets</Tab>
        <Tab eventKey={3} title="Leaderboard">Leaderboard</Tab>
      </Tabs>
    )
  }

  render() {
    return (
      <div className="App">
        {this.getTabs()}
        <Switch>
          <Route exact path="/" render={() => <LoginPage/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
