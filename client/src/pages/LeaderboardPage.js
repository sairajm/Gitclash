import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

import './LeaderboardPage.css'

class LeaderboardPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        leaderBoardData: [{name: 'SpidySriram', points: 100},
         {name: 'AnushaRajan', points:95},
         {name: 'SaiM', points: 80},
         {name: 'RangarajKaushikSundar',  points: 75},
         {name: 'Sophie', points: 75}]
      };
      this.fetchLeaderboardData = this.fetchLeaderboardData.bind(this);
    }

    componentWillMount() {
      this.fetchLeaderboardData();
    }
    
    render() {
      return (this.renderLeaderboard()); 
    }

    fetchLeaderboardData() {
      // fetch("url").then((response)=>{
      //   response.json();
      // }).then((data) => {
      //   if(data) {
      //     this.setState({
      //       leaderBoardData: data
      //     });
      //   }
      // }).catch((err)=>{
      //   console.log('Ammadi puttukichu', err);
      // })
      return
    }

    renderLeaderboard() {
     const {leaderBoardData} = this.state;
     return (leaderBoardData)? (
      <div className="leaderboardContainer">
        <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>User</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {this.loadLeaderboardData(leaderBoardData)}
            </tbody>
          </Table>
        </div>
          ) : null;
    }

  loadLeaderboardData(data) {
    console.log(data)
    return data.map((d) => (
      <tr key={d.name}>
        <td>{d.name}</td>
        <td>{d.points}</td>
      </tr>
    ))
  }


}

export default LeaderboardPage;