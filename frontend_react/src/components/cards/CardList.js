import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCards } from '../../store/allCards/actions';
import CardImage from './CardImage';
import './cardStyles.css';

class CardList extends React.Component {

    componentDidMount = () => {
        this.props.fetchAllCards()
    }

   render() {
    const cardList = this.props.cardList
    
       return (
        <div className="card-list-page">

            <div className="card-list" >
                {cardList.map(card => 
                    <div className="ui card centered">
                        <CardImage key={card.id} card={card} />
                    </div>
                )}
            </div>
            
        </div>

       )
   }
}

const mapDispatchToProps = (dispatch) => ({
    fetchAllCards: () => {
        dispatch(fetchCards()) 
    }
})

const mapStateToProps = (state, ownprops) => {
    
    const selected = state.cards.clickedCard.id ? state.cards.clickedCard : state.cards.cardList.find(card => card.id === ownprops.match.params.id)
    
   return {
    cardList: state.cards.cardList,
    selectedCard: selected || null
   }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardList));