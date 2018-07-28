import React from 'react';
import Reading from './Reading'
import { NavLink } from "react-router-dom";

class ReadingSplash extends React.Component {

    render() {
        return (
            <div>
                <h1>Do You want a new reading or to see old readings</h1>

                <ul>
                    <li>
                        <NavLink to="/readings/new" > New Reading </NavLink>
                    </li>
                    <li>
                        <p>Link to Old Readings</p>
                    </li>
                </ul>

            </div>
        )
    }
}

export default ReadingSplash;