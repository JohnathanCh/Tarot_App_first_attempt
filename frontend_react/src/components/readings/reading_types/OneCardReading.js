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
        const card = [shuffledCards[0]]
        console.log("card", card)

        this.setState({
            readingCards: shuffledCards[0]
        })
        
        this.props.startReading(card, this.props.user)
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
    // console.log("MSTP state", state.user.user);
    return ({
        cardList: [...state.cards.cardList],
        user: {...state.user.user}
    })
}

const mapDispatchToProps = (dispatch) => ({
    startReading: (readingCards, user) => {
        dispatch(createReading(readingCards, user))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(OneCardReading);