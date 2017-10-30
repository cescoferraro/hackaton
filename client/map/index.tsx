import * as React from "react"
import { distance } from "../../shared/shared"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import CustomMarker from "./marker"
declare var google: any;
export const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/" +
        "api/js?key=AIzaSyCWY5F_K-smbBNSPB2JwHEqHeekgYx0ahE" +
        "&v=3.exp&libraries=geometry,drawing,places&",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `50vh` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)((props) => {
    const { challenges, lat, long } = props
    const far = (key) => distance(lat, long, challenges[key].lat, challenges[key].long)
    const availableMarkers = Object.keys(challenges)
        .map((key) => far(key) < 6000 ? (
            <CustomMarker
                challenge={challenges[key]}
                id={key}
                key={key}
            />) : null)
    let bound = new google.maps.LatLngBounds()
    const locations = Object.keys(challenges)
        .map((key) => {
            console.log(far(key))
            if (far(key) < 6000) {
                console.log("32432")
                bound.extend(new google.maps.LatLng(challenges[key].lat, challenges[key].long))
                return ([challenges[key].lat, challenges[key].long])
            }
            return null
        })

    return (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={availableMarkers.length > 0 ? { lat: bound.getCenter().lat(), lng: bound.getCenter().lng() } : { lat: props.lat, lng: props.long }}
        >
            {availableMarkers}
        </GoogleMap>
    )
})
