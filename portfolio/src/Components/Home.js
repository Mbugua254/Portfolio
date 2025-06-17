import React from 'react';
import './Home.css'; // Import styling
import { FaInstagram, FaLinkedinIn, FaGithub, FaRegEnvelope } from "react-icons/fa";
import profilepic from '../Images/profilepic.jpeg';
import About from './About'; // Import About component

const Home = () => {
  return (
    <div className="home-container-base">
      <div className="home-container">
        <header className="home-header">
          <h2>Hi, Mike here!</h2>
          
        
         <div className="home-image-section">
            <img
              src={profilepic}
              alt="Mikey"
              className="home-large-image"
            />
          </div>

          <p className="home-subtitle">
            I'm an ardent software engineer from Kenya! I'm passionate about learning new things, constantly seeking opportunities to expand my knowledge and skills. I thrive in environments where I can take on new challenges, pushing myself to grow both personally and professionally.
          </p>

          {/* Links Section */}
          <div className="home-links">
            
             
            <a
              href="https://www.linkedin.com/in/michael-mbugua-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-button linkedin"
            >
              <div className="link-content">
                <FaLinkedinIn className="link-icon" />
                <span>LinkedIn</span>
              </div>
            </a>
            <a
              href="https://github.com/Mbugua254"
              target="_blank"
              rel="noopener noreferrer"
              className="link-button github"
            >
              <div className="link-content">
                <FaGithub className="link-icon" />
                <span>GitHub</span>
              </div>
            </a>
            <a
              href="https://www.instagram.com/dev_mike254/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-button instagram"
            >
              <div className="link-content">
                <FaInstagram className="link-icon" />
                <span>Instagram</span>
              </div>
            </a>
            <a
              href="mailto:mikembugua254@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-button contact"
            >
              <div className="link-content">
                <FaRegEnvelope className="link-icon" />
                <span>Contact Me</span>
              </div>
            </a>
          </div>
        </header>

        {/* About Section */}
        <About /> 
        
        {/* Footer */}
        <footer className="home-footer">
          <p>© {new Date().getFullYear()} DeveloperMike. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;