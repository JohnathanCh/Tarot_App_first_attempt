import * as actions from './actions'

const initialState = {
    cardList: [],
    user: {},
    readingCards: [],
    readingChosen: false
}


 const readingReducer = (state = initialState, action) => {
     
    switch (action.type) {
        case actions.CREATE_READING:
        return {
            ...state,
            readingCards: [...action.payload]
        }
        case actions.READING_CHOSEN:
        return {
            ...state,
            readingChosen: action.payload
        }
            
        default:
            return state
    }
}

export default readingReducer;
