import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../store/user/actions';
import { Link } from 'react-router-dom';

class Login extends Component{
    state = {
        loggedIn: false,
        userInfo: {
            password: '',
            email: ''
        }
    }

    // handleUsernameInput = (e) => {
    //     // console.log("username: " + e.target.value)
    //     this.setState({
    //         userInfo: {
    //             user_name: e.target.value,
    //             password: this.state.user.password,
    //             email: this.state.user.email
    //         }
    //     })
    // }

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

                    <button type='submit' name="Submit"/>
                </form>
                <h3>Don't have an account? <Link to="/signup">Signup Here</Link></h3>
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