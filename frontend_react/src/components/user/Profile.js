import React from 'react';
import { connect } from "react-redux";
import { getUserReadings } from '../../store/user/actions'
import CardImage from "../cards/CardImage";

class Profile extends React.Component {

    //fetching readings for this user
    componentDidMount() {
        console.log("Profile Did Mount", this.props.user.user);

        this.props.getReadings(this.props.user.user.id)
    }

    render() {
        return (
            <div>
                <h1>Your Past Readings</h1>
    
                {Array.isArray(this.props.user.readings) && this.props.user.readings.length > 0 ?  
                    this.props.user.readings.reverse().map(reading => 
                    <div className="horizontal-scroll">
                        <h4>{reading.readingName}</h4>

                        {reading.readingCards.map(card => <CardImage card={card} /> )}
                    </div>
                    )
                : <h2>No readings to show yet. Pull some cards and come back!</h2> }
               
            </div>
        )
    }
}

const MSTP = (state) => ({
    cardList: [...state.cards.cardList],
    user: {...state.user}
})

const MDTP = (dispatch) => ({
    getReadings: (id) => {
        dispatch(getUserReadings(id))
    }
})

export default connect(MSTP, MDTP)(Profile);