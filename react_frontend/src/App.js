import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createBrowserHistory from "history/createBrowserHistory";
import store from './store/Index';
import { Router, Switch, Route } from 'react-router';

import './App.css';
import Navbar from './navbar';
import Welcome from './welcome/Welcome';
import Signup from './welcome/Signup'


const history = createBrowserHistory()


class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Provider store={store} >
          <div className="App">
            <Navbar/>

            <Route path="/" exact component={Welcome}/>
            <Route path="/signup" exact component={Signup} /> 
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
