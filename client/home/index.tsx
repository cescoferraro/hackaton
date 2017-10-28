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

export default class Home extends React.Component<{ challenges?: any }, { hey: any }> {
    render() {
        return (<div>
            {
                <div className={CSS.test} >
                    <MyMapComponent isMarkerShown />
                    <List>
                        {
                            Object.keys(this.props.challenges).map((key) => (
                                <ListItem
                                    leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
                                    key={key}
                                    primaryText="Raquel Parrado"
                                    secondaryText={
                                        <p>
                                            <span >Recipe to try</span><br />
                                            We should eat this: grated squash. Corn and tomatillo tacos.
						</p>
                                    }
                                    secondaryTextLines={2}
                                />
                            ))}
                    </List>
                </div>
            }

        </div>)
    }
}
