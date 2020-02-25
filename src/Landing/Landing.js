import React from 'react';
import './Landing.scss';

class Landing extends React.Component {
  render() {
    let names = [
      'Michelle', 'AmberB', 'AmberR', 'Gilbert', 'Graffy', 'Kraig', 'Lenny', 'Lisette1', 'Lisette2',
      'Mac', 'Maria', 'Maya1', 'Maya2', 'Steve'
    ]
    const photoDisplay = names.map((name, i) => {
      return <img key={i} src={require(`../images/${name}.jpg`)} className='headshot'alt='headshot'/>
    })

    return (
      <div className='photo-div'>
        {photoDisplay}
        <div className='sq-div'>
          <img src={require('../images/Mechaela.jpg')} id='square-img' alt='headshot'/>
        </div>
      </div>
    )
  }
}

export default Landing;