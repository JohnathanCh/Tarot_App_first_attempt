import { createStore } from 'redux'

const initialState = {
    stuff: true
}

const reducer = (state = initialState, action) {
    console.log("Reducer Running", action)
    return state
}

const store = createStore(reducer)