import React from 'react';
import './stylesheets/App.css';
import { Route, Switch } from 'react-router-dom';
import Splash from './splash';
import Booth from './Booth';
import PresetIndex from './PresetIndex';
import PhoneNav from './PhoneNav';
import Settings from './settings';
import Gallery from './Gallery';

function App() {
  return (
    <div className="App">
      <Route path='/phone' component={PhoneNav}></Route>
      <Switch>
        {/* <Route path='/' component={Splash}></Route> */}
        <Route exact path='/phone' component={PresetIndex}></Route>
        <Route path='/booth' component={Booth}></Route>
        <Route exact path='/' component={Splash}></Route>
        <Route exact path='/phone/settings' component={Settings}></Route>
        <Route exact path='/phone/gallery' component={Gallery}></Route>
      </Switch>
    </div>
  );
}

export default App;
