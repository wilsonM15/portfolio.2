import React from 'react'
import './contact.css'
function Contact() {
  return (
    <section className='contact-container'>
     <div className='title-contact'>
       <h1 className='contact-h1'>Contact</h1>
     </div>
     <div className='contact-form'>
      <p>Let's work together</p>
      <ul>
        <li><a href="mailto:wilsonmoura15@gmail.com"> wilsonmoura15@gmail.com </a></li>
        <li><a href='https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAESjns0BsMj86Evnfu6qZvIBcDNKAatdvek&keywords=wilson%20de%20moura&origin=RICH_QUERY_SUGGESTION&position=0&searchId=ffc562c5-9477-4b6b-a486-fb11f28073ae&spellCorrectionEnabled=false'>Linkdin</a></li>
      </ul>
     </div>
    </section>
  )
}

export default Contact