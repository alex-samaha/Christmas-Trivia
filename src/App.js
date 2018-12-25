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
            <Route exact path="/jacques-present" 
            render={() => <Quiz 
              questionOne="What is the name of the hospital Scrubs is set in ?"
              answerOne="Sacred Heart"
              questionTwo="(Breaking Bad) Fill in the blank: No they're ___, jesus Marie!"
              answerTwo="minerals"
              questionThree="It was once recorded that a Jaguar left skid marks that were 290 m in length. Assuming that the Jaguar skidded to a stop with a constant acceleration of -3.90 m/s2, determine the speed of the Jaguar before it began to skid (in m/s). " 
              answerThree="47.6"
              successMessage="Your gift is an InStockTrades gift card for $50 (to be emailed to you when they review the purchase)"
              /> }
            />
            <Route exact path="/dads-present" 
            render={() => <Quiz 
              questionOne="What year did Lebanon gain its independence? (After ridding of the French troops)"
              answerOne="1943"
              questionTwo="Who was elected as president of Lebanon in October 1998?"
              answerTwo="Emil Lahoud"
              questionThree="In which Lebanese city will you find a large amount of intact Roman ruins?" 
              answerThree="Baalbek"
              successMessage="Your gift of a cultural cookbook is coming soon and also a free top golf session is included."
              /> }
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
