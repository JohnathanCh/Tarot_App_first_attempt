import React from 'react';
import { connect } from 'react-redux';
import { getUser } from "../store/user/actions";

import { Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Login extends React.Component {

    state = {
        pageOpen: true,
        loggedIn: false,
        user_email: '',
        password: ''
    }

    handleLogin = (e) => {
        e.preventDefault()
        console.log('Popopops', this.state.password);
        
        this.props.loginUser(this.state.user_email, this.state.password)
    }

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
                <Modal open={ this.state.pageOpen == true }>
                        
                    <div className="login-form">
                    <form onSubmit={this.handleLogin}>

                            <label htmlFor="user_email">Email</label>
                            <input type="text" name="user_email" placeholder="Enter your Email" onChange={this.handleEmailInput}/>

                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="*****" onChange={this.handlePasswordInput}/>

                            <button className="submit-button" type="submit">Submit</button>
                        </form>

                        <h3>If you don't have a profile you can create one <Link to='/signup'>here</Link></h3>
                    </div>
                </Modal>
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