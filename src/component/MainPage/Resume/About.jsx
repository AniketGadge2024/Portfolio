import React, { useEffect } from 'react';
import Profile from '../Img/profileimg.jpg'
import './Resume.css';
import Navigation from '../../Navigation/Navigation';

const About = () => {
  const projects = [
    {
      title: 'Unperturb_Advancement',
      techStack: 'React | JavaScript | Google Sheets API',
      description: 'Built a responsive React app to manage student data, using JavaScript and Google Sheets as a lightweight backend.'
    },
    {
      title: 'Mahim Cake Bakers',
techStack: 'React | JavaScript | Google Sheets API',
description: 'Developed a responsive web application for a local bakery to showcase products, capture customer inquiries, log order details using Google Sheets, and integrate WhatsApp for direct customer communication'
    },
    {
      title: 'User Registration Form',
      techStack: 'React | Node.js | Express | SQL',
      description: 'Built a full-stack registration form as a personal project using React for the frontend and Node.js with Express for backend APIs. Implemented form validation and stored user data securely in a SQL database.'      
    },
    {
      title: '4-Digit Number Guesser Game',
techStack: 'React | JavaScript',
description: 'Created an interactive 4-digit number guessing game using React, enhanced with mathematical hinting logic including addition, multiplication, division, integration, and differentiation to make the gameplay both challenging and educational.'
    },
  ];
  const Skills = [
    { name: 'React', progress: 90 },
    { name: 'JavaScript', progress: 85 },
    { name: 'Node', progress: 50 },
    { name: 'HTML & CSS', progress: 99 },
  ];

  useEffect(() => {
    const progressBars = document.querySelectorAll('.progress-bar');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            bar.style.width = bar.getAttribute('data-width');
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    progressBars.forEach((bar) => observer.observe(bar));

    return () => observer.disconnect();
  }, []);

  return (
    <div className='d-flex flex-column align-items-center About-Main-Body'>
      <Navigation></Navigation>
      <h3 className='About-title'>About</h3>
      <p className='About-title-info text-center'>
        I'm a full-stack web developer with a passion for building modern, responsive, and scalable web applications. I work across the entire stack—from designing sleek user interfaces to developing powerful backend systems. My goal is to create clean, efficient, and user-friendly solutions that bring real value to users.
      </p>

      <div className="row w-75 profile-project-section">
        <div className="col-md-6 Content-div-1">
          <img src={""} alt='phto' className="ME-Profile" />
        </div>

        <div className="col-md-6 Content-div-2">
          <h4 className='title-section'>Check out my recent freelance and personal projects below</h4>

          {/* Map through the projects array */}
          {projects.map((project, index) => (
            <div key={index}>
              <h5 className='sub-title-section'>{project.title}</h5>
              <p className='web-info'>{project.techStack}</p>
              <p className='web-info'>{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Work Experience */}
      <div className='Work-Experience d-flex justify-content-center align-items-center flex-column w-100'>
        <h4 className='text-center title-section '>Work Experience</h4>
        <div className='w-75'>
          <div className='d-flex justify-content-between'>
            <h6 className='sub-title-section' >Rework.Ai (Hubnex.labs)</h6> <h6 className='sub-title-section' >May 2024 – Nov 2024 (6 months)</h6>
          </div>
          <p className='web-info' > ● Developed responsive web applications using React.js, integrated RESTful APIs, and optimized performance, contributing to a 30% increase in user engagement and a 25% rise in organic traffic.
            <br />
            ● Collaborated with cross-functional teams to deliver key features on time, wrote unit tests for React components, refactored legacy code, and participated in code reviews, improving code stability and reducing bugs by 20%.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="w-100">
    <h4 className="text-center title-section">Skills</h4>
    <div className="d-flex align-items-center flex-column">
      {Skills.map((skill, index) => (
        <div key={index} className="w-75">
          <p className='sub-title-section' >{skill.name}</p>
          <div className="progress Progress-bar">
            <div
              className="progress-bar bg-success"
              data-width={`${skill.progress}%`}
              style={{ width: '0%', transition: 'width 1s' }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
    </div>
  );
};

export default About;
