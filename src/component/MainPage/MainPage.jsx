import React, { useEffect } from 'react';
import './Page.css';
import Navigation from '../Navigation/Navigation';
import { useNavigate } from 'react-router-dom';
import Experiment from '../Experiment';

const MainPage = () => {
  const navigate = useNavigate();

  // Ask for notification permission on mount
  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission().then(permission => {
        console.log("Notification permission:", permission);
      });
    }
  }, []);

  // Send custom notification
  const sendNotification = () => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("🔔 New Message from Aniket", {
        body: "Thanks for visiting! Hope you're enjoying the site.",
        icon: "/favicon.ico", // You can update this icon
      });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification("🔔 New Message from Aniket", {
            body: "Thanks for visiting! Hope you're enjoying the site.",
            icon: "/favicon.ico",
          });
        }
      });
    }
  };

  const goToAboutPage = () => {
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

          {/* Navigate to About Page */}
          <button onClick={goToAboutPage} className='btn btn-success w-25 mb-2'>
            <span className='Main-About-me'>About Me</span>
          </button>

          {/* Send Notification */}
          <button onClick={sendNotification} className='btn btn-primary w-25'>
            <span className='Main-About-me'>Send Notification</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default MainPage;
