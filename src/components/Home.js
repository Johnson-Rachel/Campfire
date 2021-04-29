import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.png'

class Home extends Component {
  render() {
    return (
        <div className="Home">
          <header className="App-header">
            <nav>
              <ul>
                <li>
                  <a href="/"><img className="logo" src={logo}></img> Home</a>
                </li>
                {/*
                <li>
                  <a href="/register">Register</a>
                </li>
                <li>
                  <a href="/login">Login</a>
                </li>
                */}
                <li>
                  <a href="/food-cam">Food Cam</a>
                </li>
              </ul>
            </nav>
            <h1 className="App-title">Welcome to Campfire</h1>
            <h1 className="App-tagline">Campfire uses food cams to bring people together and eliminate food waste!</h1>
          </header>
          <p className="App-body">
            <button href="/register">
              Register
            </button>
          </p>
          <p className="App-body">
            <button href="/login">
              Login
            </button>
          </p>
        </div>
    );
  }
}

export default Home;