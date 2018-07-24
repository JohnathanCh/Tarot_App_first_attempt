import React from 'react';
import { connect } from 'react-redux';
// import { selectCard } from '../../'

const Card = ({ card }) => {
    return (
        <div>
            <h1>{card.name}</h1>
        </div>
    )
}

export default Card;