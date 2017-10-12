import * as React from "react";
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import MyAppBar from './bar';
import { Provider, connect } from 'react-redux'
import Link from 'redux-first-router-link'
const App = ({ location, userId, onClick }) => {
    console.log(location)
    switch (location.type) {
        case "HOME":
            return (<div>
                <MyAppBar />
                <h1>HOME</h1>

                // all 3 "links" dispatch actions:
                <Link to="/user/123">User 123</Link> // action updates location state + changes address bar
                <Link to={{ type: 'USER', payload: { id: 456 } }}>User 456</Link> // so does this
                <span onClick={onClick}>User 5</span>   // so does this, but without SEO benefits
            </div>)
        case "USER":
            return <h1>USER: {userId}</h1>
        default:
            return <h1>not found</h1>
    }
}

const mapStateToProps = ({ userId, location }) => ({ userId, location })
const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch({ type: 'USER', payload: { id: 5 } })
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
