import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='about-container'>

      <div className='image-container'>
        <h1>About <span>Me</span></h1>
      <div className='about-img'> 
        <img src={`${process.env.PUBLIC_URL}/images/1.png`}/>
      </div>
      </div>

      <div className='about-text'>
        <div className='exp-area'>
          <p >
          Hello! I'm Dhananji Madhushika, a Computer Engineering undergraduate at the Faculty of Engineering, 
          University of Ruhuna. With a strong passion for web development, mobile app development, 
          and UI/UX design, 
          I am dedicated to creating innovative and user-friendly digital experiences.
          I am constantly exploring new technologies and design trends to stay ahead in the ever-evolving tech landscape. Committed to excellence and driven by curiosity, I aspire to contribute to 
          impactful projects that enhance user experiences and push the boundaries of technology. 
             
          </p>

        </div>

      </div>
      
    </div>
  )
}

export default About
