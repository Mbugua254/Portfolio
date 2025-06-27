
import React, {useState} from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import Tours from '../Images/Tours.jpg'
import Movie from '../Images/Movie.jpg'
import Weather from '../Images/Weather.jpg'
import Futuretech from '../Images/Futuretech.jpg'
import Touring from '../Images/Touring.jpg'
import Modal from './Modal';

const projects = [
  {
    name: 'Tour Agency Website',
    description: 'This is the official website for Starluck Travel LTD, a tours and travel agency based in Nairobi Kenya.',
    codeLink: 'https://starlucktravel.com',
    longDescription: 'The website showcases the services offered by the company. Latest packages, offers and discounted rates for different tour destinations. The website has been a game changer for the company as it has put the business out there resulting in rocketing of the sales in the company. It follows the best design practices, seo and is very user friendly. It is also responsive on all devices',
    image: Touring,
    stack: ['Javascript', 'WordPress', 'CSS', 'HTML'],
  },
  {
    name: 'Tours and Travel Booking App',
    description: 'Full-Stack Web App for Booking Travel Destinations',
    codeLink: 'https://github.com/Mbugua254/Starluck',
    longDescription: 'Using the app, users can register and create specialized accounts. They can also make bookings and monitor the approval process. The users can also leave feedback on the destinations depending on the experience that they had. The travel agents on the other hand act as the admins and have everything in an admin dashboard. They can monitor users, approve or cancel bookings and also add, edit or delete the destinations in the app.',
    image: Tours,
    stack: ['Javascript', 'React', 'FLask'],
  },
  {
    name: 'Movie Ticket Booking App',
    description: 'An app to help people book tickets to a movie',
    codeLink: 'https://github.com/Mbugua254/code-challenge-flatdango',
    image: Movie,
    longDescription: 'This app presents a list of movies and tickets for the movies. It also have a count of the tickets each movie has and allows users to acquire tickets through booking. When all tickets have been acquired, the sold out message is shown letting the users know that the tickets to a certain movie are already finished.',
    stack: ['JavaScript', 'HTML'],
  },
  {
    name: 'Weather App',
    description: 'Single-page app with a REST API to get weather info',
    codeLink: 'https://github.com/Mbugua254/weather-app-phase-1-project',
    longDescription: 'Building a weather app with the help of RestAPI to fetch the data from online based on location provided by the user. Great Full Stack experience gained.',
    image: Weather,
    stack: ['CSS', 'React', 'RestAPI'],
  },
  {
    name: 'Future?',
    description: 'I will tell about possible future projects here',
    codeLink: '',
    longDescription: "What should one write here? Always learning new technologies and improving my abilities on the current ones.",
    image: Futuretech,
    stack: [],
  },
  
];

const workExperience = [
  {
    company: 'Starluck Travel LTD',
    period: '2022/06 - Present',
    title: 'Senior Web Developer',
    description: 'Developing and maintaining the website for a tours and travel company'
  },
  {
    company: 'Upwork',
    period: '2023/01 - 2024/01',
    title: 'Freelance Web Developer',
    description: 'I worked with clients on the platform to build websites and make updates'
  },
  {
    company: 'Fiverr',
    period: '2022/01 - 2024/12',
    title: 'Freelance Technical Writer',
    description: 'I worked as a technical writer in the field of tech'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showProjects, setShowProjects] = useState(true);
  const [technologies, setTechnologies] = useState([
    ...new Set(projects.flatMap(project => project.stack))
  ]);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  //const toggleView = () => {
   // setShowProjects(!showProjects);
  //};

  /*const shuffleTechnologies = () => {
    setTechnologies(prevTech => {
      const shuffled = [...prevTech];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
  };*/

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  const techStackVariants = {
    hidden: { 
      opacity: 0,
      y: 100
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const techItemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div 
      className="projects-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="view-selector">
        <motion.div 
          className="toggle-buttons"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            className={`toggle-btn ${!showProjects ? 'active' : ''}`}
            onClick={() => setShowProjects(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Work
            {!showProjects && <motion.div className="active-indicator" layoutId="activeIndicator" />}
          </motion.button>
          <motion.button
            className={`toggle-btn ${showProjects ? 'active' : ''}`}
            onClick={() => setShowProjects(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Projects
            {showProjects && <motion.div className="active-indicator" layoutId="activeIndicator" />}
          </motion.button>
        </motion.div>
      </div>

      {!showProjects && (
        <>
          <motion.h2 
            className="projects-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Work Experience
          </motion.h2>
          <motion.div 
            className="experience-list"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
          >
            {workExperience.map((job, index) => (
              <motion.div
                className="experience-card"
                key={index}
                variants={cardVariants}
              >
                <div className="experience-header">
                  <h3>{job.company}</h3>
                  <span className="period">{job.period}</span>
                </div>
                <h4>{job.title}</h4>
                <p>{job.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}

      {showProjects && (
        <>
          <motion.h2 
            className="projects-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h2>
          <motion.p 
            className='project-title-text'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Click on the cards for more info.
          </motion.p>
          <motion.div 
            className="projects-list"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                className="project-card"
                key={index}
                variants={cardVariants}
                whileHover="hover"
                onClick={() => openModal(project)}
              >
                <div className="project-card-header">
                  <motion.img 
                    src={project.image} 
                    alt={project.name} 
                    className="project-image"
                    whileHover={{ scale: 1.1, opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="project-title">
                    <h2>{project.name}</h2>
                    {project.codeLink && (
                      <motion.a 
                        href={project.codeLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Project
                      </motion.a>
                    )}
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {selectedProject && <Modal project={selectedProject} closeModal={closeModal} />}
        </>
      )}

      <motion.div
        className="project-stack"
        variants={techStackVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technology I have used:
        </motion.h4>
        <motion.ul>
          {technologies.map((tech, idx) => (
            <motion.li 
              key={tech}
              className="tech-item"
              variants={techItemVariants}
              whileHover="hover"
              custom={idx}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: idx * 0.25
                }
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                layout: {
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }
              }}
            >
              {tech}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
