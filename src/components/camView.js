import React, { Component } from 'react';
import '../App.css';
import logo from "../logo.png"

//images
import a1 from "../assets/1.jpg";
import a2 from "../assets/2.jpg";
import a3 from "../assets/3.jpg";
import a4 from "../assets/4.jpg";
import a5 from "../assets/5.jpg";
import a6 from "../assets/6.jpg";
import a7 from "../assets/7.jpg";
import a8 from "../assets/8.jpg";
import a9 from "../assets/9.jpg";
import a10 from "../assets/10.jpg";
import a11 from "../assets/11.jpg";
import a12 from "../assets/12.jpg";

class FoodCam extends Component {
  state = {
    bars:[a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12],
    activeImageIndex: 0
 }
  componentDidMount(){
   setInterval(()=>{
     let newActiveIndex = this.state.activeImageIndex===11 ? 0 : this.state.activeImageIndex+1     
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
                <li>
                  <a href="/food-cam">Food Cam</a>
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