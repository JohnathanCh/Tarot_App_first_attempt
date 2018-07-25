import React from 'react';
import { connect } from 'react-redux';
// import { selectCard } from '../../'

const Card = (props) => {    
    
        console.log("Card Component", props);

        return (
            <div class="ui card centered">
                <h1>{props.name}</h1>
                <h3>{props.type} Arcana</h3>
                <p>Meaning Upright: {props.meaning_up}</p>
                <p>Meaning Reversed: {props.meaning_rev}</p>
            </div>
        )
    
    

}

// console.log("Card Component", this.props);

// const mapStateToProps = (state) => ({
//     cards: state.cards
    
// })

export default Card;