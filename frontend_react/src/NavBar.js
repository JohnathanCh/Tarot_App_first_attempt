import React from 'react';
import { NavLink, Switch, Route, withRouter } from 'react-router-dom';
import ReadingList from './components/readings/ReadingList'
import CardList from './components/cards/CardList'
import Profile from './components/user/Profile'

class NavBar extends React.Component {

    render() {
        return (
            <div className="ui inverted menu">
                <h1 style={{color: "white"}}>Three Seeds Tarot</h1>

                <button >
                    <NavLink to="/cards"> Cards </NavLink>
                </button>

                <button >
                    <NavLink to="/readings"> Readings </NavLink>
                </button> 

                <button >
                    <NavLink to="/profile"> Profile </NavLink>
                </button> 
                
                
            </div>
        )
    }
}

export default withRouter(NavBar);


                {/* <Switch >
                    <Route path="/cards" component={ CardList } />
                    <Route path="/readings" component={ ReadingList } />
                    <Route path="/profile" component={ Profile } />
                </Switch>  */}
