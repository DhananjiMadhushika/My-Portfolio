import React from 'react';
import Typewriter from "typewriter-effect";
import Footer from '../Components/Footer';
import About from './About';
import Contact from './Contact';
import './Home.css';
import Portfolio from './Portfolio';
import Skills from './Skills';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section>
      <div className='home-container'>
        <div className="main-content">
          <h4 style={{ paddingBottom: 10 }} className="heading">
            Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h4>
          <h1 className="heading-name">
            I'M
            <strong className="main-name"> Dhananji <span style={{marginLeft:75}}> Madhushika</span></strong>
          </h1>

          <div className='typewritter'>
            <Typewriter
              options={{
                strings: [
                  "MERN Stack Developer",
                  "Mobile Application Developer",
                  "Frontend Developer",
                  "UI/UX Designer"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            /></div>
            <p>I am a Computer Engineering Undergraduate at Faculty of Engineering, University of Ruhuna in Sri Lanka.</p>
            
            <div className='social'>
            
      <a href='https://www.facebook.com/dananji.madushika.3?mibextid=ZbWKwL' target='_blank' rel='noopener noreferrer'>
        <i className='fab fa-facebook-f'></i>
      </a>
      <a href='https://github.com/DhananjiMadhushika' target='_blank' rel='noopener noreferrer'>
        <i className='fab fa-github'></i>
      </a>
      <a href='https://www.linkedin.com/in/dhananji-madhushika-a696b8259/' target='_blank' rel='noopener noreferrer'>
        <i className='fab fa-linkedin-in'></i>
      </a>
      <a href='https://wa.me/94715281203' target='_blank' rel='noopener noreferrer'>
        <i className='fab fa-whatsapp'></i>
      </a>
    </div>

    <div className='main-btn'>
      <Link to={'/contact'} className='btn'>Hire Me</Link>
      <a 
              href='https://drive.google.com/file/d/1wZJCc7xMhLvxy_ylpTdfFXKx5INxHGcy/view?usp=sharing' 
              className='btn btn2'
              download
              target='_blank'
              rel='noopener noreferrer'
            >
              Download CV
            </a>

    

            </div>
          </div> 
          <div className='home-img'> 
        <img src={`${process.env.PUBLIC_URL}/images/1.png`}/>
      </div>
    </div>

    <About/>
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </section>
    
  )
}

export default Home;



















