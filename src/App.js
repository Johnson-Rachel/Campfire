import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login'
import FoodCam from './components/camView';
import FoodCam2 from './components/camView2';
import FoodCam3 from './components/camView3';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={ Home } />
          <Route path="/register" exact component={ Register } />
          <Route path="/login" exact component={ Login } />
          <Route path="/food-cam-a" exact component={ FoodCam } />
          <Route path="/food-cam-b" exact component={ FoodCam2 } />
          <Route path="/food-cam-c" exact component={ FoodCam3 } />
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;
