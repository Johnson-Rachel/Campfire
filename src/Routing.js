import React, { Component } from 'react';
import './App.css';

class Routing extends Component {

  render() {
    return (
      <div className="Routing">
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                        <a href="/register">Register</a>
                        <a href="/login">Login</a>
                        <a href="/view">View</a>
                    </li>
                </ul>
            </nav>
        </header>
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

export default Routing;