import * as React from "react";
import * as ReactDOM from "react-dom";
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux'
import { getFirebase } from 'react-redux-firebase'
import { pathToJS } from 'react-redux-firebase'
import { initialUser } from "../../shared/shared";


@connect(({ firebase, location, user, dispatch }) => ({
    user, dispatch, firebase,
    auth: pathToJS(firebase, 'auth'),

}))
export default class SideBar extends React.Component<{ dispatch?: any, auth?: any, user?: any }>{
    render() {
        return <AppBar
        title="CKJNKN"
        onLeftIconButtonTouchTap={() => { this.props.dispatch({ type: "TOOGLE_SIDEBAR" }) }}
        onTitleTouchTap={() => { this.props.dispatch({ type: "HOME" }) }}
        iconElementRight={
            <FlatButton
            onClick={() => {
                if (this.props.user.name !=="joe doe") {
                    this.props.dispatch({ type: 'LO' })
                    getFirebase().auth().signOut().then(() => {

                        this.props.dispatch({ type: "SET_CURRENT_USER", payload: initialUser })
			console.log(3333)
		    })
		} else {
                    this.props.dispatch({ type: 'LOGIN' })
                }
            }}
            className="muidocs-icon-navigation-expand-more"
            label={this.props.user.name !== "joe doe" ? "Logout" : "Login"}
            />}
        />

    }

}
