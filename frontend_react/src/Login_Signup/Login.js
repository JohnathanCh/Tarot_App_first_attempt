import React from 'react';
import { connect } from 'react-redux'
import { getUser } from "../store/user/actions";

class Login extends React.Component {

    state = {
        loggedIn: false,
        user_email: '',
        password: ''
    }

    handleLogin = (e) => {
        e.preventDefault()
        console.log('Popopops', this.state.password);
        
        this.props.loginUser(this.state.user_email, this.state.password)
    }

    // handleLogout = () => {
    //     this.setState({
    //       auth: {
    //         currentUser: {}
    //       }
    //     })
    //     localStorage.clear()
    //   }

    // login = (e) => {
    //     e.preventDefault()

    //     const options = {
    //          method: 'POST',
    //          headers: {
    //              'Content-Type': 'application/json',
    //              'Accept': 'application/json'
    //          },
    //          body: JSON.stringify({
    //              user_email: this.state.user_email,
    //              password: this.state.password
    //          })
    //      }
    //      fetch('http://localhost:3000/auth', options)
    //      .then(resp => resp.json())
    //      .then(user => {console.log("Login", user);
    //      })
    //  }

     handleEmailInput = (e) => {
        this.setState({
            user_email: e.currentTarget.value
        })
        
     }

     handlePasswordInput = (e) => {
        this.setState({
            password: e.currentTarget.value
        })
        
     }

    render() {
        return (
            <div>
            <form onSubmit={this.handleLogin}>

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

const mapDispatchToProps = (dispatch) => ({
    loginUser: (email, password) => {
        dispatch(getUser(email, password))
    }
})

export default connect(null, mapDispatchToProps)(Login);