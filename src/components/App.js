import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import Game from './ClickyItemContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppNavbar />
        </header>

        <Game />
      </div>
    );
  }
}

export default App;
