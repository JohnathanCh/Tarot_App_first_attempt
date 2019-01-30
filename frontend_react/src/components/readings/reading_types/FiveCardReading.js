import React from 'react';
import { connect } from 'react-redux';
import { createReading } from '../../../store/readings/actions';
import CardImage from '../../cards/CardImage'
import { Modal, Image } from 'semantic-ui-react'

class ThreeCardReading extends React.Component {
    state = {
        readingCards: ["empty"],
        clicked: false,
        open: false
    }

    show = dimmer => () => this.setState({ dimmer, ...this.state, open: true })
    close = () => { this.setState({ ...this.state, open: false})

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
        const cards = [...shuffledCards.slice(0,5)]
        
        this.setState({
            readingCards: cards,
            clicked: true 
        })
        
        this.props.startReading(cards, this.props.user)
    }

    handleClick = (e) => {
        // console.log(e.currentTarget);
        
    }
    

    render() {
        console.log(this.state.readingCards)
        
        return (
            <div className='five-card-reading'>
                <h1>Five Card Reading</h1>
               {this.state.clicked === true ? null : <div>
                    <button onClick={this.handleCardPull} className='pull-card-button'> 
                        <h2>Pull Cards</h2>
                    </button>
                </div>}

                <div >
                    <div className="inner-cards-five-card-reading" >
                    {this.state.clicked === true && this.state.readingCards.length !== 0 ?  
                    <div className='whole-five-card-reading'>

                        <div className='five-card-reading-water-fire'>
                            <div onClick={this.show('blurring')} className='five-card-reading-water' >
                                <CardImage key={this.state.readingCards[0].id} card={this.state.readingCards[0]}/>
                                <h2>Water/Unconsious/Moon</h2>
                            </div>
                            <div onClick={this.show('blurring')} className='five-card-reading-fire' >
                                <CardImage key={this.state.readingCards[1].id} card={this.state.readingCards[1]}/>
                                <h2>Fire/Conscious/Sun/Drive</h2>
                            </div>
                        </div>

                        <div className='five-card-reading-air'>
                            <div onClick={this.show('blurring')} className='five-card-reading-air' >
                                <CardImage key={this.state.readingCards[2].id} card={this.state.readingCards[2]}/>
                                <h2>Air/Mind</h2>
                            </div>
                        </div>

                        <div className='five-card-reading-earth-bottom'>
                            <div onClick={this.show('blurring')} className='five-card-reading-earth' >
                                <CardImage key={this.state.readingCards[3].id} card={this.state.readingCards[3]}/>
                                <h2>Earth/Manifestation</h2>
                            </div>
                            <div onClick={this.show('blurring')} className='five-card-reading-bottom' >
                                <CardImage key={this.state.readingCards[4].id} card={this.state.readingCards[4]}/>
                                <h2>Where this is heading</h2>
                            </div>

                        </div>
                    </div>  



                    : null}
                    </div>
                </div>
            </div>   
        )
    }
}

// this.state.readingCards.map((card, index) => 
{/* <div onClick={this.show('blurring')} className={`five-card-reading-card-number-${index + 1}`} >
    <CardImage key={card.id} card={card} />
</div> */}
// )

const mapStateToProps = (state) => {
    // console.log("MSTP state", state.user.user);
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