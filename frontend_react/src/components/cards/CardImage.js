import React from 'react';
import CardInfo from "./CardInfo";
import { connect } from "react-redux";
import { selectCardAction } from '../../store/allCards/actions';
import { withRouter } from 'react-router-dom';


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
            <div>

                <div className="ui medium images" > 
                    <img className="card-image" src={this.getImage(this.props.card.name)} alt="No Image Found" onClick={this.handleClick} />
                </div>

               {this.state.showInfo === true ? <CardInfo card={this.props.card} /> : null }

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