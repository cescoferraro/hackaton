import * as React from "react";
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel";
import Link from 'redux-first-router-link'
declare var google: any;
import { connect } from 'react-redux'
import * as CSS from "../hey.pcss"
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
const coin = require("../../public/coin.png")
/* const svg = "https://trello-attachments.s3.amazonaws.com/59f4f0b6d4ebbe42bd9b41ba/300x490/283b282e4347b662a0392691b6fc384f/gamecoin_marker.png"*/
declare var require: any;
const svg = require("./marker.png")
@connect()
class Markerss extends React.Component<{ challenge: any, dispatch?: any, id: string }, { open: boolean }>{
    constructor(props) {
        super(props)
        this.state = { open: false }
    }
    render() {
        const go = () => this.props.dispatch({ type: 'CHALLENGE', payload: { id: this.props.id } })
        console.log(this.props)
        return this.state.open ? <MarkerWithLabel
            position={{ lat: this.props.challenge.lat, lng: this.props.challenge.long }}
            labelAnchor={new google.maps.Point(0, 0)}
            labelStyle={{ backgroundColor: "white", fontSize: "32px", padding: "16px" }}
            onClick={() => { window.location.href = 'https://www.facebook.com/events/1966359860302568/?context=create&previousaction=create&ref=46&source=2&sid_create=2374811930&action_history=[%7B%22mechanism%22%3A%22bookmarks%22%2C%22surface%22%3A%22bookmarks_menu%22%2C%22extra_data%22%3A%22[]%22%7D%2C%7B%22mechanism%22%3A%22main_list%22%2C%22surface%22%3A%22dashboard%22%2C%22extra_data%22%3A%22%7B%5C%22dashboard_filter%5C%22%3A%5C%22upcoming%5C%22%7D%22%7D%2C%7B%22surface%22%3A%22create_dialog%22%2C%22mechanism%22%3A%22user_create_dialog%22%2C%22extra_data%22%3A[]%7D]&has_source=1' }}
            icon={{
                url: svg
            }}
        >
            <div>
                <Paper className={CSS.listMarker} >
                    <ListItem
                        leftAvatar={<Avatar src={this.props.challenge.logo} />}
                        primaryText={this.props.challenge.name}
                        secondaryText={
                            <p>
                                <span >{this.props.challenge.company}</span>
                                <br />
                            </p>
                        }
                        rightAvatar={
                            <div className={CSS.pedraMarker}>
                                <img className={CSS.coinMarker} alt="" src={coin} />
                                <div className={CSS.priceMarker}>
                                    {this.props.challenge.award}
                                </div>
                            </div>}
                        secondaryTextLines={2}
                    />
                    <p className={CSS.desc}>
                        {this.props.challenge.desc}
                    </p>
                </Paper>
            </div>

        </MarkerWithLabel> :
            <Marker
                position={{ lat: this.props.challenge.lat, lng: this.props.challenge.long }}
                onClick={() => { this.setState({ open: true }) }}
                icon={{
                    url: svg
                }}
            >
            </Marker>



    }
}

function distance(lat1, lon1, lat2, lon2) {
    var p = 0.017453292519943295;    // Math.PI / 180
    var c = Math.cos;
    var a = 0.5 - c((lat2 - lat1) * p) / 2 +
        c(lat1 * p) * c(lat2 * p) *
        (1 - c((lon2 - lon1) * p)) / 2;

    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}

export const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCWY5F_K-smbBNSPB2JwHEqHeekgYx0ahE&v=3.exp&libraries=geometry,drawing,places&",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `50vh` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: props.lat, lng: props.long }}
    >

        {
            Object.keys(props.challenges).map((key) => (distance(props.lat, props.long, props.challenges[key].lat, props.challenges[key].long)) < 5000 ? (
                <Markerss challenge={props.challenges[key]} id={key} key={key} ></Markerss>) : null)}
    </GoogleMap>
    )
