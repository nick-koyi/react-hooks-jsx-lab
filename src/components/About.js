import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>Hello, My name is Liza I love programming</p>
    <img src={image} alt="I made this"/>
  </div>
);
}

export default About;
