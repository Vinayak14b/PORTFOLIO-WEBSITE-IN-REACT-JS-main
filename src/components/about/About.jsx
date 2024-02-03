import React from "react";
import "./about.css";
import ME from "../../assets/vinayak.jpeg";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { AiOutlineFolderOpen } from "react-icons/ai";
import {SiCodechef} from "react-icons/si"
import {SiLeetcode} from "react-icons/si"
import {SiGeeksforgeeks} from "react-icons/si"
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <h6>Web Development</h6>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Group Projects</h5>
              {/* <h6>Programming Languages</h6> */}
              <small>6+ Projects</small>
            </article>

            <article className="about__card">
              <AiOutlineFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <h6>Web Development</h6>
              <small>2 Completed</small>
            </article>


            <article className="about__card">
              <SiCodechef className="about__icon" />
              <h5>Coding Ninja</h5>
              <h6><a href="https://www.codechef.com/users/khushalmalu" target="_blank">Check my Profile</a></h6>
              <small>2 Star</small>
            </article>
            <article className="about__card">
              <SiLeetcode className="about__icon" />
              <h5>Leetcode</h5>
              <h6><a href="https://leetcode.com/khushalmalu/" target="_blank">Check my Profile</a></h6>
              <small>80+ Problems</small>
            </article>
            <article className="about__card">
              <SiGeeksforgeeks className="about__icon" />
              <h5>GeekforGeeks</h5>
              <h6><a href="https://auth.geeksforgeeks.org/user/khushalmalu/" target="_blank">Check my Profile</a></h6>
              <small>100+ Problems</small>
            </article>
          </div>
          <p>
            Web Designer and Developer who crafts User interface using Frontend Web Technologies and gives a rear view of Backend Development.I'm also edging my Skills in Programming Language and Grasping the Knowledge of Core Subjects. 
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
