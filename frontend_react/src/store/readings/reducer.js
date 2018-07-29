import * as actions from './actions'
import { CARD_LIST } from '../allCards/actions'
import { CREATE_USER } from '../user/actions'

const initialState = {
    cardList: [],
    user: {},
    readingCards: []
}


 const readingReducer = (state = initialState, action) => {
     console.log("In the Reading Reducer", state);
     
    switch (action.type) {
        // case CARD_LIST:
        //     return {
        //         cardList: action.payload,
        //         ...state
        // }

        // case CREATE_USER:
        // return {
        //     ...state,
        //     user: {
        //         id: action.payload.user.id,
        //         name: action.payload.user.name,
        //         email: action.payload.user.email
        //     }
            
        // }

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
