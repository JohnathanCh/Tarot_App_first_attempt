import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class NavBar extends React.Component {

    render() {
        return (
            <div className="ui inverted menu">
                <h1 style={{color: "white"}}>Three Seeds Tarot</h1>

                
                    <NavLink to="/cards">
                        <button > Cards </button>
                    </NavLink>
                

                
                    <NavLink to="/readings">
                        <button > Readings </button>
                    </NavLink>
                 

                
                    <NavLink to="/profile">
                        <button > Profile </button> 
                    </NavLink>
                
                
                
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
