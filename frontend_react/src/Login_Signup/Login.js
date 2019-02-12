import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { getUser } from "../store/user/actions";

const inlineStyle = {
    modal : {
      marginTop: '100px !important',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  };

class Login extends Component {

    state = {
        pageOpen: true,
        loggedIn: false,
        user_email: '',
        password: ''
    }

    handleLogin = (e) => {
        // console.log(e.target.value)
        e.preventDefault()
        
        this.props.loginUser(this.state.user_email, this.state.password)
        this.props.history.push('/cards')
    }

     handleEmailInput = (e) => {
        // console.log(e.target.value)
        this.setState({
            user_email: e.currentTarget.value
        })
        
     }

     handlePasswordInput = (e) => {
        // console.log(e.target.value)
        this.setState({
            password: e.currentTarget.value
        })
        
     }

    render() {
        return (
            <div className="login-page">
                <Modal open={ this.state.pageOpen === true } style={inlineStyle.modal}>

                    <Modal.Header style={{"font-family": "'Cinzel', serif", "font-weight": "900"}}> Login </Modal.Header>

                    <Modal.Content>
                        
                        <form className="ui large form" onSubmit={this.handleLogin}>
                            <div className="ui segment">

                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="mail icon"></i>
                                        <input type="text" name="user_email" placeholder="E-mail" onChange={this.handleEmailInput}/>
                                    </div>
                                </div>

                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="lock icon"/>
                                        <input type="password" name="password" placeholder="*****" onChange={this.handlePasswordInput}/>
                                    </div>
                                </div>

                                <button className="ui fluid large primary submit button" type="submit" style={{"font-family": "'Cinzel', serif"}}>Login</button>
                            </div>
                        </form>

                            <h3 style={{"font-family": "'Cinzel', serif"}}>If you don't have a profile you can create one <Link to='/signup'>here</Link></h3>
                    </Modal.Content>
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