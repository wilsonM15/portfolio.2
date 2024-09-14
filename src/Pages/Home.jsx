import React from 'react'
import './Home.css'
function Home() {
  return (
    <div>
        <section>
    <div className="container-home">
        
        <div className="content">
            <h2>I'm <span>Wilson de Moura</span>, I am passionate about creating visually appealing and user-friendly websites.</h2>
            <p> Design & Web Developer</p>

         
        <div className="contact-button">
           <button className="contact"><a href='Contact'>Contact Me</a></button>
        </div>
        </div>     
        
        <div className="image-AI">
            <img src="ME.jpeg"  alt="Wilson de Moura" />
        </div>
    </div>
   </section>
      
    </div>
  )
}

export default Home