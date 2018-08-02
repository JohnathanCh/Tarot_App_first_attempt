import React from 'react';
import { connect } from 'react-redux';
import CardInfo from "../../cards/CardInfo";
import { createReading } from '../../../store/readings/actions';
import CardImage from '../../cards/CardImage'
import { Modal, Image, Button } from 'semantic-ui-react'

class OneCardReading extends React.Component {

    state = {
        readingCards: ["empty"],
        clicked: false,
        open: false
    }

    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })


    getImage = cardName => {
        if (cardName != undefined) {
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
        // console.log("propssss", this.state);
        const { open, dimmer } = this.state
        
        return (
            <div>
                <h1>One Card Reading</h1>
               {this.state.clicked === true ? null : <div>
                    <button onClick={this.handleCardPull} >Reading </button>
                </div>}
                
                <div className="ui large images" >
                {this.state.clicked === true && this.state.readingCards.length != 0 ? 
                        this.state.readingCards.map(card => 

                        
                            <Modal trigger={ 
                                <div onClick={this.show('blurring')} className="image-card" >
                                 <CardImage key={card.id} card={card} />
                                 </div>
                                 }>
                                 
                            <div className="my-modal">
                            <Modal.Header> <h1 >{this.props.clickedCard.name}</h1> </Modal.Header>
                            <Modal.Content >
                                <Image size="medium" src={this.getImage(this.props.clickedCard.name)}/>
                            <Modal.Description>
                                <p>Meaning Upright: {this.props.clickedCard.meaning_up}</p>
                                <p>Meaning Reversed: {this.props.clickedCard.meaning_rev}</p>
                                <p>Description: {this.props.clickedCard.desc}</p>

                            </Modal.Description>
                            </Modal.Content>

                            </div>
                            </Modal>
                            
                        ) 
                        
                        : null }
                </div>

                <h4>Take your time to look at the card and see what catches your eye and mind, before reading the description</h4>

            </div>   
        )
    }
}

const mapStateToProps = (state) => {
    // console.log("MSTP state", state.user.user);
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