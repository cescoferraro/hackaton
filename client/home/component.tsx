import * as React from "react"
import { connect } from "react-redux"
import * as CSS from "../hey.pcss"
import { List } from "material-ui/List"
import { MyMapComponent } from "../map"
declare var require: any
import { distance } from "../../shared/shared"
import Paper from "material-ui/Paper"
import HomeItem from "./item"

@connect()
export default class ProfileLoader extends React.Component<{ challenges?: any, lat?: any, long?: any }, {}> {
    constructor(props) { super(props) }
    public render() {
        console.log(23423)
        const { challenges, long, lat } = this.props
        const list = Object.keys(challenges).map((key) => {
            const far = distance(lat, long, challenges[key].lat, challenges[key].long)
            return far < 6000 ? (
                <HomeItem
                    challenge={challenges[key]}
                    key={key}
                    lat={lat}
                    long={long}
                />
            ) : null
        })
        return (
            <div className={CSS.test} >
                <MyMapComponent
                    lat={this.props.lat}
                    long={this.props.long}
                    challenges={this.props.challenges}
                    isMarkerShown={true}
                />
                <Paper className={CSS.list} >
                    <List> {list} </List >
                </Paper >

            </div>
        )
    }
}
