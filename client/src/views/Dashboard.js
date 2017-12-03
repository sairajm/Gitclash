import React, {Component} from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import HomePage from '../pages/HomePage';
import PlaceBetsPage from '../pages/PlaceBetsPage';
import LeaderboardPage from '../pages/LeaderboardPage';

class Dashboard extends Component {
    getTabs() {
        return (
          <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
            <Tab eventKey={1} title="Home">
                <HomePage />
            </Tab>
            <Tab eventKey={2} title="Place Bets">
                <PlaceBetsPage />
            </Tab>
            <Tab eventKey={3} title="Leaderboard">
                <LeaderboardPage />
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