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
        userInfo: {...user},
        loggedIn: true
    }
})

export const logoutUserAction = () => ({
    type: LOGOUT_USER,
    payload: {
        userInfo: {},
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
                userInfo: {...user}
            })
        }

        // debugger

        fetch('http://localhost:3000/users', options)
        .then(resp => resp.json())
        .then(user => {dispatch(createUserAction(user)); localStorage.setItem('token', user.jwt)})
    }
}

export const getUser = (userInfo) => {
    
    return function thunk(dispatch) {
        // console.log("inside getUser Thunk", userInfo);
        
        let options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: userInfo.email,
                password: userInfo.password
            })
        }
        fetch(`http://localhost:3000/auth`, options)
        .then(resp => resp.json())
        .then(user => { dispatch(loginUserAction(user)); console.log(user); console.log("^^USER^^"); localStorage.setItem('token', user.jwt) })
    }
}

export const getUserReadings = (id) => {
    return function thunk(dispatch) {

        fetch(`http://localhost:3000/users/${id}`)
        .then(resp => resp.json())
        .then(userReadings => dispatch(userReadingsAction(userReadings)))
    }
}