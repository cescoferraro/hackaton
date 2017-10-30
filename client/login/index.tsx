declare var require: any
import * as React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import { Provider, connect } from 'react-redux'
import { getFirebase } from 'react-redux-firebase'
import { toastr } from 'react-redux-toastr'
import { Card, CardActions, CardHeader, CardText, CardMedia } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import * as CSS from "../hey.pcss"

@connect()
export default class Login extends React.Component<{ dispatch?: any }, { regular: boolean, email: string, password: string }>{
    constructor(props) {
        super(props);
        this.state = {
            regular: true,
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
        const jojo = (
            <RaisedButton
                style={{ display: 'flex', alignContent: 'center', alignItems: 'center', margin: 10 }}
                buttonStyle={{ backgroundColor: '#00BCD4' }}
                onClick={() => {
                    this.setState({ regular: !this.state.regular })
                }}
                label="Cadastrar"
                secondary={true}
            />
        )
        return (
            <div className={CSS.content} >

                <Card className={CSS.login}>
                    <CardMedia style={{ marginBottom: 70, marginTop: 10, backgroundColor: '#FFF' }} className={CSS.logoLogin}>
                        <img src={require("../gamecoin.png")} alt="" />
                    </CardMedia>
                    {this.state.regular ?
                        <div className={CSS.work}>
                            <TextField
                                style={{ marginLeft: 10, marginRight: 10 }}
                                hintText="Hint Text"
                                type="email"
                                fullWidth={false}
                                value={this.state.email}
                                floatingLabelText="Email"
                                onChange={this.handleChange}
                            />
                            <TextField
                                style={{ marginLeft: 10, marginRight: 10 }}
                                fullWidth={false}
                                floatingLabelText="Password"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleChangePassword}
                                hintText="The hint text can be as long as you want, it will wrap."
                            /><br />
                            <RaisedButton
                                style={{ display: 'flex', alignContent: 'center', alignItems: 'center', margin: 10 }}
                                buttonStyle={{ backgroundColor: '#00BCD4' }}

                                onClick={() => {
                                    getFirebase().database().ref("users").on("value", (input) => {
                                        console.log(input.val())
                                        Object.keys(input.val()).map((key) => {
                                            if (input.val()[key].email === this.state.email && input.val()[key].password === this.state.password) {
                                                this.props.dispatch({ type: "SET_CURRENT_USER", payload: input.val()[key] })
                                                this.props.dispatch({ type: "PROFILE", payload: input.val()[key] })
                                            }

                                        })
                                    })
                                }}
                                label="LOGIN"
                                secondary={true} />
                            {jojo}
                        </div>
                        : <div className={CSS.work}>
                            {jojo}
                        </div>}
                </Card>
            </div>
        )
    }
};



