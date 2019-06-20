import React from 'react';
import './stylesheets/App.css';
import { Route, Switch } from 'react-router-dom';
import Splash from './splash';
import Booth from './Booth';
import PresetIndex from './PresetIndex';
import PhoneNav from './PhoneNav';
import Settings from './settings';

function App() {
  return (
    <div className="App">
      <Route path='/' component={PhoneNav}></Route>
      <Switch>
        {/* <Route path='/' component={Splash}></Route> */}
        <Route path='/phone' component={PresetIndex}></Route>
<<<<<<< HEAD
        <Route path='/settings' component={Sample}></Route>
<<<<<<< HEAD
=======
=======
>>>>>>> 67f5a2a529c11da599822acbeb31160a44324f59
        <Route path='/test' component={Booth}></Route>
        <Route exact path='/' component={Splash}></Route>
        <Route exact path='/settings' component={Settings}></Route>
>>>>>>> 7906bfdd4c12cd8a4496df312021028ecea7e793
      </Switch>
    </div>
  );
}

export default App;
