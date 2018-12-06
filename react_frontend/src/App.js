import React, { Component } from 'react';
import './App.css';
import Signup from './Auth'
import MenuExampleTabularOnLeft from './navbar';
import { Provider } from 'react-redux';
import store from './store/index';
// import Login from './Login';


class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
        <MenuExampleTabularOnLeft/>
        <Signup />
        </div>
      </Provider>
    );
  }
}

export default App;
