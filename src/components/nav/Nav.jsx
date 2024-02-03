import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsFillBookmarksFill} from 'react-icons/bs'
import {BsCodeSlash} from 'react-icons/bs'
import {AiFillMessage} from 'react-icons/ai'
import {GiBookmarklet} from 'react-icons/gi'
import {TbCertificate} from 'react-icons/tb'
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#'?'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about'?'active' : ''}><AiOutlineUser/></a>
      <a href="#service" onClick={()=> setActiveNav('#service')} className={activeNav === '#service'?'active' : ''}><GiBookmarklet/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience'?'active' : ''}><BsFillBookmarksFill/></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio'?'active' : ''}><BsCodeSlash/></a>
      <div className='Khushal'>
      <a href="#testimonial" onClick={()=> setActiveNav('#testimonial')} className={activeNav === '#testimonial'?'active' : ''}><TbCertificate/></a>
      </div>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact'?'active' : ''}><AiFillMessage/></a>
    </nav>
  )
}

export default Nav