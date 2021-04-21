import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/register">Register</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </nav>
          <h1 className="App-title">Welcome to Campfire</h1>
          <h1 className="App-tagline">Campfire uses food cams to bring people together and eliminate food waste!</h1>
        </header>
        {/*
        <p className="App-body">
          <Link to="https://www.github.com">
            <button>
              Login
            </button>
          </Link>
        </p>
        */}
        <p className="App-body">
          <button href="https://github.com/Johnson-Rachel/Campfire">
            Register
          </button>
        </p>
        <p className="App-body">
          <button href="https://github.com/Johnson-Rachel/Campfire">
            Login
          </button>
        </p>
      </div>
    );
  }
}

export default App;
