import React from 'react';

export default class Login extends React.Component {

    state = {
        loggedIn: false,
        user_email: '',
        password: ''
    }

    login = (user_name, password) => {
        const options = {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({
                 
             })
         }
         fetch('http://localhost:3000/users')
     }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>

                    <label htmlFor="user_email">Email</label>
                    <input type="text" name="user_email" value={this.state.user_email} placeholder="Enter your Email" onChange={this.handleEmailInput}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={this.state.password} placeholder="*****" onChange={this.handlePasswordInput}/>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}