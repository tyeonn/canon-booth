import React from 'react';
import './stylesheets/App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Splash from './splash';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Splash}></Route>
      </Switch>
    </div>
  );
}

export default App;
