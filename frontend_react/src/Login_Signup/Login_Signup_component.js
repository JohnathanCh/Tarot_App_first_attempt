import React from 'react'

export default class LoginSignup extends React.Component {
    state = {
        user_name: '',
        user_email: '',
        password: ''
    }

    handleNameInput = (e) => {
        // console.log(e.currentTarget.value);
        this.setState({
            ...this.state,
            user_name: e.currentTarget.value 
        })
    }

    handleEmailInput = (e) => {
        // console.log(e.currentTarget);
        this.setState({
            ...this.state,
            user_email: e.currentTarget.value 
        })
    }

    handlePasswordInput = (e) => {
        // console.log(e.currentTarget);
        this.setState({
            ...this.state,
            password: e.currentTarget.value 
        })
    }

    render() {
        console.log(this.state);
        
        return (
            <div>
                <form action="">
                    <label htmlFor="user_name">Name:</label>
                    <input type="text" name="user_name" value={this.state.user_name} placeholder="Enter your Name" onChange={this.handleNameInput}/>

                    <label htmlFor="user_email">Email</label>
                    <input type="text" name="user_email" value={this.state.user_email} placeholder="Enter your Email" onChange={this.handleEmailInput}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={this.state.password} placeholder="*****" onChange={this.handlePasswordInput}/>
                </form>
            </div>
        )
    }

}