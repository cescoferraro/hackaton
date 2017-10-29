import * as React from "react";
import * as ReactDOM from "react-dom";
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux'




export default connect()(({ dispatch }) => <AppBar
    title="GameCoin"
    onTitleTouchTap={() => { dispatch({ type: "HOME" }) }}
    iconElementRight={
        <FlatButton
            onClick={() => { dispatch({ type: 'LOGIN' }) }}
            className="muidocs-icon-navigation-expand-more"
            label="Login"
        />}
/>)
