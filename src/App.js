import React, { Component } from 'react';
import home from './home.png';
import './App.css';
import List from './components/List/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={home} className="logo" alt="Home Logo" height="42" width="42"></img>
        <List />
      </div>
    );
  }
}

export default App;
