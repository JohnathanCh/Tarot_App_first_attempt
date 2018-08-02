import React from 'react';
import { connect } from "react-redux";

class Profile extends React.Component {

    render() {
        return (
            <div>
                <h1>Here is the profile page</h1>
                <h3>User info</h3>
                <h3>Your Readings (LINK)</h3>
                <h3>New Reading (LINK)</h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cardList: [...state.cards.cardList],
    user: {...state.user.user}
})

export default connect(mapStateToProps)(Profile);