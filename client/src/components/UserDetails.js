import React, {Component} from 'react';

class UserDetails extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {
        const {userName, bet, runningStatus} = this.props.friend;
        return(
            <div>
              <div>{userName}</div>
              <div>{bet}</div>
              <div>{runningStatus}</div>
            </div>
        )
    }
}

export default UserDetails;