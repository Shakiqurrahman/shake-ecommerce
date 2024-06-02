import React from 'react';
import banner from '../assets/home/banner-hero.jpg'

const Hero = () => {
  return (
    <div className='w-full'>
      <img className='relative -z-10 w-full' src={banner} alt="Hero image" />
    </div>
  );
};

export default Hero;