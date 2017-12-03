import React, {Component} from 'react';
import UserDetails from '../components/UserDetails';

import '../components/UserDetails.css';

class HomePage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentBetsData: [
         {name: 'SpidySriram', bet: 3, runningStatus: 'Lost'},
         {name: 'AnushaRajan', bet: 4, runningStatus: 'Undecided'},
         {name: 'SaiM', bet: 5, runningStatus: 'Undecided'},
         {name: 'RangarajKaushik', bet: 3, runningStatus: 'Won'},
         {name: 'Sophie', bet: 3, runningStatus: 'Won'}],

         userInfo: {
          userName: 'Sriram Poondi Chinappa',
          points: 450
         }
      }

      this.renderCurrentBets = this.renderCurrentBets.bind(this);
      this.getCurrentBets = this.getCurrentBets.bind(this);
    }
    
    componentWillMount() {
      this.getCurrentBets();
    }

    render() {
        const {userName} = this.props;
        return (
          <div>
            {this.displayUserDetails()}
            {this.renderCurrentBets()}
          </div>
        );
    }

    displayUserDetails() {
      const {userInfo} = this.state;
      return (
        <div className='userDetails'>
          <div className='userName'>{userInfo.userName} </div>
          <div className='userPoints'>{userInfo.points} </div>
        </div>
      )
    }

    getCurrentBets() {
      // fetch('url',{username: this.props.userName})
      //   .then((response)=>{
      //     return response.json();
      //   })
      //   .then((data)=>{
      //     if(data){
      //       this.setState({
      //         currentBetsData: data
      //       });
      //     }
      //   })
      //   .catch((err)=>{
      //     console.log('Ayyo puttukichu', err);
      //   })
    }

    renderCurrentBets() {
      const {currentBetsData} = this.state;
      return currentBetsData.map((friend) => (
        <UserDetails key={friend.name} friend={friend} />
      ));
    }
}

export default HomePage;