import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";

import OneCardReading from './reading_types/OneCardReading';
import ThreeCardReading from './reading_types/ThreeCardReading';
import FiveCardReading from './reading_types/FiveCardReading';
import './readingStyles.css'

class NewReading extends React.Component {

    state ={
        readingChose: false
    }

    handleChoice = (e) => {
        
        this.setState({
            readingChose: true
        })
    }

    render() {
        console.log("new reading props", this.props)
        
        return (
            <div className='new-reading-page'>

                <div className='reading-elements'>
                    <div className='reading-grey-box' >
                        {this.state.readingChose === true ? null : <h1>What sort of reading would you like?</h1> }
                        

                        {this.state.readingChose === false ? 

                        <div className='new-reading' >
                            <div className='link-to-one-card-reading'>
                                <NavLink to='/readings/new/1-card' onClick={this.handleChoice} >
                                    <button className='link-button'>
                                        <p className='button-text' style={{"font-family": "'Cinzel', serif"}}>One Card reading</p> 
                                    </button>
                                </NavLink>
                            </div>
                            
                            <div className='link-to-three-card-reading'>
                                <NavLink to='/readings/new/3-card' onClick={this.handleChoice} > 
                                    <button className='link-button'>
                                        <p className='button-text' style={{"font-family": "'Cinzel', serif"}}>Three Card Reading</p> 
                                    </button>  
                                </NavLink>
                            </div>
                            
                            <div className='link-to-five-card-reading'>
                                <NavLink to='/readings/new/5-card' onClick={this.handleChoice} >
                                    <button className='link-button'> 
                                        <p className='button-text' style={{"font-family": "'Cinzel', serif"}}>Five Card Reading</p>
                                    </button>
                                </NavLink>
                            </div>
                            
                        </div> 
                        : null }

                        <Switch>
                            <Route path='/readings/new/1-card' component={ OneCardReading } />
                            <Route path='/readings/new/3-card' component={ ThreeCardReading } />
                            <Route path='/readings/new/5-card' component={ FiveCardReading } />
                        </Switch>

                    </div>
                </div>
            </div>
        )
    }
}

const MSTP = (state) => ({
    chosenReading: state.readingChosen
})

export default connect(MSTP)(NewReading)