import * as actions from "./actions";

const initialState = {
    user: {
        id: 0,
        name: '',
        email: ''
    },
    loggedIn: false,
    readings: []

}


const createUserReducer = (state = initialState, action) => {
    // console.log(action);
    // debugger
    switch(action.type) {
        case actions.CREATE_USER:

            return {
                loggedIn: action.payload.loggedIn,
                user: {
                    id: action.payload.user.id,
                    name: action.payload.user.name,
                },
                readings: state.readings
            }

        case actions.LOGIN_USER:        

                return {
                    loggedIn: action.payload.loggedIn,
                    user: {
                        id: action.payload.user.id,
                        name: action.payload.user.username,
                    },
                    readings: state.readings
                }

        case actions.GET_READINGS:

            return {
                loggedIn: state.loggedIn,
                user: {
                    ...state.user
                },
                readings: action.payload.readings
            }
        


        case actions.LOGOUT_USER:
                
                return { ...initialState }
        default:
            return state
    }
}

export default createUserReducer;