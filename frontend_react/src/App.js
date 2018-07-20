import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginSignup from './Login_Signup/Login_Signup_component';


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
        <LoginSignup />
      </div>
    );
  }
}

export default App;
