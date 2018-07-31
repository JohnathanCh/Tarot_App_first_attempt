import * as actions from './actions';

const initialState = {
    cardList: [],
    clickedCard: {}
}

// fetch('http://localhost:3000/cards')
// .then(resp => resp.json())
// .then(cards => {this.setState({
//   cardList: [...cards.sort((a, b) => {
//     return (a.id - b.id)
//   })]
// })
// })


const cardListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.CARD_LIST:
            return {
                cardList: action.payload,
                clickedCard: state.clickedCard
        }

        case actions.SELECTED_CARD:
        return {
            ...state, 
            clickedCard: action.payload
        }
        default:
            return state
    }
}

export default cardListReducer;