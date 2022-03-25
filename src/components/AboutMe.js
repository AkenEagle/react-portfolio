import React from "react";

import profileImg from "../assets/images/profile.jpeg";

import "../App.css";

export const AboutMe = () => {
  return (
    <section id="about-me" className="content">
      <div className="content-title">
        <h3>About me</h3>
      </div>
      <div className="content-box">
        <img src={profileImg} alt="harmanjot singh profile" height="300px" />
        <p>
          I'm Harman, an ispiring full-stack Web Developer. Currently studying
          at the Coding Bootcamp at University of Birmingham. I used the skills
          learned to build this website and will continue to improved it as I
          learn more.
        </p>
      </div>
    </section>
  );
};
