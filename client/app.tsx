import * as React from "react";
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import MyAppBar from './bar';
import { Provider, connect } from 'react-redux'
import Link from 'redux-first-router-link'
import * as CSS from "./hey.css"
class Test extends React.Component<{ hey: string }>{
    render() {
        return <h2>{this.props.hey}</h2>
    }


}

import { firebaseConnect, isLoaded, isEmpty, dataToJS, pathToJS, toJS } from 'react-redux-firebase'
@firebaseConnect([{ path: 'challenges' }])
@connect(
    (state) => {
        console.log(state)
        return ({
            challenges: dataToJS(state.firebase, 'challenges'),
            /* challenges: state.firebase.getIn(['challenges']),*/
            userId: state.userId,
            location: state.location
        })
    }
)
class App extends React.Component<{ location?: any, userId?: string, onClick?: any, challenges?: any }, { hey: any }> {
    render() {
        console.log(this.props)
        switch (this.props.location.type) {
            case "HOME":
                return (<div>
                    <MyAppBar />
                    <ul>
                        {
                            !isLoaded(this.props.challenges)
                                ? 'Loading'
                                : isEmpty(this.props.challenges)
                                    ? 'Todo list is empty'
                                    : Object.keys(this.props.challenges).map((key) => (
                                        <div key={key}>
                                            <h2>
                                                {this.props.challenges[key].name}
                                            </h2>
                                            <h2>
                                                {this.props.challenges[key].lat}
                                            </h2>
                                            <h2>
                                                {this.props.challenges[key].long}
                                            </h2>
                                        </div>
                                    ))}
                    </ul>
                    <div>
                        <div className={CSS.ramiro}>
                            <h1>HOME</h1>
                            <Link to={{ type: 'USER', payload: { id: 123 } }}>User 123</Link>
                            <Link to={{ type: 'USER', payload: { id: 456 } }}>User 456</Link>
                            <span onClick={this.props.onClick}>User 5</span>
                        </div>
                        <div className={CSS.test}>
                            <h1>HOME</h1>
                            <Link to={{ type: 'USER', payload: { id: 123 } }}>User 123</Link>
                            <Link to={{ type: 'USER', payload: { id: 456 } }}>User 456</Link>
                            <span onClick={this.props.onClick}>User 5</span>
                        </div>
                    </div>
                </div>)
            case "USER":
                return <h1>USER: {this.props.userId}</h1>
            default:
                return <h1>not found</h1>
        }
    }
}


export default (App)
