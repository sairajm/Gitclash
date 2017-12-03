import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

import './PlaceBetsPage.css';

class PlaceBets extends Component {
    constructor(props) {
      super(props);
      this.state = {
        friendList:[{name: 'SpidySriram'},
         {name: 'AnushaRajan'},
         {name: 'SaiM'},
         {name: 'RangarajKaushikSundar'},
         {name: 'Sophie'}]
      };
      this.renderUserRows = this.renderUserRows.bind(this);
    }
    renderUserRows() {
        const {friendList} = this.state;
        return friendList.map((friend)=> (
            <tr key={friend.name}>
              <td>{friend.name}</td>
              <td>
                  <input type="number" step="1" min="0" max="7"></input>
              </td>
            </tr>
        ));
    }

    render() {
        return(
            <div className="tableContainer">
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Bets</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUserRows()}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default PlaceBets;