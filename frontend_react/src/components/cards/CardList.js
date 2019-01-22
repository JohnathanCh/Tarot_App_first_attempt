import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { fetchCards } from '../../store/allCards/actions';
import CardInfo from './CardInfo';
import CardImage from './CardImage';
import './cardStyles.css';

class CardList extends React.Component {

    componentDidMount = () => {
        this.props.fetchAllCards()
    }

   render() {
    const cardList = this.props.cardList
    
       return (
        <div className="card-list">
            <div className="horizontal-scroll-wrapper" >
                {cardList.map(card => 
                    <CardImage key={card.id} card={card} />
                )}
            </div>

           {this.props.selectedCard ? <Route path="/cards/:id" render={() => <CardInfo card={this.props.selectedCard} /> } /> : null}


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