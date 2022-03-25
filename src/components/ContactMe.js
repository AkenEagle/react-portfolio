import React from "react";

import "../App.css";

export const ContactMe = () => {
  return (
    <section id="contact-me" className="content">
      <div className="content-title">
        <h3>Contact me</h3>
      </div>
      <div className="content-box">
        <ul>
          <li>
            <i className="fa-solid fa-envelope"></i>akeneagle@gmail.com
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/harman-singh-7a749b159/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>LinkedIn
            </a>
          </li>

          <li>
            <a href="https://github.com/AkenEagle/" target="_blank">
              <i className="fa-brands fa-github"></i>GitHub
            </a>
          </li>

          <li>
            <a href="./assets/files/cv.pdf" download>
              <i className="fa-solid fa-file-pdf"></i>Download CV
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
