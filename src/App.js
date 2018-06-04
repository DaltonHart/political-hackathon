import React, { Component } from 'react';
import LandingPage from './pages/LandingPage';
import {Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './pages/Navbar';
import LondonBreed from './pages/LondonBreed';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/londonbreed" component={LondonBreed} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
