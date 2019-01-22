import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { Modal, Header, Image } from 'semantic-ui-react';

import { selectCardAction } from '../../store/allCards/actions';
import inlineStyle from '../../modalStyle';
import capitalize from '../../functions';

class CardImage extends React.Component {

    state = {
        showInfo: false
    }

    getImage = cardName => {
        let formattedName = cardName
        .split(" ")
        .join("_")

        let image = require(`../../Rider-Waite/${formattedName}.png`) 

        return image
    }

    handleClick = (e) => {
        // console.log(this.state);
        this.props.selectCard(this.props.card)

        if (this.props.match.path.startsWith('/cards')) {
            this.props.history.push(`/cards/${this.props.card.id}`)
        }
        
    }

    render() {
        
        return (
            <div className='card-modal'>
               
               <Modal 
               size='large'
               trigger={
                    <div className="ui medium images" > 
                        <img className="card-image" src={this.getImage(this.props.card.name)} alt="No Image Found" onClick={this.handleClick} />
                    </div>}
                style={inlineStyle.modal}>

                    <Modal.Header>{this.props.card.name}</Modal.Header>

                    <Modal.Content >
                        <Image wrapped size='medium' src={this.getImage(this.props.card.name)} floated='left' />
                        <Modal.Description>
                            <Header>{capitalize(this.props.card.card_type)} Arcana CARD IMAGE</Header>
                            <p>Meaning Upright: {this.props.card.meaning_up} </p>
                            <p>Meaning Reversed: {this.props.card.meaning_rev} </p>
                            <p>Description: {this.props.card.desc} </p>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    selectCard: (card) => {         
        dispatch(selectCardAction(card))
    }
})

export default withRouter(connect(null, mapDispatchToProps)(CardImage));