import React from 'react';
import Reading from './Reading'
import { NavLink } from "react-router-dom";

class ReadingSplash extends React.Component {

    render() {
        return (
            <div className="reading-splash">

                <div className="splash-header">
                    <h1>
                        <NavLink to="/readings/new" > Start a new reading </NavLink>
                    </h1>
                </div>


                {/* <img src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2017%2F08%2Ftarot-cards.jpg%3Fw%3D2000&w=1600&q=70" className="bg"/> */}

            </div>
        )
    }
}

export default ReadingSplash;