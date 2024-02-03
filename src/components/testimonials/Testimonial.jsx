import React from "react";
import "./testimonial.css";
import AVT1 from "../../assets/logicx.jpg";
import AVT2 from "../../assets/machine.jpg";
import AVT3 from "../../assets/IRJET.jpg";
import AVT4 from "../../assets/coordinator.jpg";
import AVT5 from "../../assets/Web Dev.png";
import AVT6 from "../../assets/Udemy.png";
import AVT7 from "../../assets/reactboot.jpg";
import AVT8 from "../../assets/secretary.jpg";
import AVT9 from "../../assets/CN.jpg";
import AVT10 from "../../assets/Code.png";


// import Swiper core and required modules
import {Pagination} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Certifications</h5>
      <h2>FUN AND LEARN</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >


        <SwiperSlide className="testimonial">
          <h3 className="client__name">DSA by Coding Ninjas</h3>
          <small className="client__review">
            Learned all Linear , Non-Linear Data Structures availble in Course Work by Coding Ninjas.
          </small>
          <small className="client__review"></small>
          <div className="client__avatar">
            <img src={AVT9} alt="Avatar 1" />
          </div>
        </SwiperSlide>



        <SwiperSlide className="testimonial">
          <h3 className="client__name">OOP by Coding Ninjas</h3>
          <small className="client__review">
            Learned all the concepts of Object Oriented Programming availble in Course Work by Coding Ninjas(Codestudio).
          </small>
          <small className="client__review"></small>
          <div className="client__avatar">
            <img src={AVT10} alt="Avatar 1" />
          </div>
        </SwiperSlide>


        <SwiperSlide className="testimonial">
          <h3 className="client__name"> Publication Of Project Paper</h3>
          <small className="client__review">
          Successfully submitted online to the International Research Journal of Engineering and Technology (IRJET), Volume 10, Issue 11.
          </small>
          <small className="client__review"></small>
          <div className="client__avatar">
            <img src={AVT3} alt="Avatar 1" />
          </div>
        </SwiperSlide>


        <SwiperSlide className="testimonial">
          <h3 className="client__name">Light and Sound Coordinator of College</h3>
          <small className="client__review">
          As the Light and Sound Coordinator at Vishwakarma Institute of Technology, Pune, I spearheaded the seamless execution of diverse events, from concerts to conferences. 
          </small>
          <small className="client__review"></small>
          <div className="client__avatar">
            <img src={AVT4} alt="Avatar 1" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <h3 className="client__name">Light and Sound Secretary of College</h3>
          <small className="client__review">
          As the Light and Sound Secretary at Vishwakarma Institute of Technology, Pune, I was responsible for orchestrating captivating audio-visual experiences that enhanced the overall ambiance of various college events.  .
          </small>
          <small className="client__review"></small>
          <div className="client__avatar">
            <img src={AVT8} alt="Avatar 1" />
          </div>
        </SwiperSlide>


        <SwiperSlide className="testimonial">
          <h3 className="client__name">ReactJs and BootStrap</h3>
          <small className="client__review">
          Got to learn how to use Bootstrap for Styling in ReactJs for Websites
          </small>
          <small className="client__review"></small>
          <div className="client__avatar">
            <img src={AVT7} alt="Avatar 1" />
          </div>
        </SwiperSlide>


        {/* <SwiperSlide className="testimonial">
          <h3 className="client__name">C++ Programming</h3>
          <small className="client__review">
            Studied and debugged the Programs from begineer to advance in C++.Course instructor was Abdul Bari.
          </small>
          <small className="client__review"></small>
          <div className="client__avatar">
            <img src={AVT6} alt="Avatar 1" />
          </div>
        </SwiperSlide> */}



        <SwiperSlide className="testimonial">
          <h3 className="client__name">Full Stack Web Development</h3>
          <small className="client__review">
            Our College has Orgainsed this 1 Month Bootcamp and learned skills
            about Web Dev , MERN Stack , FrontEnd , Backend ,etc.
          </small>
          <small className="client__review"></small>
          <div className="client__avatar">
            <img src={AVT5} alt="Avatar 1" />
          </div>
        </SwiperSlide>


        


        <SwiperSlide className="testimonial">
          <h3 className="client__name">Certificate of Achievement in Hackathon X Machine</h3>
          <small className="client__review">
            
          1st Position Hackathon X Machine" at Vishwa Tech Spectra'23, showcasing exceptional problem-solving and coding skills in a competitive environment.
          </small>
          <small className="client__review"></small>
          <div className="client__avatar">
            <img src={AVT2} alt="Avatar 1" />
          </div>
        </SwiperSlide>


        <SwiperSlide className="testimonial">
          <h3 className="client__name">Certificate of Achievement in LogicX</h3>
          <small className="client__review">
          1st Position Awarded in recognition of outstanding skills demonstrated in LogicX, securing the 1st position at Vishwa Tech Spectra'23, hosted by Vishwakarma Institute of Technology, Pune.
          </small>
          <small className="client__review"></small>
          <div className="client__avatar">
            <img src={AVT1} alt="Avatar 1" />
          </div>
        </SwiperSlide>
      
      </Swiper>
    </section>
  );
};

export default Testimonial;
