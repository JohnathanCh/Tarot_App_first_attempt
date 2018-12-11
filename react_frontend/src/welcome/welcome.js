import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../store/user/actions';

class Welcome extends Component{
    state = {
        loggedIn: false,
        user: {
            user_name: '',
            password: '',
            email: ''
        }
    }

    handleUsernameInput = (e) => {
        // console.log("username: " + e.target.value)
        this.setState({
            user: {
                user_name: e.target.value,
                password: this.state.user.password,
                email: this.state.user.email
            }
        })
    }

    handleEmailInput = (e) => {
        // console.log("Email: " + e.target.value)
        this.setState({
            user: {
                user_name: this.state.user.user_name,
                password: this.state.user.password,
                email: e.target.value
            }
        })
    }

    handlePasswordInput = (e) => {
        // console.log("Password: " + e.target.value)
        this.setState({
            user: {
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
                <h1>WELCOME</h1>
                <form onSubmit={this.handleSubmit}> 
                    <label>
                        Username:
                    </label>
                    <input type="text" name="user_name" placeholder="username" onChange={this.handleUsernameInput}/>

                    <label> 
                        Email: 
                    </label>
                    <input type="text" name="email" placeholder="email" onChange={this.handleEmailInput}/>
                    
                    <label>
                        Password:
                    </label>
                    <input type ="password" name="password" placeholder="password" onChange={this.handlePasswordInput}/>

                    <button type='submit' name="Submit"/>

                    <h2>
                        If you don't have an account yet... Then you can create one here
                    </h2>
                </form>
            </div>
    )}
}

const mapStateToProps = (state) => ({
    user: {...state.user}
})

const mapDispatchToProps = (dispatch) => ({
    handleCreateUser: user => {
        dispatch(createUser(user))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
