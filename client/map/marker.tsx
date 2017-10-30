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
import { fakeReward } from "../../shared/shared"

@connect()
export default class CustomMarker extends React.Component<{
    challenge: any,
    dispatch?: any,
    id: string
}, { open: boolean }> {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }
    public render() {
        const toogleState = () => { this.setState({ open: !this.state.open }) }
        const secondaryText = <p> <span >{this.props.challenge.company}</span> <br /> </p>
        const rightAvatar = (
            <div className={CSS.pedraMarker}>
                <img className={CSS.coinMarker} alt="" src={coin} />
                <div className={CSS.priceMarker}>
                    {this.props.challenge.award}
                </div>
            </div>
        )
        return this.state.open ? (
            <MarkerWithLabel
                position={{ lat: this.props.challenge.lat, lng: this.props.challenge.long }}
                labelAnchor={new google.maps.Point(0, 0)}
                labelStyle={{ backgroundColor: "white", fontSize: "32px", padding: "16px" }}
                icon={{ url: svg }}
                onClick={toogleState}
            >
                <div>
                    <Paper className={CSS.listMarker} >
                        <ListItem
                            onClick={fakeReward}
                            leftAvatar={<Avatar src={this.props.challenge.logo} />}
                            primaryText={this.props.challenge.name}
                            secondaryText={secondaryText}
                            rightAvatar={rightAvatar}
                            secondaryTextLines={2}
                        />
                        <p className={CSS.desc}>
                            {this.props.challenge.desc}
                            <a href="www.google.com">dfkjsdnf</a>
                        </p>
                    </Paper>
                </div>

            </MarkerWithLabel>
        ) : (
                <Marker
                    position={{ lat: this.props.challenge.lat, lng: this.props.challenge.long }}
                    onClick={toogleState}
                    icon={{ url: svg }}
                />
            )
    }
}
