import React from 'react';
import { connect } from 'react-redux'

class Login extends React.Component {

    state = {
        loggedIn: false,
        user_email: '',
        password: ''
    }

    // handleLogin = (user) => {
    //     this.setState({
    //         auth: {
    //           currentUser: user
    //         }
    //       })
    //     localStorage.setItem('token', user.jwt)
    // }

    // handleLogout = () => {
    //     this.setState({
    //       auth: {
    //         currentUser: {}
    //       }
    //     })
    //     localStorage.clear()
    //   }

    login = (e) => {
        e.preventDefault()

        const options = {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
             },
             body: JSON.stringify({
                 user_email: this.state.user_email,
                 password: this.state.password
             })
         }
         fetch('http://localhost:3000/auth', options)
         .then(resp => resp.json())
         .then(info => {console.log("Login", info.jwt);
         })
     }

     handleEmailInput = (e) => {
        console.log("Mail", e.currentTarget.value);
        this.setState({
            user_email: e.currentTarget.value
        })
        
     }

     handlePasswordInput = (e) => {
        console.log("pass", e.currentTarget.value);
        this.setState({
            password: e.currentTarget.value
        })
        
     }

    render() {
        return (
            <div>
            <form onSubmit={this.login}>

                    <label htmlFor="user_email">Email</label>
                    <input type="text" name="user_email" placeholder="Enter your Email" onChange={this.handleEmailInput}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="*****" onChange={this.handlePasswordInput}/>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, null)(Login);