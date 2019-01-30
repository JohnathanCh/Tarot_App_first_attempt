import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUserAction } from './store/user/actions';

class NavBar extends React.Component {
    // This Will handle the Logout inside redux and in localStorage
    handleLogout = () => {
        
        localStorage.clear();
        this.props.logoutUser();
        this.props.history.push('/');
      }

    render() {
        return (
            <div className="ui menu" id="navBar" style={{  
            "background": "black",
            "background-position": "center",
            "margin": "0",
            "border-radius": "0"}}>
                <h1 style={{color: "white"}}>Three Seeds Tarot</h1>

                <div className="right menu">
                    <NavLink to="/cards">
                        <button id="navButton" className="item" > Cards </button>
                    </NavLink>

                    <NavLink to="/readings/new">
                        <button id="navButton" className="item" > New Reading </button>
                    </NavLink>

                    <NavLink to="/profile">
                        <button id="navButton" className="item" > Past Readings </button> 
                    </NavLink>

                    <button onClick={this.handleLogout} id="logout" className="ui button" >
                       <p className='logout-text'>Logout</p> 
                    </button>
                </div>
                
            </div>
        )
    }
}

// https://i.stoneapi.org/f031e8dfe56dfc59ad76ad9877ff7ef7/silver_sparkle/silver_sparkle_color_1.jpg

const MDTP = (dispatch) => ({
    logoutUser: () => {
        dispatch(logoutUserAction())
    }
})

export default withRouter(connect(null, MDTP)(NavBar));