import React,{Component} from 'react';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class LoginView extends Component {

    render() {
        return(
            <div>
                <Link to={'/dashboard'} style={{ textDecoration: 'none' }}>
                    <Button bsStyle="success">Login</Button>
                </Link>
                
            </div>
        )
    }
}

export default LoginView;