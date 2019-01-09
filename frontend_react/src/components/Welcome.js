import React from 'react';
import { Switch, Route } from 'react-router'
import Signup from '../login_signup/Signup';
import Login from '../login_signup/Login';


export default class Welcome extends React.Component {

    render() {
        return (
            <div id="welcome">
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={Signup} />
            
            </div>
        )
    }
}