import React, {Component} from 'react';

class HomeView extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }

      this.renderCurrentBets = this.renderCurrentBets.bind(this);
      this.currentBetsWrapper = this.currentBetsWrapper.bind(this);
    }

    render() {
        const {userName} = this.props;
        return (this.renderCurrentBets());
    }

    renderCurrentBets() {
     return fetch('url',{username: this.props.userName})
        .then((response)=>{
          return response.json();
        })
        .then((data)=>{
          return this.currentBetsWrapper(data);
        })
        .catch((err)=>{
          console.log('Ayyo puttukichu', err);
        })
    }

    currentBetsWrapper(friends) {
      return friends.map(friend => {
        <UserDetails friend={friend} />
      });
    }


}

export default HomeView;