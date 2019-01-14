import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'semantic-ui-react';

import { createUserAction, createUser } from '../store/user/actions';

const inlineStyle = {
    modal : {
      marginTop: '100px !important',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  };

class Signup extends React.Component {

    
    state = {
        user: {
            userName: '',
            userEmail: '',
            password: ''
        },
        loggedIn: false,
        pageOpen: true
    };


    handleUserNameInput = (e) => {
        console.log(e.target.value)

        this.setState({
            user:{
                ...this.state.user,
                userName: e.currentTarget.value 
            }

        })
    };

    handleEmailInput = (e) => {
        this.setState({
            user:{
                ...this.state.user,
                userEmail: e.currentTarget.value 
            }

        })
    };

    handlePasswordInput = (e) => {
        this.setState({
            user:{
                ...this.state.user,
                password: e.currentTarget.value
            }
 
        })
    };

    handleSignup = (e) => {
        e.preventDefault()

        this.props.handleCreateUser({...this.state.user})
        // localStorage.setItem('token', user.jwt)
    };



    render() {
        // MAKE SURE TO BE CONSISTENT WITH NAMING THE FIELDS THAT YOURE SENDING TO THE BACKEND: userName vs user_name
        // ALSO MAKE SURE TO FIND DIFFERENT ICONS WHERE NEEDED
        return (
            <div className="signup-page" >
                <Modal open={this.state.pageOpen == true} style={inlineStyle.modal}>

                    <Modal.Header> Signup </Modal.Header>

                    <Modal.Content>
                        <form className="ui large form" onSubmit={this.handleSignup}>
                            <div className="ui segment">
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="user icon"></i>
                                        <input type="text" name="userName" placeholder="UserName" value={this.props.userName} onChange={this.handleUserNameInput} />
                                    </div>
                                </div>

                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="user icon"></i>
                                        <input type="text" name="userEmail" placeholder="Email" value={this.props.userName} onChange={this.handleEmailInput}/> 
                                    </div>
                                </div>

                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="lock icon"></i>
                                        <input type="password" name="password" placeholder="Password" value={this.props.password} onChange={this.handlePasswordInput} />
                                    </div>
                                </div>
                            <button className="ui fluid large primary submit button" type="submit">Login</button>
                            </div>
                        </form>
                    </Modal.Content>
                </Modal>
            </div>
        )
    };
};


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