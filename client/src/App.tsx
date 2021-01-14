import React from 'react';
import './App.css';
import { Authentication } from './containers/Authentication/Authentication'
import Page1 from './containers/Page1/Page1'
import Page2 from './containers/Page2/Page2'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavigationItems } from './components/Navigation/NavigationItems/NavigationItems'

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationItems></NavigationItems>
        <Route exact path='/' component={Authentication} />
        <Route exact path='/home' component={Authentication} />
        <Route exact path='/page1' component={Page1} />
        <Route exact path='/page2' component={Page2} />
      </Router>    
      </div>
  );
}

export default App;
