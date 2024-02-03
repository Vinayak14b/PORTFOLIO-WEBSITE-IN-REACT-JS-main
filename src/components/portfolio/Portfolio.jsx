import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/file_com.jpg'
import IMG2 from '../../assets/HomeServices.jpg'
import IMG3 from '../../assets/library.jpg'
import IMG4 from '../../assets/startup.jpeg'
import IMG5 from '../../assets/weed.jpg'
import IMG6 from '../../assets/todo.png'


const Portfolio = () => (

  

  <section id='portfolio'>
    <h5>Projects with Programming Languages</h5>
    <h2>My Projects</h2>
    <div className="container portfolio__container">


      {/* New Projects Updated */}

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img className="imageStyle" src={IMG4} alt="" />
        </div>
        <h3>Upstart </h3>
        <div className="portfolio__item-cta">
          <a href="https://21-crawlers.vercel.app/" className='btn' target='_blank'>Live</a>
          <a href="https://github.com/Vinayak14b/Upstart_main/tree/main" className='btn' target='_blank'>Github</a>
        </div>
      </article>
      
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img className="imageStyle" src={IMG6} alt="" />
        </div>
        <h3> To Do List </h3>
        <div className="portfolio__item-cta">
          <a href="https://todo-list-brown-pi.vercel.app/" className='btn' target='_blank'>Live</a>
          <a href="https://github.com/Vinayak14b/Basic_TODO_list_main" className='btn' target='_blank'>Github</a>
        </div>
      </article>


      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img className="imageStyle" src={IMG5} alt="" />
        </div>
        <h3>Machine Learning Customer Churn Analysis </h3>
        <div className="portfolio__item-cta">
          {/* <a href="https://drive.google.com/file/d/1Y1jZ9oseoRXY7ssy4XGqvrMvqQKhAAj5/view?usp=sharing" className='btn' target='_blank'>Live</a> */}
          <a href="https://github.com/Vinayak14b/ML-ChurnPrediction-main/tree/main" className='btn' target='_blank'>Github</a>
        </div>
        
      </article>


      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img className="imageStyle" src={IMG2} alt="" />
        </div>
        <h3>Home Services Website in PHP Laravel with integrated AI </h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com/Vinayak14b/Home-Services-website-With-Chatbot" className='btn' target='_blank'>Github </a>
        </div>

      </article>



      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img className="imageStyle" src={IMG1} alt="" />
        </div>
        <h3>File Compression Using Huffman Coding in Java</h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com/Vinayak14b/File-Compression-main.git" className='btn' target='_blank'>Github </a>
        </div>
      </article>

      
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img className="imageStyle" src={IMG3} alt="" />
        </div>
        <h3>Contact Management System using Express and Rest APIs</h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com/Vinayak14b/Contact-mangement-main.git" className='btn' target='_blank'>Github </a>
        </div>

      </article>


    </div>
  </section>
)

export default Portfolio