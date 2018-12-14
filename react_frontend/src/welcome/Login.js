import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../store/user/actions';
import { Link } from 'react-router-dom';
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
                user_name: this.state.user.user_name,
                password: this.state.user.password,
                email: e.target.value
            }
        })
    }

    handlePasswordInput = (e) => {
        // console.log("Password: " + e.target.value)
        this.setState({
            userInfo: {
                user_name: this.state.user.user_name,
                password: e.target.value,
                email: this.state.user.email
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)

        this.props.handleCreateUser({...this.state.user})

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

                    <Button type='submit' name="Submit"/>
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