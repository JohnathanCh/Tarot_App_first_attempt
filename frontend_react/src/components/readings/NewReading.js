import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import OneCardReading from './reading_types/OneCardReading';
import ThreeCardReading from './reading_types/ThreeCardReading';
import FiveCardReading from './reading_types/FiveCardReading';
import './readingStyles.css'

export default class NewReading extends React.Component {

    state ={
        readingChose: false
    }

    handleChoice = (e) => {
        
        this.setState({
            readingChose: true
        })
    }

    render() {
        
        return (
            <div className='new-reading-page'>

                <div className='reading-elements'>
                    <div className='reading-grey-box' >
                        {this.state.readingChose === true ? null : <h1>What sort of reading would you like?</h1> }
                        

                        {this.state.readingChose === false ? 

                        <div className='new-reading' >

                            <div className='link-to-one-card-reading'>
                                <Button>
                                    <NavLink to='/readings/new/1-card' onClick={this.handleChoice} > One Card Reading </NavLink>
                                </Button>
                            </div>
                            
                            <div className='link-to-three-card-reading'>
                                <Button>
                                    <NavLink to='/readings/new/3-card' onClick={this.handleChoice} > Three Card Reading </NavLink>
                                </Button>
                            </div>
                            
                            <div className='link-to-five-card-reading'>
                                <Button>
                                    <NavLink to='/readings/new/5-card' onClick={this.handleChoice} > Five Card Reading </NavLink>
                                </Button>
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