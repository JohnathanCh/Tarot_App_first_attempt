import React from 'react';
import { connect } from 'react-redux';
import Card from "../../cards/Card";
import { createReading } from '../../../store/readings/actions';

class OneCardReading extends React.Component {

    state = {
        readingCards: []
    }
    

    handleCardPull = (e) => {
        // Choose random card from Deck
        // Change state
        // Trigger render of Card element below

        // [Math.floor(Math.random()*cardList.length)]

        const shuffledCards = this.props.cardList.sort(function() {return 0.5 - Math.random()})
        console.log("card", shuffledCards)

        this.setState({
            readingCards: shuffledCards[0]
        })
        
        this.props.startReading(this.state.readingCards)
    }

    render() {
        console.log("propssss", this.props.cardList);
        
        return (
            <div>
                <h1>One Card Reading</h1>



                <div>
                    <button onClick={this.handleCardPull} >Reading </button>
                    {/* Render some sort of Tarot deck here */}
                </div>
            </div>   
        )
    }
}

const mapStateToProps = (state) => {
    console.log("MSTP state", state);
    return ({
        cardList: [...state.cards.cardList]
    })
}

const mapDispatchToProps = (dispatch) => ({
    startReading: (readingCards) => {
        dispatch(createReading(readingCards))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(OneCardReading);