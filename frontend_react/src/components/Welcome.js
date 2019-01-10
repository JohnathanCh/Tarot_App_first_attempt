import React from 'react';
import { Route } from 'react-router'
import Login from '../Login_Signup/Login';
import Signup from '../Login_Signup/Signup';

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