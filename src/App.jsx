import React from 'react';
import './stylesheets/App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Splash from './splash';
import Booth from './Booth';
import PresetIndex from './PresetIndex';
import PhoneNav from './PhoneNav';
import Settings from './settings';
import Gallery from './Gallery';

function App() {
  return (
    <div className="App">
      <Route path='/' component={PhoneNav}></Route>
      <Switch>
        {/* <Route path='/' component={Splash}></Route> */}
        <Route path='/phone' component={PresetIndex}></Route>
        <Route path='/test' component={Booth}></Route>
        <Route exact path='/' component={Splash}></Route>
        <Route exact path='/settings' component={Settings}></Route>
        <Route exact path='/gallery' component={Gallery}></Route>
      </Switch>
    </div>
  );
}

export default App;
