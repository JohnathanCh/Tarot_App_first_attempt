import React from 'react';
import { NavLink, Route, Switch } from "react-router-dom";

import OneCardReading from "./reading_types/OneCardReading";
import ThreeCardReading from "./reading_types/ThreeCardReading";
import FiveCardReading from "./reading_types/FiveCardReading";

export default class NewReading extends React.Component {

    state ={
        readingChose: false
    }

    handleChoice = (e) => {
        console.log(e.currentTarget);
        console.log(this.state);
        
        this.setState({
            readingChose: true
        })
    }

    render() {
        console.log(this.state);
        
        return (
            <div className="new-reading-container">
                {this.state.readingChose === true ? null : <h1>Select a reading type</h1> }
                

                {this.state.readingChose === false ? 
                <div className="new-reading" >
                    <NavLink to="/readings/new/1-card" onClick={this.handleChoice} > One Card Reading </NavLink>
                    <br/>
                    <NavLink to="/readings/new/3-card" onClick={this.handleChoice} > Three Card Reading </NavLink>
                    <br/>
                    <NavLink to="/readings/new/5-card" onClick={this.handleChoice} > Five Card Reading </NavLink>
                    <br/>

                </div> : null }

                <Switch>
                    <Route path="/readings/new/1-card" component={ OneCardReading } />
                    <Route path="/readings/new/3-card" component={ ThreeCardReading } />
                    <Route path="/readings/new/5-card" component={ FiveCardReading } />
                </Switch>


            </div>
        )
    }
}