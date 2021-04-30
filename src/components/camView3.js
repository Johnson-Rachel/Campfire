import React, { Component } from 'react';
import '../App.css';
import logo from "../logo.png"

//images
import a00 from "../assets/cam3/00.jpg";
import a01 from "../assets/cam3/01.jpg";
import a02 from "../assets/cam3/02.jpg";
import a03 from "../assets/cam3/03.jpg";
import a04 from "../assets/cam3/04.jpg";
import a05 from "../assets/cam3/05.jpg";
import a06 from "../assets/cam3/06.jpg";
import a07 from "../assets/cam3/07.jpg";
import a08 from "../assets/cam3/08.jpg";
import a09 from "../assets/cam3/09.jpg";

 class FoodCam3 extends Component {
  state = {
    bars:[a00,a01,a02,a03,a04,a05,a06,a07,a08,a09],
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
      <div className="FoodCam3">
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

export default FoodCam3;