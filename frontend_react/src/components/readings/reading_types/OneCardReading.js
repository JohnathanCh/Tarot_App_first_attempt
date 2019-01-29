import React from 'react';
import { connect } from 'react-redux';
// import CardInfo from "../../cards/CardInfo";
import { Button } from 'semantic-ui-react'

import { createReading } from '../../../store/readings/actions';
import CardImage from '../../cards/CardImage'
import capitalize from '../../../functions';
import inlineStyle from '../../../modalStyle';

class OneCardReading extends React.Component {

    state = {
        readingCards: ["empty"],
        clicked: false,
        open: false
    }

    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    getImage = cardName => {
        if (cardName !== undefined) {
        let formattedName = cardName
        .split(" ")
        .join("_")

            // Put relative path in here
        let image = require(`../../../Rider-Waite/${formattedName}.png`) 

        return image
        }
    }
    

    handleCardPull = (e) => {

        const shuffledCards = this.props.cardList.sort(function() {return 0.5 - Math.random()})
        const card = [shuffledCards[0]]

        this.setState({
            readingCards: [shuffledCards[0]],
            clicked: true 
        })
        
        this.props.startReading(card, this.props.user)
    }

    render() {
        
        return (
            <div className='one-card-reading'>

                <div>
                    <h1>One Card Reading</h1>
                </div>

                <div className='one-card-reading-button'>
                    {this.state.clicked === true ? null : 
                        <div>
                            <Button onClick={this.handleCardPull}>Pull Cards</Button>
                        </div>
                    }
                </div>
                
                <div className="ui large images" >
                {this.state.clicked === true && this.state.readingCards.length !== 0 ? 
                        this.state.readingCards.map(card => 
                            <div onClick={this.show('blurring')} className="image-card" >
                                <CardImage key={card.id} card={card} />
                            </div>
                        )
                        : null}
                </div>
            </div>   
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        cardList: [...state.cards.cardList],
        clickedCard: state.cards.clickedCard,
        user: {...state.user.user}
    })
}

const mapDispatchToProps = (dispatch) => ({
    startReading: (readingCards, user) => {
        dispatch(createReading(readingCards, user))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(OneCardReading);