import * as React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import { Provider, connect } from 'react-redux'
import { getFirebase } from 'react-redux-firebase'
import { toastr } from 'react-redux-toastr'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import * as CSS from "../hey.css"
@connect()
export default class Login extends React.Component<{ dispatch?: any }, { email: string, password: string }>{
    constructor(props) {
        super(props);

        console.log(getFirebase())
        this.state = {
            email: 'francescoaferraro@gmail.com',
            password: 'hackaton'
        };
    }

    handleChangePassword = (event) => {
        this.setState({
            password: event.target.value,
        });
    };
    handleChange = (event) => {
        this.setState({
            email: event.target.value,
        });
    };
    render() {
        return (
            <div className={CSS.content} >
                <Card className={CSS.login}>
                    <TextField
                        hintText="Hint Text"
                        type="email"
                        fullWidth={true}
                        value={this.state.email}
                        floatingLabelText="Email"
                        onChange={this.handleChange}
                    />
                    <TextField
                        fullWidth={true}
                        floatingLabelText="Password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChangePassword}
                        hintText="The hint text can be as long as you want, it will wrap."
                    /><br />

                    <RaisedButton onClick={() => {
                        getFirebase().auth()
                            .signInWithEmailAndPassword(this.state.email, this.state.password)
                            .then((hy) => {
                                this.props.dispatch({ type: 'PROFILE' })
                                toastr.success('LOGIN', 'Success')
                                console.log(hy)
                            })
                            .catch(() => {
                                toastr.error('LOGIN', 'Wrong user/password')

                            })
                    }} label="Secondary" secondary={true} />
                </Card>
            </div>
        )
    }
};

