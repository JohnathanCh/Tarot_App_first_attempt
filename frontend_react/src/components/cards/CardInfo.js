import React from 'react';
import { connect } from 'react-redux';
// import { selectCard } from '../../'
import './cardStyles.css';
import { selectCardAction } from '../../store/allCards/actions';

const CardInfo = (props) => {    
    
        console.log("Card Component", props.selectCard);

        // props.selectCard(props.card)
        const handleClick = (e) => {
            console.log(props.card);
            props.selectCard(props.card)
            
        }
        return (
            <div class="ui card centered" id="my-card" onClick={handleClick} >
                <h1>{props.card.name}</h1>
                <h3>{props.card.type} Arcana</h3>
                <p>Meaning Upright: {props.card.meaning_up}</p>
                <p>Meaning Reversed: {props.card.meaning_rev}</p>
            </div>
        )
    
    

}

// console.log("Card Component", this.props);

// const mapStateToProps = (state) => ({
//     cards: state.cards
    
// })

const mapDispatchToProps = (dispatch, card) => ({
    selectCard: (card) => { 
        console.log(card);
        
        dispatch(selectCardAction(card))
    }
})

export default connect(null, mapDispatchToProps)(CardInfo);