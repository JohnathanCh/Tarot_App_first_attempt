import React from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../../store/allCards/actions';
// import { fetchCards } from './store/actions'
import cardListReducer from '../../store/allCards/reducer';
import Card from './Card'

//Maybe add some function to select a specific card
class CardList extends React.Component {

    // const allCards = cardList.map(card => {
    //     return <Card key={card.id} card={card} />
    // })
    componentDidMount = () => {
        this.props.fetchAllCards()
    }

   render() {
    console.log(this.props.cardList);
    const cardList = this.props.cardList
    
       return (
           <div>
               {cardList.map(card => <Card key={card.id} name={card.name}/> )}
           </div>
       )
   }
}

// const mapStateToProps = (state) => ({
//     cardList: state.cardList
// })

// const mapStateToProps = ({ cardList }) => ({ cardList })
const mapDispatchToProps = (dispatch) => ({
    fetchAllCards: () => {
        dispatch(fetchCards()) 
    }
})

const mapStateToProps = (state) => ({
    cardList: state.cards.cardList  
})
export default connect(mapStateToProps, mapDispatchToProps)(CardList);