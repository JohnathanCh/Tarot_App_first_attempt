import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCards } from '../../store/allCards/actions';
// import { fetchCards } from './store/actions'
import cardListReducer from '../../store/allCards/reducer';
import Card from './Card'

class CardList extends React.Component {

    componentDidMount = () => {
        this.props.fetchAllCards()
    }

   render() {
    // console.log("CardList Component", this.props.cardList);
    const cardList = this.props.cardList
    
       return (
           <div id="cardList">
               {cardList.map(card => <Link to="/Cards/:id"> <Card key={card.id} name={card.name} description={card.desc} meaning_rev={card.meaning_rev} meaning_up={card.meaning_up} value={card.value_int} type={card.card_type} /> </Link>)}
           </div>
       )
   }
}

const mapDispatchToProps = (dispatch) => ({
    fetchAllCards: () => {
        dispatch(fetchCards()) 
    }
})

const mapStateToProps = (state) => ({
    cardList: state.cards.cardList  
})
export default connect(mapStateToProps, mapDispatchToProps)(CardList);