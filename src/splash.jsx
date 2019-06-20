import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

function splash() {

  return (
    <div className='splash-container'>
      <div className="splash-options">
        <img src={logo} className='App-logo' alt="" />
        <button className="begin-session-button"><Link className="begin-session-link" to="/phone">Begin Session</Link></button>
      </div>
    </div>
  )
}

export default splash;