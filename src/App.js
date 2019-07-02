import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import { Switch, Route } from 'react-router-dom';
import Step2 from './components/Step2';
import Step3 from './components/Step3';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/step2' component={Step2} />
      <Route path='/step3' component={Step3} />
    </Switch>
  );
}

export default App;
