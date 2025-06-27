import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa';

const Navigation = () => {
  return (
    <nav className="navigation">
      {/* Name on the left */}
      <div className="name">
        <span>DeveloperMike</span>
        
      </div>
      {/* Navigation links in the center */}
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
          >
            Work
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/links"
            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
          >
            Links
          </NavLink>
        </li>
        
      </ul>

      {/* Social media links on the right */}
      <div className="navigation-social-links">
      <a
          href="tel:+254743108593"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPhone className="link-icon-nav" />
        </a>
      <a
          href="https://wa.me/254743108593"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="link-icon-nav" />
        </a>
        <a
          href="https://www.instagram.com/dev_mike254/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="link-icon-nav" />
        </a>
        
        <a
          href="https://www.linkedin.com/in/michael-mbugua-developer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="link-icon-nav" />
        </a>
        <a
          href="mailto:mikembugua254@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="link-icon-nav" />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;