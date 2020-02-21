import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Nav.scss';

class Nav extends React.Component {
  render() {
      return (
      <nav className='nav-container'>
        <div className='navbar-toggle-button' onClick={this.props.drawerClickHandler}>
          <FontAwesomeIcon
            icon={'bars'}
            id='bars'
            size='lg'
            className='bars'
          />
        </div>
        <header className="Nav-header">
          <Link
            to={'/'}
            className='logo-link'
          >
            Sam Smith Studio
          </Link>
        </header>
        <Link
          to={'/about'}
          className='right-nav'
        >
          About
        </Link>
        <Link
          to={'/contact'}
          className='right-nav'
        >
          Contact
        </Link>
      </nav>
    )
  }
}

export default Nav;