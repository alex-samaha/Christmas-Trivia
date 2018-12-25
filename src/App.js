import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Quiz from './components/Quiz';
import Navbar from './components/Navbar';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="ui container centered">
          <Navbar />
          <Route exact path="/" component={Home} />
          <div className="container">
            <Route exact path="/jacques-present" component={Quiz} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
