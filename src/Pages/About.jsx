import React from 'react'
import './About.css'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function About() {

  return (
    // Your code here
    <section className='About-container'>
        <div className='contain'>
        <p className='main-text'> Hey there! I’m Wilson de Moura, a Designer & Frontend Developer living in 
          Paris with a background in filmmaking and theatre. So yeah, you could say I know 
          a thing or two about setting the stage and making things look epic, whether it’s 
          on screen or on the web. I started my adventure in web development in early 2023, 
          and let’s just say it’s been one wild, code-fueled ride ever since. I’m all about 
          creating websites that not only work like a charm but also make you say, “Wow, that’s 
          slick!” If you’re a business owner itching to launch a website, a developer 
          ready to brainstorm the next big thing, or just someone who enjoys the finer things in 
          life, drop me a message. 
          Let’s team up and make something so cool.
          P.S. Don’t worry, I won’t make you sit through any of my old theatre monologues. Unless you 
          ask nicely.</p>
        </div>

        <h2 className='skills'>My skills</h2>
        <p className='text-skills'>I'm on a non-stop upgrade spree, sharpening my web dev skills like a code
         ninja—constantly evolving, constantly leveling up!</p>

        <div className='skills-container'>
          <div className='html-container'>
          <FaHtml5 />
          </div>
          <div className='css-container'>
          <IoLogoCss3 />
          </div>
        </div>  

        <div className='skills-container'>
          <div className='js-container'>
          <IoLogoJavascript />
          </div>
          <div className='react-container'>
          <FaReact />
          </div>
        </div>

        <div className='skills-container'>
          <div className='figma-container'>
          <FaFigma />
          </div>
          <div className='github-container'>
          <FaGithub />
          </div>


        </div>
     
  
        
      
    </section>
  )
}

export default About