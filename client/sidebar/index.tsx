import * as React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux'

@connect()
export default class SideBar extends React.Component<{ open: boolean, dispatch?: any }, { open: boolean }> {
    render() {
        return (
            <Drawer
                docked={false}
                onRequestChange={(open) => {

                    this.props.dispatch({ type: "TOOGLE_SIDEBAR" })

                }}
                open={this.props.open} >
                <AppBar title="AppBar" />
            </Drawer>
        );
    }
}
