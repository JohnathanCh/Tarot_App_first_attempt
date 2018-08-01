import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class NavBar extends React.Component {
    // This Will handle the Logout inside redux and in localStorage
    handleLogout = () => {
        
        localStorage.clear()
      }

    render() {
        return (
            <div id="nav-bar" className="ui large menu" style={{  background: "rgb(14, 30, 39)",
  margin: "0",
  "border-radius": "0"}}>
                <h1 style={{color: "white"}}>Three Seeds Tarot</h1>

                    <div className="right menu">
                    <NavLink to="/cards">
                        <button id="navButton" className="item" > Cards </button>
                    </NavLink>
                

                
                    <NavLink to="/readings">
                        <button id="navButton" className="item" > Readings </button>
                    </NavLink>
                 

                
                    <NavLink to="/profile">
                        <button id="navButton" className="item" > Profile </button> 
                    </NavLink>

                    
                        <button onClick={this.handleLogout} id="logout" className="ui primary button" >Logout</button>
                    </div>
                
            </div>
        )
    }
}

export default withRouter(NavBar);


                {/* <Switch >
                    <Route path="/cards" component={ CardList } />
                    <Route path="/readings" component={ ReadingList } />
                    <Route path="/profile" component={ Profile } />
                </Switch>  */}
