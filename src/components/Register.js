import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.png';
import AppForm from './form.js';

class Register extends Component {
  render() {
    return (
      <div className="Register">
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
          <AppForm />
        </p>
      </div>
    );
  }
}

export default Register;