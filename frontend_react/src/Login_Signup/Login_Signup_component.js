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

    handleSubmit = (e) => {
        e.preventDefault()

        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...this.state
            })
        }
        let post;

        fetch('http://localhost:3000/users', options)
        .then(resp => {
            return resp.json()
        })
        .then(results => {console.log("USER POST", results)})
    }

    componentDidMount = () => {
        fetch('http://localhost:3000/cards')
        .then(resp => resp.json())
        .then(results => {console.log("CARDS", results);
        })
    }

    render() {
        console.log(this.state);
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="user_name">Name:</label>
                    <input type="text" name="user_name" value={this.state.user_name} placeholder="Enter your Name" onChange={this.handleNameInput}/>

                    <label htmlFor="user_email">Email</label>
                    <input type="text" name="user_email" value={this.state.user_email} placeholder="Enter your Email" onChange={this.handleEmailInput}/>

                    {/* <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={this.state.password} placeholder="*****" onChange={this.handlePasswordInput}/> */}

                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }

}