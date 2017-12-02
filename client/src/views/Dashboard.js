import React, {Component} from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import AddBetsForm from './AddBetsForm';
import LeaderboardView from './LeaderboardView';

class Dashboard extends Component {
    getTabs() {
        return (
          <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
            <Tab eventKey={1} title="Home">Home</Tab>
            <Tab eventKey={2} title="Place Bets">
                <AddBetsForm/>
            </Tab>
            <Tab eventKey={3} title="Leaderboard">
                <LeaderboardView/>
            </Tab>
          </Tabs>
        )
    }

    render() {
        return (
            <div>
                {this.getTabs()}
            </div>
        )
    }
}

export default Dashboard;