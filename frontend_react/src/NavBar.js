import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import ReadingList from './components/readings/ReadingList'
import CardList from './components/cards/CardList'
import Profile from './components/user/Profile'

export default class NavBar extends React.Component {

    render() {
        return (
            <div class="ui inverted menu">
                <h1>NavBar</h1>
                <Link to="/cards" />
            </div>
        )
    }
}


                {/* <Switch >
                    <Route path="/cards" component={ CardList } />
                    <Route path="/readings" component={ ReadingList } />
                    <Route path="/profile" component={ Profile } />
                </Switch>  */}
