import * as actions from './actions';

const initialState = {
    cardList: ["empty"],
    readingCards: ["empty"],
    singleCard: {}
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
            return {...state, cardList: action.payload}
        default:
            return state
    }
}

export default cardListReducer;