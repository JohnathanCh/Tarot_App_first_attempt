/*--------------- Action Types ---------------*/
export const CREATE_READING = "CREATE_READING"
export const 
export const READING_CARDS = "READING_CARDS"


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


/*--------------- Thunk Creator ---------------*/

export const createReading = (reading) => {
    return function thunk(dispatch) {
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
               user: {
                    ...this.state.currentUser
                },
               reading: {
                    ...reading
               }
            })
        }

        fetch('http://localhost:3000/readings', options)
        .then(resp => resp.json())
        .then(reading => dispatch(createReadingAction(reading)))
    }
}