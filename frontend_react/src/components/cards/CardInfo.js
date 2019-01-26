import React from 'react';
import { connect } from 'react-redux';

import './cardStyles.css';
import { selectCardAction } from '../../store/allCards/actions';
import capitalize from '../../functions';
// import { Modal, Header, Button } from 'semantic-ui-react';

const CardInfo = (props) => {

    

    const handleClick = (e) => {
        props.selectCard(props.card)
            
    }

    return (
        <div className="ui card centered" id="my-card" onClick={handleClick} >
            <h1>{props.card.name}</h1>
            <h3>{capitalize(props.card.card_type)} Arcana</h3>                <p><strong>Meaning Upright:</strong> {props.card.meaning_up}</p>
            <p><strong>Meaning Reversed:</strong> {props.card.meaning_rev}</p>
            <p><strong>Description:</strong> {props.card.desc} </p>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    selectCard: (card) => { 
        // console.log(card);
        
        dispatch(selectCardAction(card))
    }
})

export default connect(null, mapDispatchToProps)(CardInfo);