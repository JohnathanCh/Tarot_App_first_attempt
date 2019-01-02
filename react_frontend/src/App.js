import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import createBrowserHistory from "history/createBrowserHistory";
import store from './store/Index';
import { Router, Switch, Route } from 'react-router';

import './App.css';
import Navbar from './navbar';
import Welcome from './welcome/welcome';
import Signup from './welcome/Signup'
import Readings from './components/Readings/Readings'
import Profile from './components/Profile/Profile'

const history = createBrowserHistory()

class App extends Component {

  state = {
    userInfo: {
      user_name: '',
      userId: 0,
      email: ''
    }
  }

  componentDidMount () {
    const token = localStorage.getItem('token')
    if (token) {
      const options =   {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': token
        }
      }
      fetch('http://localhost:3000/auth', options)
      .then(resp => resp.json())
      .then(user => { console.log(user); console.log("in the componentDidMount func")
        this.setState({
          userInfo: {
              user_name: user.user_name,
              userId: user.id
            }
          })

        })
    }
  }

  render() {
    console.table(this.state);
    return (
      <Router history={history}>
          <div className="App">
            <Navbar/>

            <Route exact path="/" component={Welcome}/>
            <Route exact path="/signup" component={Signup} /> 
            <Route exact path="/readings" component={Readings} />
            <Route exact path="/profile" component={Profile} />
          </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: {...state.userInfo},
  loggedIn: state.loggedIn
})

export default connect(mapStateToProps)(App);
