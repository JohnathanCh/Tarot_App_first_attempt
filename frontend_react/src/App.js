import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import { Switch } from 'react-router'
import { connect } from 'react-redux';

import './App.css';
import Signup from './Login_Signup/Signup';
import Login from './Login_Signup/Login';
import { fetchCards } from './store/allCards/actions';
import CardList from './components/cards/CardList'
import Welcome from "./components/Welcome";
import NavBar from './NavBar';
import NewReading from './components/readings/NewReading';
import Profile from './components/user/Profile';

let image = require(`../src/Rider-Waite/The_Fool.png`) 
class App extends Component {

  componentDidMount() {
    this.props.fetchAllCards()

    if (localStorage.token === undefined || this.props.user.loggedIn === false) {
      this.props.history.push('/');
    }
  }

  render() {    
    const user = this.props.user

    return (
      <div className='App'>

        <div id='nav-bar'>
          <NavBar/> 
        </div>

        <div className='page'>

          {!user.loggedIn ? <div>
            <header className='App-header'>
              <marquee scrollamount='5' direction='right'><img src={image} className='App-logo' alt='logo' /></marquee>
            </header> 
          </div> : null 
          }

          <Switch>  
            <Route path='/readings/new' component={ NewReading } />
            <Route path='/cards' component={ CardList }/> 
            <Route exact path='/profile' component={ Profile } />
            <Route exact path='/' component={ Welcome } />
            <Route exact path='/login' component={ Login } />
            <Route exact path='/signup' component={ Signup } />
          </Switch>

        </div>
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