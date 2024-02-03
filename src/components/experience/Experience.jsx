import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import {AiFillHtml5} from 'react-icons/ai'
import {FaCss3Alt, FaPhp} from 'react-icons/fa'
import {FaBootstrap} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {FaUserCheck} from 'react-icons/fa'
import {FaNode} from 'react-icons/fa'
import {GrNode} from 'react-icons/gr'
import {SiMongodb} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {TbApi} from 'react-icons/tb'
import {SiCplusplus} from 'react-icons/si'
import {FaJava} from 'react-icons/fa'
import {IoLogoPython} from 'react-icons/io'
import {RiCodeBoxLine} from 'react-icons/ri'
import {SiGooglecloud} from 'react-icons/si'
import {FaAws} from 'react-icons/fa'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

      <div className="experience__programming">
        <h3>Programming Languages</h3>
          <div className="experience__content">
          <article className="experience__details">
          <FaJava size={30} className="experience__details-icons"/>
            <div>
            <h4>JAVA</h4>
            <small className="text-light">Advance</small>
            </div>
          </article>

          <article className="experience__details">
            <FaPhp size={30} className="experience__details-icons"/>
            <div>
            <h4>PHP</h4>
            <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <IoLogoPython size={30} className="experience__details-icons"/>
            <div>
            <h4>Python</h4>
            <small className="text-light">Begineer</small>
            </div>
          </article>        
          </div>
        </div>

        <div className="experience__frontend">
          <h3>Cloud Computing</h3>
          <div className="experience__content">
          <article className="experience__details">
            <SiGooglecloud size={30} className="experience__details-icons"/>
            <div>
            <h4>Google Cloud</h4>
            <small className="text-light">Begineer</small>
            </div>
          </article>

          <article className="experience__details">
            <FaAws size={30} className="experience__details-icons"/>
            <div>
            <h4>Amazon Web Services(AWS)</h4>
            <small className="text-light">Begineer</small>
            </div>
          </article>        

          </div>
        </div>

        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
          <article className="experience__details">
            <AiFillHtml5 size={30} className="experience__details-icons"/>
            <div>
            <h4>HTML5</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className="experience__details">
            <FaCss3Alt size={30} className="experience__details-icons"/>
            <div>
            <h4>CSS3</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className="experience__details">
            <FaBootstrap size={30} className="experience__details-icons"/>
            <div>
            <h4>Bootstrap</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className="experience__details">
            <IoLogoJavascript size={30} className="experience__details-icons"/>
            <div>
            <h4>JavaScript</h4>
            <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <FaReact size={30} className="experience__details-icons"/>
            <div>
            <h4>React JS</h4>
            <small className="text-light">Intermediate</small>
            </div>
          </article>


          </div>
        </div>

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
          <article className="experience__details">
            <FaNode size={30} className="experience__details-icons"/>
            <div>
            <h4>NodeJS</h4>
            <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <GrNode size={30} className="experience__details-icons"/>
            <div>
            <h4>ExpressJS</h4>
            <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <SiMongodb size={30} className="experience__details-icons"/>
            <div>
            <h4>MongoDB</h4>
            <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <SiMysql size={30} className="experience__details-icons"/>
            <div>
            <h4>MySQL</h4>
            <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <TbApi  className="experience__details-icons"/>
            <div>
            <h4>API Testing</h4>
            <small className="text-light">Begineer</small>
            </div>
          </article>

          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
