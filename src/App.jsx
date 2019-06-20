import React from 'react';
import './stylesheets/App.css';
import { Route, Link, Switch } from 'react-router-dom';
// import Splash from './splash';
import PresetIndex from './PresetIndex';
import PhoneNav from './PhoneNav';

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route path='/' component={Splash}></Route> */}
        {/* <Route path='/' component={PhoneNav}></Route> */}
        <Route path='/phone' component={PresetIndex}></Route>
      </Switch>
    </div>
  );
}

export default App;
