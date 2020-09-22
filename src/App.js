import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About}  />
            <Route path='/resume' />
            <Route path='/projects'  />
          </Switch>
        </Router>
    </> 
  );
}

export default App;
