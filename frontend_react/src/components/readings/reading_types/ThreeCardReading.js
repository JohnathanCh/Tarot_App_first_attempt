import React from 'react';
import { connect } from 'react-redux';
// import CardInfo from "../../cards/CardInfo";
import { createReading } from '../../../store/readings/actions';
import CardImage from '../../cards/CardImage'
import '../readingStyles.css';

class ThreeCardReading extends React.Component {

    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    state = {
        readingCards: ["empty"],
        clicked: false,
        open: false
    }

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
        const cards = [...shuffledCards.slice(0,3)]
        
        this.setState({
            readingCards: cards,
            clicked: true 
        })
        
        this.props.startReading(cards, this.props.user)
    }

    render() {
        // console.log("propssss", this.props);

        // const { open, dimmer } = this.state
        
        return (
            <div className="three-card-reading">
                <h1>Three Card Reading</h1>
                <h4>Click the cards to get a description of what they mean</h4>
               {this.state.clicked === true ? null : <div>
                    <button onClick={this.handleCardPull} className='link-button'> Pull Cards </button>
                </div>}
                
                <div className="cards">
                    <div className="ui medium images" >
                        {this.state.clicked === true && this.state.readingCards.length !== 0 ? 
                        this.state.readingCards.map(card => 
                            <div onClick={this.show('blurring')} className="image-card" >
                                <CardImage key={card.id} card={card} />
                            </div>)
                        : null}
                    </div>
                </div>
            </div>   
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        cardList: [...state.cards.cardList],
        clickedCard: {...state.cards.clickedCard},
        user: {...state.user.user}
    })
}

const mapDispatchToProps = (dispatch) => ({
    startReading: (readingCards, user) => {
        dispatch(createReading(readingCards, user))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ThreeCardReading);