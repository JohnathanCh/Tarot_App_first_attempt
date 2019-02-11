/*--------------- Action Types ---------------*/
export const CREATE_READING = "CREATE_READING"
export const READING_CARDS = "READING_CARDS"
export const READING_CHOSEN = "READING_CHOSEN"


/*--------------- Action Creators---------------*/
export const createReadingAction = (reading) => {
    return({
        type: CREATE_READING,
        payload: reading 
    })
}

export const readingCardsAction = (cards) => {
    return({
        type: READING_CARDS,
        payload: cards
    })
}

export const readingChosen = (bool) => {
    return({
        type: READING_CHOSEN,
        payload: bool
    })
}


/*--------------- Thunk Creator ---------------*/


//I think I have to send a user as well to this.
export const createReading = (readingCards, user) => {
    return function thunk(dispatch) {
        
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
               user: {
                    ...user
                },
               readingCards: [
                    ...readingCards
               ]
            })
        }

        // https://three-seeds-tarot.herokuapp.com///
        fetch('http://localhost:3000/readings', options)
        .then(resp => resp.json())
        .then(reading => {console.log("This is a popsicle stick I'm useing to keep the castle standing")})
    }
}