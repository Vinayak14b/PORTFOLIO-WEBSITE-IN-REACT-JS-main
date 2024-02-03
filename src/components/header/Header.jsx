import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/fullstack.jpg";
import Bounce from "react-reveal/Bounce";
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Typewriter from "typewriter-effect";
const Header = () => {
  return (
    <>
      <header>
        <div className="container header__container">
          <h>
            {/* <Slide top cascade duration={900}> */}
              Hello I'm
            {/* </Slide> */}
          </h>
          <h1>
            {/* <Bounce top cascade duration={900}> */}
              Shrivinayak Birla
            {/* </Bounce> */}
          </h1>
          <h2 className="text-light">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 200,
                strings: [
                  "Full Stack Web Developer",
                  "Competitive Programmer",
                  "Tech Enthusiast",
                ],
              }}
            />
          </h2>
          <CTA />
          {/* <HeaderSocial/> */}

          <div className="me">
          <Zoom duration={3000}>
            <img src={ME} alt="me" />
          </Zoom>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
