import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUserAction } from './store/user/actions';
import './App.css'

class NavBar extends React.Component {
    // This Will handle the Logout inside redux and in localStorage
    handleLogout = () => {
        
        localStorage.clear();
        this.props.logoutUser();
        this.props.history.push('/');
      }

    render() {
        return (
            <div id="navBar" >
                
                <h1 className="navTitle" >Three Seeds Tarot</h1>

                <div className="menu" id="navButtons">
                    <NavLink to="/cards">
                        <button id="navButton" ><p className="button-text"> Cards </p></button>
                    </NavLink>

                    <NavLink to="/readings/new">
                        <button id="navButton" ><p className="button-text"> New Reading </p></button>
                    </NavLink>

                    <NavLink to="/profile">
                        <button id="navButton" ><p className="button-text"> Past Readings </p></button> 
                    </NavLink>

                    <button onClick={this.handleLogout} id="logout" >
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