import React, { Component } from 'react';
import '../App.css';
import logo from "../logo.png"

//images
import a00 from "../assets/cam1/00.jpg";
import a01 from "../assets/cam1/01.jpg";
import a02 from "../assets/cam1/02.jpg";
import a03 from "../assets/cam1/03.jpg";
import a04 from "../assets/cam1/04.jpg";
import a05 from "../assets/cam1/05.jpg";
import a06 from "../assets/cam1/06.jpg";
import a07 from "../assets/cam1/07.jpg";
import a08 from "../assets/cam1/08.jpg";
import a09 from "../assets/cam1/09.jpg";
import a10 from "../assets/cam1/10.jpg";
import a11 from "../assets/cam1/11.jpg";
import a12 from "../assets/cam1/12.jpg";
import a13 from "../assets/cam1/13.jpg";
import a14 from "../assets/cam1/14.jpg";
import a15 from "../assets/cam1/15.jpg";

class FoodCam extends Component {
  state = {
    bars:[a00,a01,a02,a03,a04,a05,a06,a07,a08,a09,a10,a11,a12,a13,a14,a15],
    activeImageIndex: 0
 }
  componentDidMount(){
   setInterval(()=>{
     let newActiveIndex = this.state.activeImageIndex===15 ? 0 : this.state.activeImageIndex+1     
     this.setState({
        activeImageIndex: newActiveIndex
     })
   }, 2000);
 }
  render() {
    return (
      <div className="FoodCam">
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

export default FoodCam;