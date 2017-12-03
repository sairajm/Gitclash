import React, {Component} from 'react';
import UserDetails from '../components/UserDetails';

class HomePage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentBetsData: [
         {name: 'mama', bet: 3, runningStatus: 'Lost'},
         {name: 'poo', bet: 4, runningStatus: 'Undecided'},
         {name: 'sai', bet: 5, runningStatus: 'Undecided'},
         {name: 'kau', bet: 3, runningStatus: 'Won'}]
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
        <UserDetails friend={friend} />
      ));
    }
}

export default HomePage;