import * as actions from './actions';

const initialState = {
    cardList: [],
    clickedCard: {}
}


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