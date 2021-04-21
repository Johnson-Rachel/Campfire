import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Small-header">
          <pa></pa>
          <h1 className="App-title">Welcome to Campfire!</h1>
        </header>
        <p className="App-body">
          <button href="https://www.github.com">
            Login
          </button>
        </p>
        <p className="App-body">
          <button href="https://github.com/Johnson-Rachel/Campfire">
            Register
          </button>
        </p>
      </div>
    );
  }
}

export default App;