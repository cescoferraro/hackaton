import * as React from "react";
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import MyAppBar from './bar';
import { Provider, connect } from 'react-redux'
import Link from 'redux-first-router-link'
import * as CSS from "./hey.css"
import { firebaseConnect, isLoaded, isEmpty, dataToJS, pathToJS, toJS } from 'react-redux-firebase'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import { MyMapComponent } from "./map"
import Home from "./home"
@firebaseConnect([{ path: 'challenges' }])
@connect(
    (state) => {
        console.log(state)
        return ({
            challenges: dataToJS(state.firebase, 'challenges'),
            userId: state.userId,
            location: state.location
        })
    }
)
class App extends React.Component<{ location?: any, userId?: string, onClick?: any, challenges?: any }, { hey: any }> {
    render() {
        console.log(this.props)
        switch (this.props.location.type) {
            case "HOME":
                return <div>
                    <MyAppBar />
                    {
                        !isLoaded(this.props.challenges)
                            ? 'Loading'
                            : isEmpty(this.props.challenges)
                                ? 'Todo list is empty'
                                : (
                                    <Home challenges={this.props.challenges} />
                                )
                    }
                </div>
            case "USER":
                return <h1>USER: {this.props.userId}</h1>
            default:
                return <h1>not found</h1>
        }
    }
}


export default (App)
