import * as React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux'
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Done from 'material-ui/svg-icons/action/done';
import DonutSmall from 'material-ui/svg-icons/action/donut-small';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Person from 'material-ui/svg-icons/social/person';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import { firebaseConnect, isLoaded, isEmpty, dataToJS, pathToJS, toJS } from 'react-redux-firebase'
import { Card, CardActions, CardHeader, CardText, CardMedia } from 'material-ui/Card';
import * as CSS from "../hey.css"

@connect(({ firebase, location, user, dispatch }) => ({
    user, dispatch, firebase,
    auth: pathToJS(firebase, 'auth'),

}))
export default class SideBar extends React.Component<{ auth?: any, user?: any, open: boolean, dispatch?: any }, { open: boolean }> {
    render() {
        const fixed = <div>
            <ListItem
                primaryText={"Desafios"}
                onClick={() => {
                    this.props.dispatch({ type: "HOME" })
                    this.props.dispatch({ type: "TOOGLE_SIDEBAR" })
                }}
                leftIcon={<Done />}
            />
            <ListItem
                primaryText={"Profile"}
                onClick={() => {
                    this.props.dispatch({ type: "PROFILE" })
                    this.props.dispatch({ type: "TOOGLE_SIDEBAR" })
                }}
                leftIcon={<ActionGrade />}
            />
        </div>
        return (
            <Drawer
                docked={false}
                onRequestChange={(open) => { this.props.dispatch({ type: "TOOGLE_SIDEBAR" }) }}
                open={this.props.open} >
                {this.props.user.name === "joe doe" ?
                    <RaisedButton
                        style={{ display: 'flex', alignContent: 'center', alignItems: 'center', margin: 20 }}
                        buttonStyle={{ backgroundColor: '#00BCD4' }}
                        onClick={() => {
                            this.props.dispatch({ type: "LOGIN" })
                            this.props.dispatch({ type: "TOOGLE_SIDEBAR" })
                        }}
                        label="LOGIN"
                        secondary={true} /> :
                    <CardMedia className={CSS.profilePhoto}>
                        <img src={this.props.user.foto} alt="" />
                    </CardMedia>
                }
                <br />
                <br />
                <br />
                {this.props.user.name === "joe doe" ? <List>
                    
                </List> : <List>
                        <ListItem primaryText={this.props.user.name} leftIcon={<Person />} />
                        <ListItem primaryText={this.props.user.moedas + " Moedas"} leftIcon={<DonutSmall />} />
                        {fixed}
                    </List>
                }
            </Drawer>
        );
    }
}
