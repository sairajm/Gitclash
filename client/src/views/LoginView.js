import React,{Component} from 'react';
import { Button, Form, FormControl, FormGroup, Col, ControlLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 
class LoginView extends Component {
    render() {
        return(
            <div>
                <Link to={'/dashboard'} style={{ textDecoration: 'none' }}>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Username
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="Username" />
                        </Col>
                    </FormGroup>
                </Form>
                    <Button bsStyle="success">Login</Button>
                </Link>
            </div>
        )
    }
}

export default LoginView;