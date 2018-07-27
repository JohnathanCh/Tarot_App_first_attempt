import * as actions from "./actions";

const initialState = {
    user: {
        id: 0,
        name: '',
        email: ''
    },
    loggedIn: false

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
                    email: action.payload.user.email
                }
                }

        case actions.LOGIN_USER:

                return {
                    loggedIn: action.payload.loggedIn,
                    user: {
                        id: action.payload.user.id,
                        name: action.payload.user.name,
                        email: action.payload.user.email
                    }
                    }

        case actions.LOGOUT_USER:
                
                return { ...initialState }
        default:
            return state
    }
}

export default createUserReducer;

// user: {
    // id: action.payload.user.id,
    // name: action.payload.user.name,
    // email: action.payload.user.email
//     },
// loggedIn: action.payload.loggedIn 
// }