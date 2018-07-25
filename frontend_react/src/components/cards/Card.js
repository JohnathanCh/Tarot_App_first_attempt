import React from 'react';
import { connect } from 'react-redux';
// import { selectCard } from '../../'

class Card extends React.Component{

        state = {
            showDesc: false,
        }
    
    
    render() {
        console.log("Card Component", props);

        return (
            <div class="single-card">
                <h1>{props.name}</h1>
                <h3>{props.type} Arcana</h3>
                <p>{props.meaning_up}</p>
                <p>{props.meaning_rev}</p>
            </div>
        )
    }
    

}

// console.log("Card Component", this.props);

// const mapStateToProps = (state) => ({
//     cards: state.cards
    
// })

export default Card;