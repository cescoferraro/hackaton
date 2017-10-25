import * as React from "react";
import * as ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider, connect } from 'react-redux'
import Link from 'redux-first-router-link'
import { composeWithDevTools } from "redux-devtools-extension"

import { connectRoutes } from 'redux-first-router'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { NOT_FOUND } from 'redux-first-router'
declare var env: any;
const isProd = () => {
    if (env === "development") {
        return false
    }
    return true
}
export const userIdReducer = (state = null, action: { type: string; payload: { id: string } }) => {
    switch (action.type) {
        case 'HOME':
        case NOT_FOUND:
            return null
        case 'USER':
            return action.payload.id
        default:
            return state
    }
}
const history = createHistory()
const hackaton = "/hackaton"
// THE WORK:
const routesMap = {
    HOME: isProd() ? hackaton : '/',      // action <-> url path
    USER: isProd() ? hackaton + '/user/:id' : '/user/:id',  // :id is a dynamic segment
}

const { reducer, middleware, enhancer } = connectRoutes(history, routesMap) // yes, 3 redux aspects

// and you already know how the story ends:
const rootReducer = combineReducers({ location: reducer, userId: userIdReducer })
const middlewares = composeWithDevTools(applyMiddleware(middleware))
// note the order: enhancer, then middlewares
export default createStore(rootReducer, compose(enhancer, middlewares))
