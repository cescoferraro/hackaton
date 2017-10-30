import * as React from "react";
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import MyAppBar from './bar/index';
import { Provider, connect } from 'react-redux'
import Link from 'redux-first-router-link'
import * as CSS from "./hey.pcss"
import { firebaseConnect, isLoaded, isEmpty, dataToJS, pathToJS, toJS } from 'react-redux-firebase'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import { MyMapComponent } from "./map"
import HomeLoader from "./home"
import Profile from "./profile";

import Login from "./login"
import ReduxToastr from 'react-redux-toastr'
import RegisterComponent from "./register";
import SideBar from "./sidebar"
@firebaseConnect([{ path: 'challenges' }])
@connect(
    (state) => {
        console.log(state)
        return ({
            challenges: dataToJS(state.firebase, 'challenges'),
            sidebar: state.sidebar,
            location: state.location
        })
    }
)
export default class App extends React.Component<{ sidebar?: boolean, location?: any, onClick?: any, challenges?: any }, { lat: any, long: any }> {
    constructor(props) {
        super(props)
        this.state = { lat: 0, long: 0 }
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({ ...this.state, lat: position.coords.latitude, long: position.coords.longitude })
        });

    }
    render() {
        let content;
        switch (this.props.location.type) {
            case "HOME":
                content = <HomeLoader challenges={this.props.challenges} lat={this.state.lat} long={this.state.long} />
                break;
            case "CHALLENGE":
                content = <h1>Challange</h1>
                break;
            case "LOGIN":
                content = <Login />
                break;
            case "PROFILE":
                content = content = <div>
                    {
                        !isLoaded(this.props.challenges)
                            ? 'Loading'
                            : isEmpty(this.props.challenges)
                                ? 'Todo list is empty'
                                : (

                                    <Profile

                                    />
                                )
                    }
                </div>
                break;
            case "REGISTER":
                content = <div><RegisterComponent /></div>
                break;
            default:
                content = <h1>not found</h1>
                break;
        }
        return (
            <div>
                <MyAppBar />
                <div >
                    {content}
                </div>
                <SideBar open={this.props.sidebar} />
                <ReduxToastr
                    timeOut={4000}
                    newestOnTop={false}
                    preventDuplicates
                    position="top-left"
                    transitionIn="fadeIn"
                    transitionOut="fadeOut"
                    progressBar />
            </div>
        )
    }
}

