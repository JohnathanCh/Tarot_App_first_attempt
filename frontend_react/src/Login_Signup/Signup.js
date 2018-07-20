import React from 'react';

export default class Signup extends React.Component {
    state = {
        user: {
            userName: '',
            userEmail: '',
            password: ''
        },
        cardList: [],
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

    handleSubmit = (e) => {
        e.preventDefault()

        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {...this.state.user}
            })
        }

        //Send back info that logs the user in
        //Fetch should happen in a thunk with redux
        fetch('http://localhost:3000/users', options)
        .then(resp => resp.json())
        .then(results => {console.log("USER POST", results)})
    }

    // componentDidMount = () => {
    //     fetch('http://localhost:3000/cards')
    //     .then(resp => resp.json())
    //     .then(cards => {
    //         this.setState({
    //             ...this.state,
    //             cardList: [...cards]
    //         })
    //     })
    // }



    render() {
        console.log(this.state);
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="userName">Name:</label>
                    <input type="text" name="userName" value={this.state.userName} placeholder="Enter your Name" onChange={this.handleNameInput}/>

                    <label htmlFor="userEmail">Email</label>
                    <input type="text" name="userEmail" value={this.state.userEmail} placeholder="Enter your Email" onChange={this.handleEmailInput}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={this.state.password} placeholder="*****" onChange={this.handlePasswordInput}/>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }

}