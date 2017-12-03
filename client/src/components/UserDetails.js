import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';

import './UserDetails.css';

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
            <div className="userInfo">
                <Panel header={name}>
                    <div>{bet}</div>
                    <hr/>
                    <div className={`status${runningStatus}`}>{runningStatus}</div>
                </Panel>
            </div>
        )
    }
}

export default UserDetails;