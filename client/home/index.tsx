import * as React from "react"
import { connect } from "react-redux"
import { isLoaded, isEmpty } from "react-redux-firebase"
import Home from "./component"

@connect()
export default class HomeLoader extends React.Component<{ dispatch?: any, challenges?: any, lat?: any, long?: any }, {}> {
    constructor(props) { super(props) }
    public render() {

        console.log(23423)
        const { challenges } = this.props
        return (
            <div>
                {
                    !isLoaded(challenges)
                        ? "Loading"
                        : isEmpty(challenges)
                            ? "Todo list is empty"
                            : (geo() && this.props.lat ?
                                <Home
                                    lat={this.props.lat}
                                    long={this.props.long}
                                    challenges={challenges}
                                /> : <h2>We need you to enable geoloation</h2>)
                }
            </div>
        )
    }
}

const geo = () => {
    if (navigator.geolocation)
        return true
    else {
        return false
    }
}
