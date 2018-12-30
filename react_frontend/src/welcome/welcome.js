import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Login from './Login';

class Welcome extends Component{
    // state = {
    //     signup: false,
    //     loggedIn: this.props.user.loggedIn,
    //     user: {...this.props.user.userInfo}
    // }

    render() {
        console.group()
        console.log(this.props);
        console.log(this.props.loggedIn);
        console.groupEnd()
        // console.log(this.state);
        console.log("^^ props inside the welcome page ^^")
        
        return(
            <div>
                <h1>Welcome to Three Seeds Tarot App</h1>

                <Login/>

                <h3>If you don't have a Profile already, you can sign up <Link to="/signup">Here</Link></h3>
            </div>
    )}
}

const mapStateToProps = (state) => ({
    userInfo: {...state.userInfo},
    loggedIn: state.loggedIn
})

export default connect(mapStateToProps)(Welcome)
