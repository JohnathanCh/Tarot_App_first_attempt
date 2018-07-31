import React from 'react';
import cardListReducer from '../store/allCards/reducer';
import { connect } from 'react-redux';
import { createUserAction, createUser } from '../store/user/actions';

class Signup extends React.Component {

    
    state = {
        user: {
            userName: '',
            userEmail: '',
            password: ''
        },
        loggedIn: false,
    }


    handleNameInput = (e) => {
        this.setState({
            user:{
                ...this.state.user,
                userName: e.currentTarget.value 
            }

        })
    }

    handleEmailInput = (e) => {
        this.setState({
            user:{
                ...this.state.user,
                userEmail: e.currentTarget.value 
            }

        })
    }

    handlePasswordInput = (e) => {
        this.setState({
            user:{
                ...this.state.user,
                password: e.currentTarget.value
            }
 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.handleCreateUser({...this.state.user})
    }



    render() {
        
        return (
            <div className="signup" >
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="userName">Name:</label>
                    <input type="text" name="userName" value={this.props.userName} placeholder="Enter your Name" onChange={this.handleNameInput}/>

                    <label htmlFor="userEmail">Email</label>
                    <input type="text" name="userEmail" value={this.props.userEmail} placeholder="Enter your Email" onChange={this.handleEmailInput}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={this.props.password} placeholder="*****" onChange={this.handlePasswordInput}/>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }

}


const mapDispatchToProps = (dispatch) => ({
    handleCreateUser: (user) => {
        dispatch(createUser(user))
    }
})

const mapStateToProps = (state) => ({
    user: {...state.user}
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

// mapStateToProps = (cardListReducer) => {

// }

