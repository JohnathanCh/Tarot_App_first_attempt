import React, { Component } from 'react';
import './App.css';
import Auth from './auth';
import MenuExampleTabularOnLeft from './navbar'


class App extends Component {
  render() {
    return (
      <div className="App">
      <MenuExampleTabularOnLeft/>
      <Auth/>
      </div>
    );
  }
}

export default App;
