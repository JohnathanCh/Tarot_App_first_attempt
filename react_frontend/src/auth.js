import React, {Component} from 'react';

export default class Auth extends Component {

    render() {
        return(
        <form> 
            <label>
                user_name:
            </label>
<<<<<<< HEAD
            <input type="text" name="user_name" className="username"/>
=======
            <input type="text" name="user_name"/>
>>>>>>> 150e3cfe0d1636492e80f1cb22068e1a1743f2b1

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