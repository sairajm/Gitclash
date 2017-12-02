import React, {Component} from 'react';

class UserDetails extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {
        const {uName, bet, runningStatus} = this.props.friend;
        return(
            <div>
              <div>{uName}</div>
              <div>{bet}</div>
              <div>{runningStatus}</div>
            </div>
        )
    }
}

export default UserDetails;