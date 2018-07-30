import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { fetchCards } from '../../store/allCards/actions';
import CardInfo from './CardInfo';
import './cardStyles.css';

class CardList extends React.Component {

    componentDidMount = () => {
        this.props.fetchAllCards()
    }

   render() {
    console.log("CardList Component", this.props);
    const cardList = this.props.cardList
    
       return (
        <div>
            <div className="horizontal-scroll-wrapper" >
                {cardList.map(card => <Link to={`/cards/${card.id}`} > <CardInfo key={card.id} card={card}  /> </Link>)}
            </div>

           {this.props.selectedCard ? <Route path="/cards/:id" render={() => <CardInfo card={this.props.selectedCard} /> } /> : null}

        </div>

       )
   }
}

 {/* <Card key={this.props.selectedCard.id} card={this.props.selectedCard} /> */}

const mapDispatchToProps = (dispatch) => ({
    fetchAllCards: () => {
        dispatch(fetchCards()) 
    }
})

const mapStateToProps = (state, ownprops) => {
    
    const selected = state.cards.clickedCard.id ? state.cards.clickedCard : state.cards.cardList.find(card => card.id === ownprops.match.params.id)
   return {cardList: state.cards.cardList,
    selectedCard: selected || null
   }
}

// selectedCard: state.cards.clickedCard
export default connect(mapStateToProps, mapDispatchToProps)(CardList);