import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.png'
import AppForm from './form.js';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <header className="Small-header">
          <nav>
              <ul>
                <li>
                  <a href="/"><img className="logo" src={logo}></img> Home</a>
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
            These buttons don't work yet
          </button>
        </p>
        <AppForm />
      </div>
    );
  }
}

export default Login;