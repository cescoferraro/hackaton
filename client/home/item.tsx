import * as React from "react"
import { connect } from "react-redux"
import * as CSS from "../hey.pcss"
import { ListItem } from "material-ui/List"
import Avatar from "material-ui/Avatar"
declare var require: any
const coin = require("../../public/coin.png")

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

const fakeReward = () => {
    window.location.href = "https://www.facebook.com/events/1966359860302568/?context=create&previousaction=create&ref=46&source=2&sid_create=2374811930&action_history=[%7B%22mechanism%22%3A%22bookmarks%22%2C%22surface%22%3A%22bookmarks_menu%22%2C%22extra_data%22%3A%22[]%22%7D%2C%7B%22mechanism%22%3A%22main_list%22%2C%22surface%22%3A%22dashboard%22%2C%22extra_data%22%3A%22%7B%5C%22dashboard_filter%5C%22%3A%5C%22upcoming%5C%22%7D%22%7D%2C%7B%22surface%22%3A%22create_dialog%22%2C%22mechanism%22%3A%22user_create_dialog%22%2C%22extra_data%22%3A[]%7D]&has_source=1"
}
