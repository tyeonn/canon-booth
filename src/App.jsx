import React from 'react';
import './stylesheets/App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Splash from './splash';
import Booth from './Booth';
import PresetIndex from './PresetIndex';
import PhoneNav from './PhoneNav';
import Sample from './sample';
import Settings from './settings';

function App() {
  return (
    <div className="App">
      <Route path='/' component={PhoneNav}></Route>
      <Switch>
        {/* <Route path='/' component={Splash}></Route> */}
        <Route path='/phone' component={PresetIndex}></Route>
        {/* <Route path='/settings' component={Sample}></Route> */}
        <Route path='/test' component={Booth}></Route>
        <Route exact path='/' component={Splash}></Route>
        <Route exact path='/settings' component={Settings}></Route>
      </Switch>
    </div>
  );
}

export default App;
