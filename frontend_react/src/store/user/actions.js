/*--------------- Action Types ---------------*/
export const CREATE_USER = "CREATE_USER"
export const LOGIN_USER = "LOGIN_USER"
export const LOGOUT_USER = "LOGOUT_USER"



/*--------------- Action Creators---------------*/
export const createUserAction= (user) => ({
    type: CREATE_USER,
    payload: {
        user: {...user},
        loggedIn: true
    }
})

export const loginUserAction= (user) => ({
    type: LOGIN_USER,
    payload: {
        user: {...user},
        loggedIn: true
    }
})

export const logoutUserAction = () => ({
    type: LOGOUT_USER
})



/*--------------- Thunk Creator ---------------*/

export const createUser = (user) => {
    return function thunk(dispatch) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user: {...user}
            })
        }

        fetch('http://localhost:3000/users', options)
        .then(resp => resp.json())
        .then(user => dispatch(createUserAction(user)))
    }
}

// Should I use email here instead of ID?
export const getUser = (id) => {
    return function thunk(dispatch) {
        fetch(`http://localhost:3000/users/${id}`)
        .then(resp => resp.json())
        .then(user => dispatch(loginUserAction(user)))
    }
}
