/*--------------- Action Types ---------------*/
export const CARD_LIST = 'CARD_LIST'
export const SELECTED_CARD = 'SELECTED_CARD'


/*--------------- Action Creators---------------*/
// returns an object/action
export const cardListAction = (cardList) => {
    return({
        type: CARD_LIST,
        payload: cardList
    })
}

export const selectCardAction = (card) => {
    return ({
        type: SELECTED_CARD,
        payload: card
    })
}


/*--------------- Thunk Creator ---------------*/
//returns a thunk(the function you return that will be called with dispatch)

// Fetches all cards
// If making a post request or searching ro a specific card, I may need to input an arguement.
export const fetchCards = () => {
    //doesnt need to be called thunk, and will be called with dispatch
    return function thunk(dispatch) {
        fetch('http://localhost:3000/cards')
        .then(resp => resp.json())
        .then(cards => dispatch(cardListAction(cards))
        )}
}

