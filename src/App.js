import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About/About';
import Contact from './Contact/Contact';
import Landing from './Landing/Landing';
import Nav from './Nav/Nav';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import './App.scss';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sideDrawerOpen:false
    }
    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this)
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  render() {
    library.add(faBars, faPhone, faEnvelope);
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <main className="App">
        <Nav drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer
          show={this.state.sideDrawerOpen}
          toggle={this.drawerToggleClickHandler}
        />
        {backdrop}
        <section className='content'>
          <Switch>
            <>
              <Route
                exact path='/'
                component={Landing}
              />
              <Route
                path='/about'
                component={About}
              />
              <Route
                path='/contact'
                component={Contact}
              />
            </>
          </Switch>
        </section>
      </main>
    );
  }
}

export default App;
