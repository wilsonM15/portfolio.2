import React from 'react'
import './Portfolio.css'
function Portfolio() {
  return (
    // Your code here
  <section className="portfolio-contain">
    <div className='portfolio'>
      <h1>Portfolio</h1>

      <div className='projects-container'>

        <div className='project-1'>
          <img src="village.png" alt="Village Run" />
          <div className='middle-1'>
            <div className='text-project'><a href="https://villagerunclub.netlify.app/">Village Run<p>September.2023</p></a></div>
          </div>
        </div>

        <div className='project-2'>
          <img src="jmm-1.png" alt="JJM services" />
          <div className='middle-2'>
            <div className='text-project'><a href="https://jjmservices.netlify.app/">JJM Services <p>March.2024</p></a></div>
          </div>
        </div>
      </div>
      <div className='projects-container'>
        <div className='project-3'>
          <img src="st-2.png" alt="Screen Translations" />
          <div className='middle-3'>
            <div className='text-project'><a href="https://screentranslations.netlify.app/">Screen Translations <p>July.2024</p></a></div>
          </div>
        </div>

        <div className='project-4'>
          <img src="pub.png" alt="The Canadian Embassy Pub" />
          <div className='middle-4'>
            <div className='text-project'><a href="https://thecanadianembassypub.netlify.app/">The Canadian Embassy Pub<p>August.2024</p></a></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Portfolio