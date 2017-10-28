import * as React from "react";
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
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
import { MyMapComponent } from "../map"

function distance(lat1, lon1, lat2, lon2) {
    var p = 0.017453292519943295;    // Math.PI / 180
    var c = Math.cos;
    var a = 0.5 - c((lat2 - lat1) * p) / 2 +
        c(lat1 * p) * c(lat2 * p) *
        (1 - c((lon2 - lon1) * p)) / 2;

    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}
export default class Home extends React.Component<{ challenges?: any, lat?: any, long?: any }, {}> {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(23423)
        const { challenges } = this.props
        return (<div>
            {
                <div className={CSS.test} >
                    <MyMapComponent lat={this.props.lat} long={this.props.long} challenges={this.props.challenges} isMarkerShown />
                    <List>
                        {
                            Object.keys(this.props.challenges).map((key) => {
                                return (1000 * distance(this.props.lat, this.props.long, challenges[key].lat, challenges[key].long)) < 500 ? (
                                    <ListItem
                                        leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
                                        key={key}
                                        primaryText={this.props.challenges[key].name}
                                        secondaryText={
                                            <p>
                                                <span >{this.props.challenges[key].company}</span>
                                                <br />
                                            </p>
                                        }
                                        secondaryTextLines={2}
                                    />
                                ) : null
                            })}
                    </List>
                </div>
            }

        </div>)
    }
}
