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
declare var require: any
import { distance } from "../../shared/shared"
import Paper from 'material-ui/Paper';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
const coin = require("../../public/coin.png")

export default class Home extends React.Component<{ challenges?: any, lat?: any, long?: any }, {}> {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(23423)
        const { challenges } = this.props
        return (
            <div className={CSS.test} >
                <MyMapComponent lat={this.props.lat} long={this.props.long} challenges={this.props.challenges} isMarkerShown />
                <Paper className={CSS.list} >
                    <List>
                        {
                            Object.keys(this.props.challenges).map((key) => {
                                return (1000 * distance(this.props.lat, this.props.long, challenges[key].lat, challenges[key].long)) < 5000 ? (
                                    <ListItem
                                        leftAvatar={<Avatar src={this.props.challenges[key].logo} />}
                                        key={key}
                                        primaryText={this.props.challenges[key].name}
                                        secondaryText={
                                            <p>
                                                <span >{this.props.challenges[key].company}</span>
                                                <br />
                                            </p>
                                        }
                                        rightAvatar={<div className={CSS.pedra}>

                                            <img className={CSS.coin} alt="" src={coin} />
                                            <div className={CSS.price}>
                                                {this.props.challenges[key].award}
                                            </div>
                                        </div>}




                                        secondaryTextLines={2}
                                    />
                                ) : null
                            })}
                    </List>
                </Paper>
            </div>
        )
    }
}
