import * as React from "react"
import { connect } from "react-redux"
import * as CSS from "../hey.pcss"
import { ListItem } from "material-ui/List"
import Avatar from "material-ui/Avatar"
declare var require: any
const coin = require("../../public/coin.png")
import { fakeReward } from "../../shared/shared"

@connect()
export default class ChallengeItem extends React.Component<{
    challenge?: any,
    key?: string;
    lat?: any,
    long?: any
}, {}> {
    constructor(props) { super(props) }
    public render() {
        const { challenge } = this.props
        const rightAvatar = (
            <div className={CSS.pedra}>
                <img className={CSS.coin} alt="" src={coin} />
                <div className={CSS.price}>
                    {challenge.award}
                </div >
            </div >
        )
        return (
            <ListItem
                onClick={fakeReward}
                leftAvatar={<Avatar src={challenge.logo} />}
                key={this.props.key}
                primaryText={challenge.name}
                secondaryText={<p> <span>{challenge.company}</span ></p >}
                rightAvatar={rightAvatar}
                secondaryTextLines={2}
            />
        )
    }
}

