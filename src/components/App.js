import React, { Component } from 'react';
import { Navbar, Home, Page404 } from "./";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';


const signin = () => {
  return <div>signin</div>;
};
const signup = () => {
  return <div>signup</div>;
};

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
        </div>

        

        <Switch>
          <Route
            exact
            path='/'
            render={(props) => {
              return <Home {...props} />;
            }}
          />
          <Route exact path='/signin' component={signin} />
          <Route exact path='/signup' component={signup} />
          <Route component={Page404} />
        </Switch>
      </Router>
    );
  }
}

export default App;