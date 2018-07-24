import { createStore, combineReducers, applyMiddleware } from 'redux';
import cardListReducer from './reducer';
import thunk from 'redux-thunk';

// import * from './actions';
const middleWare = applyMiddleware(thunk)
const store = createStore(cardListReducer, middleWare)

window.store = store
window.cardListReducer = cardListReducer

export default store
// export { cardListAction } from './actions'
// in a different file => import { cardListAction } from './store'



 /* This takes in dispatch when we use it with connect and we can then use this as the second argument to  */

// const mapDispatch = (dipatch) => {
//     selectACard = (card) => {
//         dispatch({type: SELECT_CARD, payload: card})
//     }
// }

// combineReducers = () => ({
//     cardList: cardListReducer,
// })

