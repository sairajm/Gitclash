import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

class LeaderboardPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        leaderBoardData: [{user: 'mama', points: 50}, {user: 'poo', points: 45}, {user: 'sai', points: 40}, {user: 'kau', points: 20}]
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
      </Table>) : null;
    }

  loadLeaderboardData(data) {
    console.log(data)
    return data.map((d) => (
      <tr>
        <td key={d.user}>{d.user}</td>
        <td key={d.user+d.points}>{d.points}</td>
      </tr>
    ))
  }


}

export default LeaderboardPage;