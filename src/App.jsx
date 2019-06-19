import React from 'react';
import './stylesheets/App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Splash from './splash';

function App() {
  return (
    <div className="App">

      <div className='app-main'>
        <Switch>
          <Route path='/photo' component={}
          <Route path='/' component={Splash}></Route>
        </Switch>
      </div>

    </div>
  );
}

export default App;
