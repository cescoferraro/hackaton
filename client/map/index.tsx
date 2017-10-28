import * as React from "react";
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel";
import Link from 'redux-first-router-link'
declare var google: any;
import { connect } from 'react-redux'
/* const svg = "https://trello-attachments.s3.amazonaws.com/59f4f0b6d4ebbe42bd9b41ba/300x490/283b282e4347b662a0392691b6fc384f/gamecoin_marker.png"*/
const svg = "https://trello-attachments.s3.amazonaws.com/59f496c8e68c2ace90c394d8/59f4f0b6d4ebbe42bd9b41ba/58509de69c993f840231fc9a72d7a753/gamecoin_marker.png"
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
            labelStyle={{ backgroundColor: "yellow", fontSize: "32px", padding: "16px" }}
            onClick={() => { go() }}
            icon={{
                url: svg
            }}
        >
            <div> {this.props.challenge.name}</div>
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
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={2}
        defaultCenter={{ lat: props.lat, lng: props.long }}
    >

        {
            Object.keys(props.challenges).map((key) => (1000 * distance(props.lat, props.long, props.challenges[key].lat, props.challenges[key].long)) < 500 ? (
                <Markerss challenge={props.challenges[key]} id={key} key={key} ></Markerss>) : null)}
    </GoogleMap>
    )
