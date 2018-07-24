import { createStore, combineReducers, applyMiddleware } from 'redux';
import cardListReducer from './allCards/reducer';
import createUserReducer from './user/reducer';
import thunk from 'redux-thunk';



const middleWare = applyMiddleware(thunk)
const reducers = combineReducers({
    cards: cardListReducer,
    user: createUserReducer
})
const store = createStore(reducers, middleWare)


window.store = store
window.cardListReducer = cardListReducer

export default store

