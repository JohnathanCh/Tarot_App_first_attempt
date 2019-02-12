import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { Modal, Header, Image, Button } from 'semantic-ui-react';

import { selectCardAction } from '../../store/allCards/actions';
import inlineStyle from '../../modalStyle';
import capitalize from '../../functions';

class CardImage extends React.Component {

    state = {
        showInfo: false
    }

    getImage = cardName => {
        let formattedName = cardName.split(" ").join("_")

        let image = require(`../../Rider-Waite/${formattedName}.png`) 

        return image
    }

    handleClick = (e) => {
        // console.log(this.state);
        this.props.selectCard(this.props.card)

        this.setState({
            showInfo: true
        })

        if (this.props.match.path.startsWith('/cards')) {
            this.props.history.push(`/cards/${this.props.card.id}`)
        }
        
    }

    modalClose = () => {
        this.setState({
            showInfo: false
        })
    }

    render() {
        
        return (
            <div className='card-image'>
               
               <Modal 
               size='large'
               trigger={
                    <div className="ui medium images" > 
                        <img className="single-card" src={this.getImage(this.props.card.name)} alt="No Image Found" onClick={this.handleClick} />
                    </div>}
                style={inlineStyle.modal}
                >

                    <Modal.Header style={{"font-family": "'Cinzel', serif", "font-weight": "900"}}>{this.props.card.name}</Modal.Header>

                    <Modal.Content >
                        <Image wrapped size='medium' src={this.getImage(this.props.card.name)} floated='left' />
                        <Modal.Description >
                            <h1 style={{"font-family": "'Cinzel', serif"}}>{capitalize(this.props.card.card_type)} Arcana</h1>
                            <p>Meaning Upright: {this.props.card.meaning_up} </p>
                            <p>Meaning Reversed: {this.props.card.meaning_rev} </p>
                            <p>Description: {this.props.card.desc} </p>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        {/* <Button primary onClick={this.modalClose}>Close</Button> */}
                    </Modal.Actions>
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