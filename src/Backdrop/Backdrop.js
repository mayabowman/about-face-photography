import React from 'react';
import './Backdrop.scss';

function Backdrop(props) {
  return (
    <div className='backdrop' onClick={props.click}/>
  )
};

export default Backdrop;