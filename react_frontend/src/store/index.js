import { createStore } from 'redux'

const initialState = {
    stuff: true
}

const reducer = (state = initialState, action) {
    console.log("Reducer Running", action)

    switch (action.type) {
        case 'CHANGESTUFF':
            return Object.assign({}, state, { stuff: !state.stuff })
    }
    return state
}

const store = createStore(reducer)