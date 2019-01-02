import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../store/user/actions';
import { Button } from 'semantic-ui-react'

class Login extends Component{
    state = {
        loggedIn: false,
        userInfo: {
            password: '',
            email: ''
        }
    }

    handleEmailInput = (e) => {
        // console.log("Email: " + e.target.value)
        this.setState({
            userInfo: {
                password: this.state.userInfo.password,
                email: e.target.value
            }
        })
    }

    handlePasswordInput = (e) => {
        // console.log("Password: " + e.target.value)
        this.setState({
            userInfo: {
                password: e.target.value,
                email: this.state.userInfo.email
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log("state password: ", this.state.userInfo.password)

        this.props.handleGetUser(this.state.userInfo)

    }


    render() {
        return(
            <div>
                <h3>Login</h3>

                <form onSubmit={this.handleSubmit}> 
                    <label> 
                        Email: 
                    </label>
                    <input type="text" name="email" placeholder="email" onChange={this.handleEmailInput}/>
                    
                    <label>
                        Password:
                    </label>
                    <input type ="password" name="password" placeholder="password" onChange={this.handlePasswordInput}/>

                    <Button type='submit' name="Submit">Login</Button>
                </form>
            </div>
    )}
}
const mapStateToProps = (state) => ({
    userInfo: {
        password: state.user.userInfo.password,
        email: state.user.userInfo.email
    }
})

const mapDispatchToProps = (dispatch) => ({
    handleGetUser: user => {
        dispatch(getUser(user))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)