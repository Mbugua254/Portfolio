import React from 'react';
import './Links.css';
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import Framer Motion

const Links = () => {
  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Staggered animation for each item
        type: 'spring',
        stiffness: 100,
      },
    }),
  };

  return (
    <motion.div
      className="links-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="links-title">Links</h1>
      <ul className="links-list">
        {[
          {
            name: 'Facebook',
            description: 'Follow my Facebook',
            href: 'https://www.facebook.com/devmike254/',
            icon: <FaFacebook />,
          },
          {
            name: 'LinkedIn',
            description: 'Professional network',
            href: 'https://www.linkedin.com/in/michael-mbugua-developer/',
            icon: <FaLinkedin />,
          },
          {
            name: 'Mike',
            description: 'Follow my instagram',
            href: 'https://www.instagram.com/dev_mike254/',
            icon: <FaInstagram />,
          },
          {
            name: 'GitHub',
            description: 'Check my code',
            href: 'https://github.com/Mbugua254',
            icon: <FaGithub />,
          },
        ].map((link, index) => (
          <motion.li
            key={link.name}
            className="link-item"
            custom={index}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
          >
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <div className="link-content">
                <span className="link-name">{link.name}</span>
                <span className="link-description">{link.description}</span>
                <div className="links-link-icon">{link.icon}</div>
              </div>
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Links;