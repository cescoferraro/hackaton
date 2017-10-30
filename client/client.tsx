import * as React from "react";
import * as ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux'
import store from "../store/configureStore"
import AppContainer from "./app"
import "./hey.pcss"

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <AppContainer />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById("root")
);
