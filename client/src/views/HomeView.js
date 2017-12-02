import React, {Component} from 'react';

class HomeView extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentBetsData: [
         {user: 'mama', bet: 3, runningStatus: 'Lost'},
         {user: 'poo', bet: 4, runningStatus: 'Undecided'},
         {user: 'sai', bet: 5, runningStatus: 'Undecided'},
         {user: 'kau', bet: 3, runningStatus: 'Won'}]
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
            {this.renderCurrentBets()}
          </div>
        );
    }

    getCurrentBets() {
      fetch('url',{username: this.props.userName})
        .then((response)=>{
          return response.json();
        })
        .then((data)=>{
          if(data){
            this.setState({
              currentBetsData: data
            });
          }
        })
        .catch((err)=>{
          console.log('Ayyo puttukichu', err);
        })
    }

    renderCurrentBets() {
      return this.currentBetsData.map(friend => {
        <UserDetails friend={friend} />
      });
    }
}

export default HomeView;