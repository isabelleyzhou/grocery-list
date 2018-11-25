import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import List from './components/List/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/list" component={List} />
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
