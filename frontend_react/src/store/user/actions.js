/*--------------- Action Types ---------------*/
export const CREATE_USER = "CREATE_USER"
export const LOGIN_USER = "LOGIN_USER"
export const LOGOUT_USER = "LOGOUT_USER"
export const GET_READINGS = "GET_READINGS"



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
    type: LOGOUT_USER,
    payload: {
        user: {},
        loggedIn: false
    }
})

export const userReadingsAction = (readings) => ({
    type: GET_READINGS,
    payload: {
        readings: readings
    }
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

        // https://three-seeds-tarot.herokuapp.com///
        // http://localhost:3000/
        fetch('http://localhost:3000/users', options)
        .then(resp => resp.json())
        .then(user => {dispatch(createUserAction(user)); localStorage.setItem('token', user.jwt)})
    }
}

// Should I use email here instead of ID?
export const getUser = (email, password) => {
    
    return function thunk(dispatch) {
        // console.log("inside getUser Thunk", email, password);
        
        let options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user_email: email,
                password: password
            })
        }

        // https://three-seeds-tarot.herokuapp.com///
        // http://localhost:3000/
        fetch(`http://localhost:3000/auth`, options)
        .then(resp => resp.json())
        .then(user => { dispatch(loginUserAction(user));
        ; localStorage.setItem('token', user.jwt) })
    }
}

export const getUserReadings = (id) => {
    return function thunk(dispatch) {


        // https://three-seeds-tarot.herokuapp.com///
        // http://localhost:3000/
        fetch(`http://localhost:3000/users/${id}`)
        .then(resp => resp.json())
        .then(userReadings => dispatch(userReadingsAction(userReadings)))
    }
}
