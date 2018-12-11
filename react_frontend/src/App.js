import React, { Component } from 'react';
import './App.css';
import Signup from './auth';
import MenuExampleTabularOnLeft from './navbar';
import { Provider } from 'react-redux';
import store from './store/index';
import { Router, Switch, Route } from 'react-router';
import createBrowserHistory from "history/createBrowserHistory";
import Welcome from './welcome/welcome';

const history = createBrowserHistory()


class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Provider store={store} >
          <div className="App">
            <MenuExampleTabularOnLeft/>
            <Welcome/>

          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
