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
          <h1 className="App-title" style={{margin: "auto"}}>Three Seeds Tarot</h1>
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

// https://lh3.googleusercontent.com/n-lrkn83lbYczUPSREDA2eZVSemf9gTDxwL9slxtGg7WxsfCVP44CM_qoENqNF32UuPl9qazlluEHIFApMzcZXhD2aQeB7NhyEuwn1FZWBssgtt5FeD8j-KzKGtXBVSE7TIEzdf2MmygA9kwEwK6VygNs0_Gp5NWPdYxtAOMb7F6yczF0sAMY8vhPlHdWAh3co_-gPhUGe77a--XHLW5yq-vUG4GnzFbdU9z3AszhH0kf5mEJjzhV44_GqMPPE40uV2Ox_JRwrA4BVRvgFxd3Wxi5SSCRnNtjsBxihyK6PLd_z69k2MY-V6-zQdS2e0dp0sVFr_7BvHR1lbyIjeOJX5vqbVAJrjERpwT8aq_sTD6ppzfwoSReiNd-_uxNfjJtRCbBIW4ZoFnRHQJqKgjYMoaPXSyUgI8xEREXkGphaT178WmYtTyYn--tvZlNHcGJ_gtwQXzKYmYYCrH2ZTA1hvtIEjIZ05EDXItuqID0MM_RhrHpyIokLJL1SoYVw5z3oT9quz-aLZdw7Bw6nDEMUn9cmIlZcuqLW4chdl9xBuLG8YuKGgNjUDXujUaG6eAIg7gbqQB75at-3rHIVkjSAGOjB3aknoDd1QxHDoNaz1TA4QpmlAL=w690-h1158-no





