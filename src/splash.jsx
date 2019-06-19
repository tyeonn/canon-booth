import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

function splash() {

  return (
    <div className='splash-container'>
      <header>
        <img src={logo} className='App-logo' alt=""/>
      </header>

      <Link to="/photo">Begin Session</Link>
    </div>
  )
}

export default splash;