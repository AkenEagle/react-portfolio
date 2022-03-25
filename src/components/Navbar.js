import React from "react";

import "../App.css";

export const Navbar = () => {
  return (
    <header>
      <h1>
        <a href="./">Harmanjot Singh</a>
      </h1>

      <nav className="navbar">
        <ul>
          <li>
            <a href="#about-me">About me</a>
          </li>
          <li>
            <a href="#my-work">My work</a>
          </li>
          <li>
            <a href="#contact-me">Contact me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
