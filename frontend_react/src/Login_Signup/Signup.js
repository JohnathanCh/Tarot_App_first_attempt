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
        // localStorage.setItem('token', user.jwt)
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


// <a class="ui button primary" id="test"> 
// Login </a>  
//        <div class="ui modal test">
//          <div class="ui middle aligned center aligned grid">
//   <div class="column">
//     <h2 class="ui blue image header">
//       <img src="assets/images/logo.png" class="image">
//       <div class="content">
//         Log-in to your account
//       </div>
//     </h2>
//     <form class="ui large form">
//       <div class="ui  segment">
//         <div class="field">
//           <div class="ui left icon input">
//             <i class="user icon"></i>
//             <input type="text" name="email" placeholder="E-mail address">
//           </div>
//         </div>
//         <div class="field">
//           <div class="ui left icon input">
//             <i class="lock icon"></i>
//             <input type="password" name="password" placeholder="Password">
//           </div>
//         </div>
//         <div class="ui fluid large primary submit button">Login</div>
//       </div>
//     </form>

//     <div class="ui message">
//       New to us? <a href="#">Sign Up</a>
//     </div>
//   </div>
// </div>
//        </div>