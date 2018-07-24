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
        // console.log(e.currentTarget.value);
        this.setState({
            user:{
                ...this.state.user,
                userName: e.currentTarget.value 
            }

        })
    }

    // fetchStuff = () => {
    //     fetch('http://localhost:3000/users')
    //     .then(resp => resp.json())
    //     .then(res => {console.log("users", res);
    //     })
    // }

    handleEmailInput = (e) => {
        // console.log(e.currentTarget);
        this.setState({
            user:{
                ...this.state.user,
                userEmail: e.currentTarget.value 
            }

        })
    }

    handlePasswordInput = (e) => {
        // console.log(e.currentTarget);
        this.setState({
            user:{
                ...this.state.user,
                password: e.currentTarget.value
            }
 
        })
    }

    /* this should be handled with redux */
    handleSubmit = (e) => {
        e.preventDefault()

        // this.fetchStuff()
        // user: {
        //     userName: e.currentTarget.userName.value,
        //     userEmail: e.currentTarget.userEmail.value,
        //     password: e.currentTarget.password.value
        // }
        this.props.handleCreateUser({...this.state.user})

        // let options = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         user: {...this.state.user}
        //     })
        // }

        // //Send back info that logs the user in
        // //Fetch should happen in a thunk with redux
        // fetch('http://localhost:3000/users', options)
        // .then(resp => resp.json())
        // .then(results => {console.log("USER POST", results)})
    }



    render() {
        // console.log("Signup state", this.state);
        // console.log("Signup props", this.props);
        
        return (
            <div>
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

