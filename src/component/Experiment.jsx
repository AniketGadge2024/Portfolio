import React, { useState, useEffect, useRef } from 'react';
import './Exp.css';

const Experiment = () => {
  const [borderRadius, setBorderRadius] = useState("44% 56% 49% 51% / 53% 51% 49% 47%");
  const idleTimer = useRef(null);
  const morphingInterval = useRef(null);

  const generateRandomRadius = () => {
    const rand = () => Math.floor(Math.random() * 30) + 35;
    return `${rand()}% ${100 - rand()}% ${rand()}% ${100 - rand()}% / ${rand()}% ${100 - rand()}% ${rand()}% ${100 - rand()}%`;
  };

  const updateRadiusFromMouse = (x, y) => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const topLeftX = (x / width) * 100;
    const topLeftY = (y / height) * 100;
    const bottomRightX = 100 - topLeftX;
    const bottomRightY = 100 - topLeftY;

    setBorderRadius(
      `${topLeftX.toFixed(2)}% ${bottomRightX.toFixed(2)}% ${topLeftY.toFixed(2)}% ${bottomRightY.toFixed(2)}% / ${topLeftY.toFixed(2)}% ${bottomRightY.toFixed(2)}% ${topLeftX.toFixed(2)}% ${bottomRightX.toFixed(2)}%`
    );
  };

  useEffect(() => {
    const startMorphing = () => {
      if (!morphingInterval.current) {
        morphingInterval.current = setInterval(() => {
          setBorderRadius(generateRandomRadius());
        }, 1000); // 🕒 morph every 0.5 seconds
      }
    };

    const stopMorphing = () => {
      clearInterval(morphingInterval.current);
      morphingInterval.current = null;
    };

    const handleMouseMove = (e) => {
      updateRadiusFromMouse(e.clientX, e.clientY);

      clearTimeout(idleTimer.current);
      stopMorphing();

      idleTimer.current = setTimeout(() => {
        startMorphing();
      }, 2000); // 💤 2s idle before morphing starts
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(idleTimer.current);
      stopMorphing();
    };
  }, []);

  return (
    <div className='body-exp'>
      <div
        className='bob'
        style={{
          borderRadius,
          transition: 'border-radius 0.5s ease',
        }}
      ></div>
      <div
        className='bob1'
        style={{
          borderRadius,
          transition: 'border-radius 0.5s ease',
        }}
      ></div>
      <div
        className='bob2'
        style={{
          borderRadius,
          transition: 'border-radius 0.5s ease',
        }}
      ></div>

    </div>
  );
};

export default Experiment;
