import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './login_signup/Signup';
import { fetchCards } from './store/actions'
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    // fetch('http://localhost:3000/cards')
    // .then(resp => resp.json())
    // .then(cards => {this.setState({
    //   cardList: [...cards.sort((a, b) => {
    //     return (a.id - b.id)
    //   })]
    // })
    // })

    //* sort the cardList on the back
    this.props.fetchAllCards()
  }

  render() {
    console.log(this.state);
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Signup />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchAllCards: () => {
    dispatch(fetchCards())
  }
})

export default connect(null, mapDispatchToProps)(App);


