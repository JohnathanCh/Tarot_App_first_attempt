import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleLogout = (user) => {
    localStorage.clear()
    console.log(user)
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Link to="/profile">
          <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick}>
            Profile
          </Menu.Item>
        </Link>

        <Link to="/readings">
          <Menu.Item name='readings' active={activeItem === 'readings'} onClick={this.handleItemClick}>
            Readings
          </Menu.Item>
        </Link>

        <Link to="/">
          <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleLogout} >
            Logout
          </Menu.Item>
        </Link>
      </Menu>
    )
  }
}