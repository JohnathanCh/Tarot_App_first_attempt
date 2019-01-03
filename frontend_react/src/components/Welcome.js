import React from 'react';
import { Switch, Route } from 'react-router'
import Signup from '../login_signup/Signup';
import Login from '../login_signup/Login';


export default class Welcome extends React.Component {

    render() {
        return (
            <div>
                <Switch >
                    <Route exact path="/" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                </Switch>
 
            <img src="http://media.beliefnet.com/~/media/photos-with-attribution/spiritual/tarotcardscreditShutterstockcom.jpg?as=1" className="bg"/>
            
            </div>
        )
    }
}