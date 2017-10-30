import { Observable } from "rxjs/Observable"
import "rxjs/add/operator/map"
import "rxjs/add/observable/dom/ajax"
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
import HomeComponent from "./home/component"
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
            user: state.user,
            location: state.location
        })
    }
)
export default class App extends React.Component<{
    user?: any,
    sidebar?: boolean,
    location?: any,
    onClick?: any,
    challenges?: any
}, { hey: boolean, lat: any, long: any }> {
    constructor(props) {
        super(props)
        this.state = { lat: 0, long: 0, hey: false }
        const GeolocationAPIKey = "AIzaSyBKGgDf_zqr8yhAsPE5PkShTC3zOlKn5VU"
        var QueryURL =
            "https://www.googleapis.com/geolocation/v1/geolocate?key=" +
            GeolocationAPIKey;
        Observable.ajax({
            method: "POST",
            url: QueryURL,
        }).subscribe((response: any) => {
            console.log(response);
            const { lat, lng } = response.response.location
            this.setState({ hey: true, lat, long: lng })
        })
    }
    render() {
        return (
            <div>
                <MyAppBar />
                <div >
                    {currentComponet(this.props, this.state)}
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


const currentComponet = (props, state) => {
    switch (props.location.type) {
        case "HOME":
            return (
                <HomeLoader
                    challenges={props.challenges}
                    lat={state.lat}
                    long={state.long}
                />
            )
        case "CHALLENGE":
            return <h1>Challange</h1>
        case "LOGIN":
            return <Login />
        case "PROFILE":
            return <Profile user={props.user} />
        case "REGISTER":
            return <div><RegisterComponent /></div>
        default:
            return <h1>not found</h1>
    }
}
