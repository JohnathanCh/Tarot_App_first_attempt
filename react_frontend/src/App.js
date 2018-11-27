import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './auth';
import MenuExampleTabularOnLeft from './navbar'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <MenuExampleTabularOnLeft/>
          <Auth/>
        </header>
      </div>
    );
  }
}

export default App;
