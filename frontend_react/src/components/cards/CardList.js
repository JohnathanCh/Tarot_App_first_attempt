import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCards } from '../../store/allCards/actions';
import Card from './Card';
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
                {cardList.map(card => <Link to={`/Cards/${card.id}`} > <Card key={card.id} card={card}  /> </Link>)}
            </div>

            {this.props.selectedCard === 'undefined' ? null : <Card key={this.props.selectedCard.id} card={this.props.selectedCard} /> }

        </div>

       )
   }
}

// {cardList.map(card => <Link to="/Cards/:id"> <Card key={card.id} name={card.name} description={card.desc} meaning_rev={card.meaning_rev} meaning_up={card.meaning_up} value={card.value_int} type={card.card_type} /> </Link>)}

const mapDispatchToProps = (dispatch) => ({
    fetchAllCards: () => {
        dispatch(fetchCards()) 
    }
})

const mapStateToProps = (state) => ({
    cardList: state.cards.cardList,
    selectedCard: state.cards.clickedCard
})
export default connect(mapStateToProps, mapDispatchToProps)(CardList);