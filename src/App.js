import React, { Component } from 'react';
import LandingPage from './pages/LandingPage';
import {Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './pages/Navbar';
import LondonBreed from './pages/LondonBreed';
import JaneKim from './pages/JaneKim';
import MarkLeonard from './pages/MarkLeonard';
import Overview from './pages/CandidateOverview';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/londonbreed" component={LondonBreed} />
            <Route exact path="/janekim" component={JaneKim} />
            <Route exact path='/markleonard' component={MarkLeonard} />
            <Route exact path='/overview' component={Overview} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
