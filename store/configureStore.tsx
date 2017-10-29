declare var env: any;
import * as React from "react";
import * as ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider, connect } from 'react-redux'
import Link from 'redux-first-router-link'
import { composeWithDevTools } from "redux-devtools-extension"
import { connectRoutes } from 'redux-first-router'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase'
import { challengeReducer } from "./reducers"
import { routesMap } from "../client/routes"
import { sideBarReducer, currentUserReducer } from "./reducers"


let config = {
    apiKey: "AIzaSyC21GwTaA2cXEmBKp4V8kwmGM33I7Iu-Sg",
    authDomain: "rundomic.firebaseapp.com",
    databaseURL: "https://rundomic.firebaseio.com",
    projectId: "rundomic",
    storageBucket: "rundomic.appspot.com",
    messagingSenderId: "237637102132"
};


const reduxFirebaseConfig = { userProfile: 'users' }
const createStoreWithFirebase = compose(reactReduxFirebase(config, reduxFirebaseConfig))(createStore)
import { reducer as toastrReducer } from 'react-redux-toastr'
const history = createHistory()
const { reducer, middleware, enhancer } = connectRoutes(history, routesMap) // yes, 3 redux aspects
const rootReducer = combineReducers({
    user: currentUserReducer,
    sidebar: sideBarReducer,
    toastr: toastrReducer,
    location: reducer,
    firebase: firebaseStateReducer,
    challangeId: challengeReducer
})
const middlewares = composeWithDevTools(applyMiddleware(middleware))
export default createStoreWithFirebase(rootReducer, compose(enhancer, middlewares))
