import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

class PlaceBets extends Component {
    constructor(props) {
      super(props);
      this.state = {
        friendList:[{name: 'mama'}, {name: 'sai'}, {name: 'poo'}, {name: 'kau'}]
      };
      this.renderUserRows = this.renderUserRows.bind(this);
    }
    renderUserRows() {
        const {friendList} = this.state;
        return friendList.map((friend)=> (
            <tr>
              <td>{friend.name}</td>
              <td>
                  <input type="number" step="1" min="0" max="7"></input>
              </td>
            </tr>
        ));
    }

    render() {
        return(
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
        )
    }
}

export default PlaceBets;