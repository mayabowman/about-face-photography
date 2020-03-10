import React from 'react';
import './About.scss';

function About() {
  return (
    <div className='about-page'>
      <div className='about'>
        <img src={require('../images/about-page-pic.jpeg')} alt='camera in hands' className='about-pic'/>
        <h2>WHAT I DO</h2>
        <p>Thanks for taking a minute to read this. I’m a photographer focusing on headshots, portraits and product photography for the individual trying to make their way and be acknowledged.
          For the person needing to be seen for what they can bring to a situation, a community, a life.
          This means listening, vision, and some good lighting go a long way towards proving potential.
          A portrait is a capsule of the potential of character.  What a photo session offers is an
          exchange of perspectives on character. And if a camera can capture that exchange,
          it is truly a gift.</p>
      </div>
    </div>
  )
}

export default About;