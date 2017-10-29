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
//import avatarPicture from '../profile.png';

export default class Profile extends React.Component<{ challenges?: any, lat?: any, long?: any }, {}> {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(23423)
        const { challenges } = this.props
        return (

            // <List>
            // <ListItem
            //   disabled={true}
            //   leftAvatar={
            //     <Avatar src= {""} />
            //   }
            // >
            //   Image Avatar
            // </ListItem>
            // </List>

 <div>
<br />
<TextField
  value="Nome"
  hintText=""
  floatingLabelText="Nome"
  disabled ={true}
/><br />
</div>


        )
    }
}
