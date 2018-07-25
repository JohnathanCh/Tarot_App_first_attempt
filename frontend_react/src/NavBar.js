import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {

    render() {
        return (
            <div class="ui inverted menu">
                <h1>NavBar</h1>
                <Link to="/Cards"> Cards </Link>
                {/* <Link to="/Profile"> Profile </Link> */}
                
            </div>
        )
    }
}
