import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

class AddBetsForm extends Component {
    render() {
        return(
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Bets</th>
                    </tr>
                </thead>
            </Table>
        )
    }
}

export default AddBetsForm;