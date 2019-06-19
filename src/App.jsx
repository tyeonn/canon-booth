import React from 'react';
import './stylesheets/App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Splash from './splash';
import Booth from './Booth';
import Settings from './settings';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/test' component={Booth}></Route>
        <Route exact path='/' component={Splash}></Route>
        <Route exact path='/settings' component={Settings}></Route>
      </Switch>
    </div>
  );
}

export default App;
