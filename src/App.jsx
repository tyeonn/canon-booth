import React from 'react';
import './stylesheets/App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Splash from './splash';
import Booth from './Booth';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Splash}></Route>
        <Route path='/test' component={Booth}></Route>
      </Switch>
    </div>
  );
}

export default App;
