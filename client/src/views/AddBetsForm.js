import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

class AddBetsForm extends Component {
    renderUserRows() {
        return(
            <tr>
              <td>Mark</td>
              <td>
                  <input type="text"></input>
              </td>
            </tr>
        )
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

export default AddBetsForm;