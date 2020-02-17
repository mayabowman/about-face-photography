import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends React.Component {
  render() {
      return (
      <div className='nav-container'>
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
      </div>
    )
  }
}

export default Nav;