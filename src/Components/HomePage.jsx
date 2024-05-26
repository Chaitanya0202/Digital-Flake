import React from 'react';
import imgLogo from './assets/logoDigital.png';
const HomePage = () => {

  return (
    <div className="fixed top-80 left-0 w-full flex justify-center">
    <img
      src={`${imgLogo}`}
      alt="Home"
      className="max-w-full max-h-full"
    />
  </div>
  );
};

export default HomePage;
