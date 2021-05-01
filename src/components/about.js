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
import gus from "../assets/gus.jpg"
import rachel from "../assets/rachel.jpg"
import jonny from "../assets/jonathan.png"

class About extends Component {
  render() {
    return (
      <div className="About">
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
                <li>
                  <a href="/about">About</a>
                </li>
              </ul>
            </nav>
        </header>
          <h1 className="App-title">Our Team</h1>
        <div class="team">

          <li>
            <img src={gus} alt="Harrold" class="profile"/>
            <h3>Augustine Hauge</h3>
            <p>Project Developer</p>
          </li>

          <li>
            <img src={rachel} alt="Boss" class="profile"/>
            <h3>Rachel Johnson</h3>
            <p>Lead Web Developer</p>
          </li>

          <li>
            <img src={jonny} alt="Boss"  class="profile"/>
            <h3>Jonathan Pal</h3>
            <p>Image Processing Specialist</p>
          </li>
          </div>
        </div>
    );
  }
}

export default About;