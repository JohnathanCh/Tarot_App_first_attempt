import React, {Component} from 'react';

export default class Auth extends Component {

    render() {
        return(
        <form> 
            <label>
                Username:
            </label>
            <input type="text" name="username"/>

            <label>
                Password:
            </label>
            <input type ="text" name="password"/>

            <h2>
                If you don't have an account yet...
            </h2>
        </form>
    )}
}