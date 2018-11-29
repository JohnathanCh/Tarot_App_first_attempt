import React, {Component} from 'react';

export default class Auth extends Component {

    render() {
        return(
        <form> 
            <label>
                user_name:
            </label>
            <input type="text" name="user_name" className="username"/>

            <label>
                Password:
            </label>
            <input type ="text" name="password"/>

            <label>Legos love you!</label>
            <input type="text" placeholder="MEEopold"/>

            <h2>
                If you don't have an account yet... Then you can create one <bold>here</bold>
            </h2>
        </form>
    )}
}