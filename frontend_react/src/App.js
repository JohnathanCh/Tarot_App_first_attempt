import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom'
import { Switch } from 'react-router'
import { connect } from 'react-redux';

import Signup from './login_signup/Signup';
import { fetchCards } from './store/allCards/actions';
import CardList from './components/cards/CardList'
import Welcome from "./components/Welcome";
import NavBar from './NavBar'
import NewReading from './components/readings/NewReading';
import ReadingSplash from "./components/readings/ReadingSplash";
import Profile from './components/user/Profile';

let image = require(`../src/Rider-Waite/The_Fool.png`) 
class App extends Component {

  componentDidMount() {
    this.props.fetchAllCards()
  }

  render() {
    console.log("App Props", this.props);
    
    const user = this.props.user

    return (
      <div className="App">
      {!user.loggedIn ? null : <NavBar /> }

        {!user.loggedIn ? <div>
          <header className="App-header">
          <img src={image} className="App-logo" alt="logo" />
        </header> <Signup /> </div> : null }

        <Switch>  
          <Route exact path='/readings/new' component={ NewReading } />
          <Route exact path="/readings" component={ ReadingSplash } />
          <Route exact path="/cards" component={CardList}/> 
          <Route exact path="/profile" component={Profile} />
          <Route exact path='/' component={Welcome} />
        </Switch>

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));





