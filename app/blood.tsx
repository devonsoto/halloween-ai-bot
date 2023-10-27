'use client';
import React, { useEffect } from 'react';
import './blood.css';

const Blood = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      createRaindrop();
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  const createRaindrop = () => {
    const container = document.getElementById('container');
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    raindrop.style.left = `${Math.random() * 100}vw`;
    raindrop.style.top = `${Math.random() * 100}vh`;

    if (container) {
      container.appendChild(raindrop);
    }

    setTimeout(() => {
      raindrop.remove();
    }, 2000);
  };

  return <div id='container'>{/* Raindrops will be generated here */}</div>;
};

export default Blood;
