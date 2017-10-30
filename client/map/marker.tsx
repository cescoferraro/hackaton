import * as React from "react"
import { Marker } from "react-google-maps"
import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel"
declare var google: any
import { connect } from "react-redux"
import * as CSS from "../hey.pcss"
import Avatar from "material-ui/Avatar"
import Paper from "material-ui/Paper"
import { ListItem } from "material-ui/List"
const coin = require("../../public/coin.png")
declare var require: any
const svg = require("./marker.png")

@connect()
export default class CustomMarker extends React.Component<{ challenge: any, dispatch?: any, id: string }, { open: boolean }>{
    constructor(props) {
        super(props)
        this.state = { open: false }
    }
    public render() {
        const go = () => this.props.dispatch({ type: "CHALLENGE", payload: { id: this.props.id } })
        console.log(this.props)
        return this.state.open ? <MarkerWithLabel
            position={{ lat: this.props.challenge.lat, lng: this.props.challenge.long }}
            labelAnchor={new google.maps.Point(0, 0)}
            labelStyle={{ backgroundColor: "white", fontSize: "32px", padding: "16px" }}
            onClick={() => { window.location.href = "https://www.facebook.com/events/1966359860302568/?context=create&previousaction=create&ref=46&source=2&sid_create=2374811930&action_history=[%7B%22mechanism%22%3A%22bookmarks%22%2C%22surface%22%3A%22bookmarks_menu%22%2C%22extra_data%22%3A%22[]%22%7D%2C%7B%22mechanism%22%3A%22main_list%22%2C%22surface%22%3A%22dashboard%22%2C%22extra_data%22%3A%22%7B%5C%22dashboard_filter%5C%22%3A%5C%22upcoming%5C%22%7D%22%7D%2C%7B%22surface%22%3A%22create_dialog%22%2C%22mechanism%22%3A%22user_create_dialog%22%2C%22extra_data%22%3A[]%7D]&has_source=1" }}
            icon={{ url: svg }}
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
