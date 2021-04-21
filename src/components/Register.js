import React, { Component } from 'react';
import '../App.css';

class Register extends Component {
  render() {
    return (
      <div className="Register">
        <header className="Small-header">
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
        </header>
        <p className="App-body">
          <button href="https://www.github.com">
            This is different
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

export default Register;