import * as React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import { Provider, connect } from 'react-redux'
import { getFirebase } from 'react-redux-firebase'
import { toastr } from 'react-redux-toastr'
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
            <div>
                <h2>{this.state.email}</h2>
                <TextField
                    hintText="Hint Text"
                    value={this.state.email}
                    onChange={this.handleChange}
                /><br />
                <br />
                <h2>{this.state.password}</h2>
                <TextField
                    value={this.state.password}
                    onChange={this.handleChangePassword}
                    hintText="The hint text can be as long as you want, it will wrap."
                /><br />

                <RaisedButton onClick={() => {
                    getFirebase().auth()
                        .signInWithEmailAndPassword(this.state.email, this.state.password)
                        .then(() => {
                            this.props.dispatch({ type: 'PROFILE' })
                            toastr.success('LOGIN', 'Success')
                            console.log(99)
                        })
                        .catch(() => {
                            toastr.error('LOGIN', 'Wrong user/password')

                        })


                }} label="Secondary" secondary={true} />
            </div>
        )
    }
};

