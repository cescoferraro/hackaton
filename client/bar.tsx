import * as React from "react";
import * as ReactDOM from "react-dom";
import AppBar from 'material-ui/AppBar';

export default ({ onClick }) => <AppBar
    title="Title"
    onClick={onClick}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
/>
