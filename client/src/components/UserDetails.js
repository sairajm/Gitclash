import React, {Component} from 'react';

class UserDetails extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {
        const {name, bet, runningStatus} = this.props.friend;
        console.log('hahaha', name, bet, runningStatus);
        return(
            <div>
              <div>{name}</div>
              <div>{bet}</div>
              <div>{runningStatus}</div>
            </div>
        )
    }
}

export default UserDetails;