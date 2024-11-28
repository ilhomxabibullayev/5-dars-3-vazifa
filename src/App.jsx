import React, { useState, useEffect } from 'react';

const RandomBackgroundColor = () => {
  const [bgColor, setBgColor] = useState('#ffffff');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBgColor(getRandomColor());
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', transition: 'background-color 1s' }}>
      <h1 style={{ textAlign: 'center' }}>
        tasodifiy fon rang
      </h1>
    </div>
  );
};

export default RandomBackgroundColor;
