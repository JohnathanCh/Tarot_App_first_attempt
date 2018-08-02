import * as actions from './actions'

const initialState = {
    cardList: [],
    user: {},
    readingCards: []
}


 const readingReducer = (state = initialState, action) => {
     console.log("In the Reading Reducer", state);
     
    switch (action.type) {
        case actions.CREATE_READING:
        return {
            ...state,
            readingCards: [...action.payload]
        }
            
        default:
            return state
    }
}

export default readingReducer;
