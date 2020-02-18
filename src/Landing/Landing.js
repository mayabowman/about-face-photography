import React from 'react';
import './Landing.scss';

class Landing extends React.Component {
  render() {
    let names = [
      'AmberB', 'AmberR', 'Gilbert', 'Graffy', 'Kraig', 'Lenny', 'Lisette1', 'Lisette2',
      'Mac', 'Maria', 'Maya1', 'Maya2', 'Mechaela', 'Michelle', 'Steve'
    ]
    const photoDisplay = names.map((name, i) => {
      return <img key={i} src={require(`../images/${name}.jpg`)} className='headshot'alt='headshot'/>
    })

    console.log('photoDisplay', photoDisplay[0].props.src)
    return (
      <div>
        <p>Photos will go here</p>
        {photoDisplay}
      </div>
    )
  }
}

export default Landing;