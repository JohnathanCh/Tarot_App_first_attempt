import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './login_signup/Signup';
import { fetchCards } from './store/allCards/actions';
import { connect } from 'react-redux';
import CardList from './components/cards/CardList'

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
    // console.log("App Props", this.props);
    
    const user = this.props.user
    // console.log("user", user);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Tarot App</h1>
        </header>
        {!user.loggedIn ? <Signup /> : <CardList /> }
        
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchAllCards: () => {
    dispatch(fetchCards())
  }
})

const mapStateToProps = (state) => ({
  user: { ...state.user },
  cards:{ ...state.cards}
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


