import React from 'react';

import './Spinner.scss';
import spinner from './puff.svg';

const Spinner = () => {
  return (
    <span className="spinner">
      <img src={spinner} alt=""/>
    </span>
  )
}

export default Spinner;