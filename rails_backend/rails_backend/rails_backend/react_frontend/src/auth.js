import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createUser } from './store/user/actions';

class Signup extends Component {

    state = {
        user: {
            user_name: '',
            password: '',
            email: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)

        this.props.handleCreateUser({...this.state.user})

    }


    render() {
        return(
        <form onSubmit={this.handleSubmit}> 
            <label>
                Username:
            </label>
            <input type="text" name="user_name" className="username"/>

            <label>
                Password:
            </label>
            <input type ="password" name="********"/>

            <button type='submit' name="Submit"/>

            <h2>
                If you don't have an account yet... Then you can create one <bold>here</bold>
            </h2>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup)