import React from 'react'
import {GrLinkedin} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'
import {MdOutlineContactMail} from 'react-icons/md'
import './header.css';
const headersocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/shrivinayak-birla-24590a214/" target="_blank"><GrLinkedin size={30}/></a>
        <a href="https://github.com/Shrivinayak142002" target="_blank"><BsGithub size={30}/></a>
        <a href="#contact"><MdOutlineContactMail size={30}/></a>
    </div>
  )
}

export default headersocial