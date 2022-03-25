import React from "react";

import readersRevivalImg from "../assets/images/readers-revival.png";
import employeeTrackerImg from "../assets/images/employee-tracker.png";
import readmeGeneratorImg from "../assets/images/readme-generator.jpg";
import textEditorImg from "../assets/images/text-editor.png";
import food4UImg from "../assets/images/food4u.png";
import noteTakerImg from "../assets/images/note-taker.png";
import techBlogImg from "../assets/images/tech-blog.png";
import teamProfileGeneratorImg from "../assets/images/team-profile-generator.png";
import workDaySchedulerImg from "../assets/images/work-day-scheduler.png";
import passwordGeneratorImg from "../assets/images/password-generator.png";
import codeQuizImg from "../assets/images/code-quiz.png";

import "../App.css";

export const MyWork = () => {
  return (
    <section id="my-work" className="content">
      <div className="content-title">
        <h3>My work</h3>
      </div>
      <div className="content-box">
        <div className="card" id="main-project">
          <img src={readersRevivalImg} />
          <div className="card-info">
            <p>Readers Revival</p>
            <ul>
              <li>
                <a
                  href="https://asmaamusse.github.io/readers-revival/"
                  target="_blank"
                >
                  <i className="fa-solid fa-rocket"></i>
                  View Live
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/AsmaaMusse/readers-revival"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                  View Project
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <img src={employeeTrackerImg} />
          <div className="card-info">
            <p>Employee Tracker</p>
            <ul>
              <li>
                <a
                  href="https://github.com/AkenEagle/employee-tracker"
                  target="_blank"
                >
                  <i className="fa-solid fa-rocket"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/AkenEagle/employee-tracker"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <img src={readmeGeneratorImg} />
          <div className="card-info">
            <p>Readme Generator</p>
            <ul>
              <li>
                <a
                  href="https://github.com/AkenEagle/readme-generator"
                  target="_blank"
                >
                  <i className="fa-solid fa-rocket"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/AkenEagle/readme-generator"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <img src={textEditorImg} />
          <div className="card-info">
            <p>Text Editor</p>
            <ul>
              <li>
                <a
                  href="https://young-ocean-60222.herokuapp.com/"
                  target="_blank"
                >
                  <i className="fa-solid fa-rocket"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/AkenEagle/text-editor"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <img src={food4UImg} />
          <div className="card-info">
            <p>Food 4 U</p>
            <ul>
              <li>
                <a href="https://food-4u.herokuapp.com/" target="_blank">
                  <i className="fa-solid fa-rocket"></i>
                </a>
              </li>

              <li>
                <a href="https://github.com/AkenEagle/food4U" target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <img src={noteTakerImg} />
          <div className="card-info">
            <p>Note Taker</p>
            <ul>
              <li>
                <a
                  href="https://note-taker-harman.herokuapp.com/"
                  target="_blank"
                >
                  <i className="fa-solid fa-rocket"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/AkenEagle/note-taker"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <img src={techBlogImg} />
          <div className="card-info">
            <p>Tech Blog</p>
            <ul>
              <li>
                <a
                  href="https://tech-blog-handlebars.herokuapp.com/"
                  target="_blank"
                >
                  <i className="fa-solid fa-rocket"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/AkenEagle/tech-blog"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <img src={teamProfileGeneratorImg} />
          <div className="card-info">
            <p>Team Profile Generator</p>
            <ul>
              <li>
                <a
                  href="https://github.com/AkenEagle/team-profile-generator"
                  target="_blank"
                >
                  <i className="fa-solid fa-rocket"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/AkenEagle/team-profile-generator"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <img src={workDaySchedulerImg} />
          <div className="card-info">
            <p>Work Day Scheduler</p>
            <ul>
              <li>
                <a
                  href="https://akeneagle.github.io/work-day-scheduler/index.html"
                  target="_blank"
                >
                  <i className="fa-solid fa-rocket"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/AkenEagle/work-day-scheduler"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <img src={passwordGeneratorImg} />
          <div className="card-info">
            <p>Password Generator</p>
            <ul>
              <li>
                <a
                  href="https://akeneagle.github.io/password-generator/"
                  target="_blank"
                >
                  <i className="fa-solid fa-rocket"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/AkenEagle/password-generator"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <img src={codeQuizImg} />
          <div className="card-info">
            <p>Code Quiz</p>
            <ul>
              <li>
                <a
                  href="https://akeneagle.github.io/code-quiz/"
                  target="_blank"
                >
                  <i className="fa-solid fa-rocket"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/AkenEagle/code-quiz"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
