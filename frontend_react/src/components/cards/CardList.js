import React from 'react';
import { connect } from 'react-redux';
import { fetchCards } from './store/actions'
import cardListReducer from '../../store/reducer';

//Maybe add some function to select a specific card
const CardList = ({ cardList }) => {

    const allCards = cardList.map(card => {
        return <Card key={card.id} card={card} />
    })
}

// const mapStateToProps = (state) => ({
//     cardList: state.cardList
// })

// const mapStateToProps = ({ cardList }) => ({ cardList })
const mapDispatchToProps = (dispatch) => (
    fetchAllCards() {
        dispatch(fetchCards()) {

        }

    }
)
// export default connect(mapStateToProps, mapDispatchToProps)(CardList);