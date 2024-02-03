import React from 'react'
import './footer.css'
import {FaTwitter} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      {/* <a href="#" className='footer__logo'>Home</a> */}
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#service">Education</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#testimonial">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.threads.net/@_vinayak_b0314" target="_blank"><FaTwitter/></a>
        <a href="https://www.instagram.com/khushalmalu/" target="_blank"><BsInstagram/></a>
        <a href="https://www.facebook.com/vinayak.birla.77" target="_blank"><FaFacebookSquare/></a>
      </div>

      <div className="footer__copyright">
        <h4>&copy; My Portfolio Website</h4>
      </div>
    </footer>
  )
}

export default Footer