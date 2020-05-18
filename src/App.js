import React from 'react';
import Onboarding from "./components/onboarding/Onboarding";
import Dashboard from "./components/dashboard/Dashboard";
import {Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Onboarding} />
      <Route path="/explorer/" component={Dashboard} />
    </div>
  );
}

export default App;
