import React, { Component } from 'react';
import { Navbar } from "./";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
        </div>
      </Router>
    );
  }
}

export default App;