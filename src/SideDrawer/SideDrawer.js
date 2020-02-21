import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.scss'

class SideDrawer extends React.Component {
  render() {
    let drawerClasses;
    this.props.show ? drawerClasses = 'side-drawer open' : drawerClasses = 'side-drawer'
    return (
      <nav className={drawerClasses}>
        <Link
          to={'/about'}
          className='side-drawer__text-link'
          onClick={this.props.toggle}
        >
          About
        </Link>
        <Link
          to={'/contact'}
          className='side-drawer__text-link'
          onClick={this.props.toggle}
        >
          Contact
        </Link>
      </nav>
    )
  }
}

export default SideDrawer;