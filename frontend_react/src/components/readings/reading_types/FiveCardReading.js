import React from 'react';
import { connect } from 'react-redux';
import { createReading } from '../../../store/readings/actions';
import CardImage from '../../cards/CardImage'

class ThreeCardReading extends React.Component {

    state = {
        readingCards: ["empty"],
        clicked: false
    }
    

    handleCardPull = (e) => {

        const shuffledCards = this.props.cardList.sort(function() {return 0.5 - Math.random()})
        const cards = [...shuffledCards.slice(0,5)]
        
        this.setState({
            readingCards: cards,
            clicked: true 
        })
        
        this.props.startReading(cards, this.props.user)
    }

    handleClick = (e) => {
        console.log(e.currentTarget);
        
    }
    

    render() {
        // console.log("propssss", this.state);
        
        return (
            <div>
                <h1>Five Card Reading</h1>
               {this.state.clicked === true ? null : <div>
                    <button onClick={this.handleCardPull} >Reading </button>
                </div>}

                <div >
                    {(this.state.clicked === true && this.state.readingCards.length != 0) ?
                    this.state.readingCards.map(card => <CardImage key={card.id} card={card} />) : null }
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

export default connect(mapStateToProps, mapDispatchToProps)(ThreeCardReading);