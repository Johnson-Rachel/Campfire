import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login'
import FoodCam from './components/camView';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={ Home } />
          <Route path="/register" exact component={ Register } />
          <Route path="/login" exact component={ Login } />
          <Route path="/food-cam" exact component={ FoodCam } />
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;
