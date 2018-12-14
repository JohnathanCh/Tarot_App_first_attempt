import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createBrowserHistory from "history/createBrowserHistory";
import store from './store/Index';
import { Router, Switch, Route } from 'react-router';

import './App.css';
import Navbar from './navbar';
import Welcome from './welcome/Welcome';
import Signup from './welcome/Signup'
import Readings from './components/Readings/Readings'
import Profile from './components/Profile/Profile'

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Provider store={store} >
          <div className="App">
            <Navbar/>

            <Route exact path="/" component={Welcome}/>
            <Route exact path="/signup" component={Signup} /> 
            <Route exact path="/readings" component={Readings} />
            <Route exact path="/profile" component={Profile} />
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
