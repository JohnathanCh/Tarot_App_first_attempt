import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './Login_Signup/Signup';
// import { One } from './One';


class App extends Component {

  // componentDidMount() {
  //   fetch('http://localhost:3000/cards')
  //   .then(resp => resp.json())
  //   .then(result => {console.log(result);
  //   })
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Signup />
        {/* <One /> */}
      </div>
    );
  }
}

export default App;
