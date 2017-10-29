declare var require: any
import * as React from "react";
import MyAppBar from '../bar';
import { Provider, connect } from 'react-redux'
import Link from 'redux-first-router-link'
import * as CSS from "../hey.css"
import { firebaseConnect, isLoaded, isEmpty, dataToJS, pathToJS, toJS } from 'react-redux-firebase'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardText, CardMedia } from 'material-ui/Card';
//import avatarPicture from '../profile.png';
@connect(
    // Map state to props
    ({
        firebase, location, user }) => ({
            authError: pathToJS(firebase, 'authError'),
            auth: pathToJS(firebase, 'auth'),
            user,
            location,
            profile: pathToJS(firebase, 'profile')
        })
)
export default class Profile extends React.Component<{ user?: any, location?: any, auth?: any, challenges?: any, lat?: any, long?: any }, {}> {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(23423)
        console.log(this.props.location)

        const { challenges, location } = this.props
        return (
            <div style={{ overflowX: 'hidden', overflowY: 'auto' }}>
                <Card className={CSS.profile}>
                    <CardMedia className={CSS.profilePhoto}>
                        <img src={this.props.user.foto} alt="" />
                    </CardMedia>
                    <br />
                    <div>
                        <TextField
                            style={{ marginBottom: 20, marginLeft: 20, marginRight: 20 }}
                            value={this.props.user.name}
                            hintText=""
                            floatingLabelText="Nome"
                            fullWidth={false}
                            disabled={true}
                        /><br />
                        <TextField
                            style={{ marginBottom: 20, marginLeft: 20, marginRight: 20 }}
                            value={this.props.user.email}
                            hintText=""
                            fullWidth={false}
                            floatingLabelText="Email"
                            disabled={true}
                        /><br />
                        <TextField
                            style={{ marginBottom: 20, marginLeft: 20, marginRight: 20 }}
                            value={this.props.user.moedas}
                            type="number"
                            hintText=""
                            fullWidth={false}
                            floatingLabelText="Moedas"
                            disabled={true}
                        /><br />
                    </div>
                </Card>
            </div>


        )
    }
}
