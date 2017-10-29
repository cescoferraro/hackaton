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
    ({ firebase, location }) => ({
        authError: pathToJS(firebase, 'authError'),
        auth: pathToJS(firebase, 'auth'),
        location,
        profile: pathToJS(firebase, 'profile')
    })
)
export default class Profile extends React.Component<{ location?: any, auth?: any, challenges?: any, lat?: any, long?: any }, {}> {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(23423)
        console.log(this.props.location)

        const { challenges, location } = this.props
        return (
            <Card style={{display: 'flex'}}>
                <CardMedia className={CSS.profilePhoto}>
                    <img src={location.payload.foto} alt="" />
                </CardMedia>
                <br />
                <div>
                <TextField
                    style={{padding: 10}}
                    value={location.payload.name}
                    hintText=""
                    floatingLabelText="Nome"
                    fullWidth={true}
                    disabled={true}
                /><br />
                <TextField
                    style={{padding: 10}}
                    value={location.payload.email}
                    hintText=""
                    fullWidth={true}
                    floatingLabelText="Email"
                    disabled={true}
                /><br />
                <TextField
                    style={{padding: 10}}
                    value={location.payload.kind}
                    hintText=""
                    fullWidth={true}
                    floatingLabelText="Tipo"
                    disabled={true}
                /><br />
                <TextField
                    style={{padding: 10}}
                    value={location.payload.moedas}
                    type="number"
                    hintText=""
                    fullWidth={true}
                    floatingLabelText="Moedas"
                    disabled={true}
                /><br />
                </div>
            </Card>


        )
    }
}
