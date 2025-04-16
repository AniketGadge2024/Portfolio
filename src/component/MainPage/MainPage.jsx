import React, { useEffect } from 'react';
import './Page.css';
import Navigation from '../Navigation/Navigation';
import { useNavigate } from 'react-router-dom';
import Experiment from '../Experiment';

const MainPage = () => {
  const navigate = useNavigate();

  // Ask for notification permission on page load
  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission().then(permission => {
        console.log("Notification permission:", permission);
      });
    }
  }, []);

  // Trigger a notification
  const handleNotification = () => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("Hello from Aniket Gadge!", {
        body: "Check out my About page!",
        icon: "/favicon.ico", // Replace with your icon path if available
      });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification("Hello from Aniket Gadge!", {
            body: "Check out my About page!",
            icon: "/favicon.ico",
          });
        }
      });
    }
    navigate('/About');
  };

  return (
    <>
      <Navigation />
      <div className='d-flex justify-content-center align-items-center Body-Main'>
        <div className='d-flex flex-column justify-content-center align-items-center Main-content'>
          <h4 className='Title-name'>Aniket Gadge</h4>
          <div className='animation-div'><Experiment /></div>
          <p className='text-center title-para'>
            I’m a full-stack web developer specializing in building modern, responsive, and scalable web applications.
          </p>
          <button onClick={handleNotification} className='btn btn-success w-25'>
            <span className='Main-About-me'>About Me</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default MainPage;
