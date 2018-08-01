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

export const loginUserAction= (email, name) => ({
    type: LOGIN_USER,
    payload: {
        user: {
            name: name,
            email: email
        },
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
export const getUser = (email, password) => {
    return function thunk(dispatch) {
        console.log("inside getUser Thunk", email, password);
        
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
        fetch(`http://localhost:3000/auth`, options)
        .then(resp => resp.json())
        .then(user => { dispatch(loginUserAction(user.email, user.name)), localStorage.setItem('token', user.jwt) })
    }
}
