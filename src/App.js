import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={ Home } />
          <Route path="/register" exact component={ Register } />
          <Route path="/login" exact render={() => <h1>Login</h1>} />
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;
