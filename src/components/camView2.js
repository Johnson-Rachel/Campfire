import React, { Component } from 'react';
import '../App.css';
import logo from "../logo.png"

//images
import b1 from "../assets/test2/1a.jpg";
import b2 from "../assets/test2/2a.jpg";
import b3 from "../assets/test2/3a.jpg";
import b4 from "../assets/test2/4a.jpg";
import b5 from "../assets/test2/5a.jpg";
import b6 from "../assets/test2/6a.jpg";
import b7 from "../assets/test2/7a.jpg";
import b8 from "../assets/test2/8a.jpg";
import b9 from "../assets/test2/9a.jpg";
import b10 from "../assets/test2/10a.jpg";

 class FoodCam2 extends Component {
  state = {
    bars:[b1,b2,b3,b4,b5,b6,b7,b8,b9,b10],
    activeImageIndex: 0
 }
  componentDidMount(){
   setInterval(()=>{
     let newActiveIndex = this.state.activeImageIndex===9 ? 0 : this.state.activeImageIndex+1     
     this.setState({
        activeImageIndex: newActiveIndex
     })
   }, 2000);
 }
  render() {
    return (
      <div className="FoodCam2">
        <header className="Small-header">
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
                  <a href="/food-cam-a">CS Lounge</a>
                </li>
                <li>
                  <a href="/food-cam-b">Phlounge</a>
                </li>
                <li>
                  <a href="/food-cam-c">Flaherty Kitchen</a>
                </li>
              </ul>
            </nav>
        </header>
        <div className="images">
        <img src={this.state.bars[this.state.activeImageIndex]} />
        </div>
      </div>
    );
  }
}

export default FoodCam2;