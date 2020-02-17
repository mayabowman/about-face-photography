import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About/About';
import Contact from './Contact/Contact';
import Landing from './Landing/Landing';
import Nav from './Nav/Nav';
import './App.scss';


function App() {
  return (
    <main className="App">
      <Nav />
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

export default App;
